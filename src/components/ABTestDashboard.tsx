import { useEffect, useState } from 'react';
import { getABTestResults } from '../hooks/useABTest';
import { X } from 'lucide-react';

interface ABTestDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ABTestDashboard({ isOpen, onClose }: ABTestDashboardProps) {
  const [results, setResults] = useState<any>({});

  useEffect(() => {
    if (isOpen) {
      const data = getABTestResults();
      setResults(data);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const calculateConversionRate = (conversions: number, assignments: number) => {
    if (assignments === 0) return 0;
    return ((conversions / assignments) * 100).toFixed(2);
  };

  const calculateWinner = (variantA: any, variantB: any) => {
    const rateA = parseFloat(calculateConversionRate(variantA.conversions, variantA.assignments));
    const rateB = parseFloat(calculateConversionRate(variantB.conversions, variantB.assignments));
    
    if (rateA === rateB) return 'tie';
    return rateA > rateB ? 'A' : 'B';
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/80 p-4 overflow-y-auto">
      <div className="bg-[#1A1A1A] border border-[#FF3A20]/20 rounded-lg w-full max-w-4xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-white">A/B Testing Dashboard</h2>
            <p className="text-white/60 text-sm mt-1">
              Resultados en tiempo real de tus experimentos
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {Object.keys(results).length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/60">
                No hay datos de A/B testing aún. Los resultados aparecerán cuando los usuarios interactúen con las variantes.
              </p>
            </div>
          ) : (
            Object.entries(results).map(([testName, data]: [string, any]) => {
              const winner = calculateWinner(data.variantA, data.variantB);
              
              return (
                <div key={testName} className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white">{testName}</h3>
                      <p className="text-sm text-white/60 mt-1">
                        Test de conversión
                      </p>
                    </div>
                    {winner !== 'tie' && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-[#D4FF78]/20 border border-[#D4FF78] rounded-full">
                        <span className="text-[#D4FF78] text-sm">
                          🏆 Ganador: Variante {winner}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Variant A */}
                    <div className={`bg-white/5 rounded-lg p-4 border ${winner === 'A' ? 'border-[#D4FF78]' : 'border-white/10'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white">Variante A</span>
                        {winner === 'A' && <span className="text-[#D4FF78]">🏆</span>}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Usuarios asignados:</span>
                          <span className="text-white">{data.variantA.assignments}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Conversiones:</span>
                          <span className="text-white">{data.variantA.conversions}</span>
                        </div>
                        <div className="flex justify-between text-sm pt-2 border-t border-white/10">
                          <span className="text-white/60">Tasa de conversión:</span>
                          <span className="text-[#D4FF78]">
                            {calculateConversionRate(data.variantA.conversions, data.variantA.assignments)}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Variant B */}
                    <div className={`bg-white/5 rounded-lg p-4 border ${winner === 'B' ? 'border-[#D4FF78]' : 'border-white/10'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white">Variante B</span>
                        {winner === 'B' && <span className="text-[#D4FF78]">🏆</span>}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Usuarios asignados:</span>
                          <span className="text-white">{data.variantB.assignments}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Conversiones:</span>
                          <span className="text-white">{data.variantB.conversions}</span>
                        </div>
                        <div className="flex justify-between text-sm pt-2 border-t border-white/10">
                          <span className="text-white/60">Tasa de conversión:</span>
                          <span className="text-[#D4FF78]">
                            {calculateConversionRate(data.variantB.conversions, data.variantB.assignments)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-white/5">
          <div className="text-sm text-white/60 space-y-2">
            <p>
              💡 <strong className="text-white">Tip:</strong> Para testear manualmente una variante específica, añade <code className="bg-black/50 px-2 py-1 rounded">?variant=A</code> o <code className="bg-black/50 px-2 py-1 rounded">?variant=B</code> a la URL
            </p>
            <p>
              📊 Los datos se almacenan localmente en el navegador. Para testing en producción, integra con Google Analytics o tu herramienta de analytics preferida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
