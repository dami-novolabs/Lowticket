import { useEffect, useState } from 'react';

export type ABVariant = 'A' | 'B';

interface ABTestConfig {
  testName: string;
  storageKey?: string;
  distribution?: number; // 0.5 = 50/50 split
}

interface ABTestResult {
  variant: ABVariant;
  isReady: boolean;
}

/**
 * Hook para A/B testing con persistencia en localStorage
 * Distribuye automáticamente 50/50 y mantiene consistencia durante toda la sesión
 */
export function useABTest({ 
  testName, 
  storageKey, 
  distribution = 0.5 
}: ABTestConfig): ABTestResult {
  const [variant, setVariant] = useState<ABVariant>('A');
  const [isReady, setIsReady] = useState(false);
  const key = storageKey || `ab_test_${testName}`;

  useEffect(() => {
    // Check for URL override (útil para testing manual)
    const urlParams = new URLSearchParams(window.location.search);
    const urlVariant = urlParams.get('variant');
    
    if (urlVariant === 'A' || urlVariant === 'B') {
      setVariant(urlVariant);
      localStorage.setItem(key, urlVariant);
      setIsReady(true);
      
      // Track assignment
      trackABTestAssignment(testName, urlVariant, 'url_override');
      return;
    }

    // Check for existing assignment in localStorage
    const existingVariant = localStorage.getItem(key);
    
    if (existingVariant === 'A' || existingVariant === 'B') {
      setVariant(existingVariant);
      setIsReady(true);
      
      // Track assignment (returning user)
      trackABTestAssignment(testName, existingVariant, 'returning');
    } else {
      // New user - assign variant randomly
      const randomVariant: ABVariant = Math.random() < distribution ? 'A' : 'B';
      setVariant(randomVariant);
      localStorage.setItem(key, randomVariant);
      setIsReady(true);
      
      // Track assignment (new user)
      trackABTestAssignment(testName, randomVariant, 'new_assignment');
    }
  }, [testName, key, distribution]);

  return { variant, isReady };
}

/**
 * Track AB test assignment
 */
function trackABTestAssignment(testName: string, variant: ABVariant, source: string) {
  const assignment = {
    testName,
    variant,
    source,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };

  // Store in localStorage for analytics
  const assignments = JSON.parse(localStorage.getItem('ab_test_assignments') || '[]');
  assignments.push(assignment);
  localStorage.setItem('ab_test_assignments', JSON.stringify(assignments));

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🧪 A/B Test Assignment:', assignment);
  }

  // TODO: Enviar a tu analytics (Google Analytics, Mixpanel, etc.)
  // Ejemplo con GA4:
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'ab_test_assignment', {
  //     test_name: testName,
  //     variant: variant,
  //     source: source,
  //   });
  // }
}

/**
 * Track conversion event for A/B test
 */
export function trackABTestConversion(testName: string, conversionType: string = 'form_submit') {
  const key = `ab_test_${testName}`;
  const variant = localStorage.getItem(key);

  if (!variant) {
    console.warn('No variant found for A/B test conversion tracking');
    return;
  }

  const conversion = {
    testName,
    variant,
    conversionType,
    timestamp: new Date().toISOString(),
  };

  // Store conversion
  const conversions = JSON.parse(localStorage.getItem('ab_test_conversions') || '[]');
  conversions.push(conversion);
  localStorage.setItem('ab_test_conversions', JSON.stringify(conversions));

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🎯 A/B Test Conversion:', conversion);
  }

  // TODO: Enviar a tu analytics
  // Ejemplo con GA4:
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'ab_test_conversion', {
  //     test_name: testName,
  //     variant: variant,
  //     conversion_type: conversionType,
  //   });
  // }
}

/**
 * Get A/B test results from localStorage
 */
export function getABTestResults() {
  const assignments = JSON.parse(localStorage.getItem('ab_test_assignments') || '[]');
  const conversions = JSON.parse(localStorage.getItem('ab_test_conversions') || '[]');

  // Group by test name and variant
  const results: Record<string, {
    variantA: { assignments: number; conversions: number };
    variantB: { assignments: number; conversions: number };
  }> = {};

  assignments.forEach((assignment: any) => {
    if (!results[assignment.testName]) {
      results[assignment.testName] = {
        variantA: { assignments: 0, conversions: 0 },
        variantB: { assignments: 0, conversions: 0 },
      };
    }

    if (assignment.variant === 'A') {
      results[assignment.testName].variantA.assignments++;
    } else {
      results[assignment.testName].variantB.assignments++;
    }
  });

  conversions.forEach((conversion: any) => {
    if (results[conversion.testName]) {
      if (conversion.variant === 'A') {
        results[conversion.testName].variantA.conversions++;
      } else {
        results[conversion.testName].variantB.conversions++;
      }
    }
  });

  return results;
}
