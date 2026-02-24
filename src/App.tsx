import React, { useState, useEffect } from 'react';
import { StickyNavbar } from './components/StickyNavbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofSection } from './components/SocialProofSection';
import { VideoTestimonials } from './components/VideoTestimonials';
import { ProblemSection } from './components/ProblemSection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { RoadmapSection } from './components/RoadmapSection';
import { OfferStackSection } from './components/OfferStackSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { TextTestimonials } from './components/TextTestimonials';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { StickyFloatingCTA } from './components/StickyFloatingCTA';
import { SemanticMetadata } from './components/SemanticMetadata';
import { RichSnippets } from './components/RichSnippets';
import ABTestDashboard from './components/ABTestDashboard';
import { ABTestingIndicator } from './components/ABTestingIndicator';
import { trackABTestConversion } from './hooks/useABTest';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import novolabsLogo from 'figma:asset/78f5c753c6bb6e66180b114349ff5dea0a70b98e.png';

export default function App() {
  // Estado del modal compartido para todos los CTAs
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estado del dashboard de A/B testing
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  
  // Keyboard shortcut para abrir el dashboard (Ctrl/Cmd + Shift + A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsDashboardOpen(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Track conversión cuando se abre el modal del formulario
  const handleOpenModal = () => {
    setIsModalOpen(true);
    
    // Track conversion para TODOS los tests activos en la página
    // Hero Section
    trackABTestConversion('hero_pre_headline', 'cta_click');
    trackABTestConversion('hero_headline', 'cta_click');
    trackABTestConversion('hero_subheadline', 'cta_click');
    trackABTestConversion('hero_image', 'cta_click');
    
    // Problem Section
    trackABTestConversion('problem_title', 'cta_click');
    trackABTestConversion('problem_subtitle', 'cta_click');
    
    // Social Proof Section
    trackABTestConversion('social_proof_title', 'cta_click');
    
    // Differentiation Section
    trackABTestConversion('differentiation_title', 'cta_click');
    trackABTestConversion('differentiation_image', 'cta_click');
    
    // Roadmap Section
    trackABTestConversion('roadmap_title', 'cta_click');
    trackABTestConversion('roadmap_subtitle', 'cta_click');
    
    // Offer Stack Section
    trackABTestConversion('offer_title', 'cta_click');
    trackABTestConversion('offer_subtitle', 'cta_click');
    
    // Guarantee Section
    trackABTestConversion('guarantee_title', 'cta_click');
    
    // FAQ Section
    trackABTestConversion('faq_title', 'cta_click');
    trackABTestConversion('faq_subtitle', 'cta_click');
    
    // Final CTA Section
    trackABTestConversion('final_cta_pre_headline', 'cta_click');
    trackABTestConversion('final_cta_headline', 'cta_click');
    
    // Sticky CTA
    trackABTestConversion('sticky_cta_button', 'cta_click');
  };

  return (
    <div className="min-h-screen bg-novo-background text-novo-white overflow-x-hidden">
      {/* Semantic Metadata for LLM Optimization */}
      <SemanticMetadata />
      
      {/* Rich Snippets for Enhanced LLM Understanding */}
      <RichSnippets />
      
      {/* Sticky Navigation with integrated Progress Bar */}
      <StickyNavbar />
      
      {/* Main Content */}
      <main itemScope itemType="https://schema.org/WebPage"
            role="main" 
            aria-label="Novolabs Startup School - Curso de emprendimiento"
            data-page-type="landing-page"
            data-industry="education"
            data-target-audience="latin-american-entrepreneurs">
        {/* Hero Section */}
        <section itemScope itemType="https://schema.org/WebPageElement" 
                 data-section="hero"
                 aria-labelledby="hero-heading"
                 role="banner">
          <HeroSection />
        </section>
        
        {/* Social Proof */}
        <section itemScope itemType="https://schema.org/WebPageElement"
                 data-section="testimonials"
                 aria-labelledby="testimonials-heading"
                 itemProp="review">
          <SocialProofSection />
        </section>

        {/* Problem + Agitation */}
        <section itemScope itemType="https://schema.org/WebPageElement"
                 data-section="problem-identification"
                 aria-labelledby="problem-heading">
          <ProblemSection />
        </section>
        
        {/* 7-Day Roadmap */}
        <section itemScope itemType="https://schema.org/WebPageElement"
                 data-section="curriculum"
                 aria-labelledby="roadmap-heading"
                 itemProp="syllabusSections">
          <RoadmapSection />
        </section>
        
        {/* Differentiation */}
        <section itemScope itemType="https://schema.org/WebPageElement"
                 data-section="differentiation"
                 aria-labelledby="differentiation-heading">
          <DifferentiationSection />
        </section>
        
        {/* Video Testimonials */}
        <section itemScope itemType="https://schema.org/WebPageElement"
                 data-section="video-testimonials"
                 aria-labelledby="video-testimonials-heading">
          <VideoTestimonials />
        </section>

        {/* Offer Stack */}
        <section itemScope itemType="https://schema.org/WebPageElement"
                 data-section="offer"
                 aria-labelledby="offer-heading"
                 itemProp="offers">
          <OfferStackSection onOpenModal={handleOpenModal} />
        </section>
        
        {/* Guarantee */}
        <section itemScope itemType="https://schema.org/WebPageElement"
                 data-section="guarantee"
                 aria-labelledby="guarantee-heading">
          <GuaranteeSection />
        </section>

        {/* Text Testimonials */}
        <section itemScope itemType="https://schema.org/WebPageElement"
                 data-section="text-testimonials"
                 aria-labelledby="text-testimonials-heading">
          <TextTestimonials />
        </section>
        
        {/* FAQs */}
        <section itemScope itemType="https://schema.org/FAQPage"
                 data-section="faq"
                 aria-labelledby="faq-heading">
          <FAQSection />
        </section>
        
        {/* Final CTA */}
        <section itemScope itemType="https://schema.org/WebPageElement"
                 data-section="final-cta"
                 aria-labelledby="final-cta-heading">
          <FinalCTASection onOpenModal={handleOpenModal} />
        </section>
      </main>
      
      {/* Sticky Floating CTA */}
      <StickyFloatingCTA onOpenModal={handleOpenModal} />
      
      {/* A/B Testing Indicator - Solo visible en desarrollo */}
      <ABTestingIndicator onClick={() => setIsDashboardOpen(true)} />
      
      {/* A/B Testing Dashboard - Solo visible con Ctrl/Cmd + Shift + A */}
      <ABTestDashboard isOpen={isDashboardOpen} onClose={() => setIsDashboardOpen(false)} />
      
      {/* Footer - Mobile optimized */}
      <footer className="bg-novo-black py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-4">
            <img 
              src={novolabsLogo} 
              alt="Novolabs - Startup School" 
              className="h-8 w-auto"
            />
            <div className="flex gap-4 text-novo-grey text-xs sm:text-sm">
              <a href="#" className="hover:text-novo-white transition-colors">Términos</a>
              <a href="#" className="hover:text-novo-white transition-colors">Privacidad</a>
              <a href="mailto:soporte@novolabs.com" className="hover:text-novo-white transition-colors">Soporte</a>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-novo-grey/20">
            <p className="text-novo-grey text-xs sm:text-sm">
              © 2025 Novolabs. Todos los derechos reservados.
            </p>
            <p className="text-novo-grey text-xs mt-1">
              Ayudando a emprendedores de Latinoamérica desde el 2019.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal compartido optimizado para todos los CTAs */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg w-[95vw] p-0 m-0 border-2 border-novo-primary/30 sm:max-w-2xl overflow-hidden bg-[#1E1B1B]">
          <VisuallyHidden.Root>
            <DialogTitle>Formulario de inscripción - Novolabs Startup School</DialogTitle>
          </VisuallyHidden.Root>
          <VisuallyHidden.Root>
            <DialogDescription>
              Completa el formulario para inscribirte al curso Novolabs Startup School y comenzar tu journey emprendedor.
            </DialogDescription>
          </VisuallyHidden.Root>
          <iframe
            src="https://info.novolabs.xyz/widget/form/F5PAAmItBsBI6qPtf3wN"
            style={{
              display: 'block',
              width: '100%',
              height: '415px',
              border: 'none',
              backgroundColor: '#1E1B1B',
              borderRadius: '3px',
              margin: '0',
              padding: '0'
            }}
            id="inline-F5PAAmItBsBI6qPtf3wN" 
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Mid Ticket Novolabs"
            data-height="415"
            data-layout-iframe-id="inline-F5PAAmItBsBI6qPtf3wN"
            data-form-id="F5PAAmItBsBI6qPtf3wN"
            title="Mid Ticket Novolabs"
          />
        </DialogContent>
      </Dialog>
      
      {/* Form embed script */}
      <script src="https://info.novolabs.xyz/js/form_embed.js" async></script>
    </div>
  );
}
