import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { X, AlertTriangle, Zap } from 'lucide-react';

export function ProblemSection() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [isUrgencyModalOpen, setIsUrgencyModalOpen] = useState(false);

  const problems = [
    "Tengo muchas ideas y no se cuál es objetivamente mejor.",
    "No sé dónde encontrar a mis primeros clientes.",
    "No sé cómo definir el precio de mi producto/servicio.",
    "No sé cómo validar mi idea con clientes.",
    "No se cómo construir mi producto/servicio."
  ];

  const toggleCheck = (index: number) => {
    setCheckedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Open modal when user checks 3 or more items
  useEffect(() => {
    if (checkedItems.length >= 3 && !isUrgencyModalOpen) {
      setIsUrgencyModalOpen(true);
    }
  }, [checkedItems.length, isUrgencyModalOpen]);

  const handleUrgencyCTA = () => {
    // Reset all checked items
    setCheckedItems([]);
    // Close the modal
    setIsUrgencyModalOpen(false);
  };

  const handleSecondaryAction = () => {
    // Reset all checked items
    setCheckedItems([]);
    // Close the modal
    setIsUrgencyModalOpen(false);
  };

  const checkedCount = checkedItems.length;
  const percentage = Math.round((checkedCount / problems.length) * 100);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="thunder-font text-2xl sm:text-3xl md:text-4xl text-novo-white mb-4">
            ¿Con qué situaciones te{" "}
            <span className="whitespace-nowrap">sentís identificado?</span>
          </h2>
          <p className="text-lg sm:text-xl text-novo-grey">
            Hace clic en las que te pasan a vos{" "}
            <span className="whitespace-nowrap">(sé honesto)</span>
          </p>
        </div>

        {/* Results - Moved here */}
        {checkedCount > 0 && (
          <div className="mb-6 p-4 bg-novo-primary/10 rounded-lg border border-novo-primary/20 max-w-2xl mx-auto">
            <div className="text-center">
              {percentage >= 70 && (
                <span className="text-novo-primary font-semibold text-sm sm:text-base">
                  {checkedCount}/{problems.length} marcadas ({percentage}%) 🚨 Nivel crítico
                </span>
              )}
              {percentage >= 40 && percentage < 70 && (
                <span className="text-yellow-400 font-semibold text-sm sm:text-base">
                  {checkedCount}/{problems.length} marcadas ({percentage}%) ⚠️ Nivel alto
                </span>
              )}
              {percentage < 40 && (
                <span className="text-novo-secondary font-semibold text-sm sm:text-base">
                  ✅ Nivel moderado • {checkedCount}/{problems.length} ({percentage}%)
                </span>
              )}
            </div>
          </div>
        )}

        {/* Interactive Checklist - Mobile optimized */}
        <Card className="bg-novo-background-2 border-novo-primary/20 p-4 sm:p-6 mb-6">
          <div className="space-y-3">
            {problems.map((problem, index) => (
              <div
                key={index}
                onClick={() => toggleCheck(index)}
                className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-all duration-300 touch-manipulation ${checkedItems.includes(index)
                    ? 'bg-novo-primary/20 border-novo-primary'
                    : 'bg-novo-background border-novo-grey/20 hover:border-novo-primary/40'
                  } border min-h-[60px]`}
              >
                <div className={`w-6 h-6 rounded border-2 flex-shrink-0 flex items-center justify-center mt-0.5 ${checkedItems.includes(index)
                    ? 'bg-novo-primary border-novo-primary'
                    : 'border-novo-secondary'
                  }`}>
                  {checkedItems.includes(index) && (
                    <X className="w-4 h-4 text-novo-white" />
                  )}
                </div>
                <span className={`text-sm sm:text-base leading-relaxed ${checkedItems.includes(index) ? 'text-novo-white' : 'text-novo-grey'
                  }`}>
                  {problem}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Urgency Modal - Mobile optimized */}
        <Dialog open={isUrgencyModalOpen} onOpenChange={() => { }}>
          <DialogContent
            className="bg-gradient-to-br from-novo-primary to-red-600 border-2 border-novo-primary max-w-[95vw] sm:max-w-md mx-auto overflow-hidden"
            onEscapeKeyDown={(e) => e.preventDefault()}
            onPointerDownOutside={(e) => e.preventDefault()}
            hideCloseButton={true}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-novo-primary/5 via-transparent to-novo-secondary/5"></div>

                {/* Tech grid pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 left-4 w-8 h-8 border border-novo-secondary rotate-45"></div>
                  <div className="absolute top-12 right-8 w-6 h-6 border border-novo-primary rotate-12"></div>
                  <div className="absolute bottom-8 left-12 w-4 h-4 bg-novo-secondary rounded-full"></div>
                </div>

                {/* Primary decorative elements */}
                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-tr from-novo-primary/15 to-novo-primary/5 rounded-full translate-y-10 -translate-x-10 sm:translate-y-14 sm:-translate-x-14"></div>


                {/* Accent lines for tech feel */}
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-novo-primary/10 to-transparent"></div>
                <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-novo-secondary/10 to-transparent"></div>
              </div>

              <DialogHeader className="relative z-10 text-center space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-novo-white/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-novo-white" />
                </div>

                <DialogTitle className="thunder-font text-xl sm:text-4xl text-novo-white leading-tight text-center px-2">
                  Hace una pausa y responde 👇
                </DialogTitle>

                <DialogDescription className="sr-only">
                  Modal de urgencia que indica nivel crítico de incertidumbre del usuario
                </DialogDescription>
              </DialogHeader>

              <div className="relative z-10 space-y-4 mt-4">

                <div className="text-center">


                  <div className="bg-novo-white/10 rounded-lg p-3 mb-4">
                    <p className="text-novo-white text-xs sm:text-sm">
                      Dentro de 6 meses... ¿Preferís seguir estancado en el mismo escalón o tener tus primeros clientes?
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => {
                      // Scroll to offer section
                      const offerSection = document.querySelector('[data-section="offer-stack"]');
                      if (offerSection) {
                        offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }

                      // Close modal after scroll animation completes
                      setTimeout(() => {
                        setIsUrgencyModalOpen(false);
                        setCheckedItems([]);
                      }, 800);
                    }}
                    className="w-full bg-novo-white text-novo-primary hover:bg-novo-grey hover:scale-[1.02] py-4 text-base sm:text-lg font-bold rounded-lg transition-all duration-300 premium-float premium-pulse min-h-[50px] touch-manipulation transform-gpu active:scale-[0.98]"
                  >
                    Quiero que mi proyecto funcione
                  </Button>

                  <div className="text-center">
                    <p className="text-novo-white/70 text-xs">
                      <span className="block sm:hidden">
                        {'Acceso inmediato por $390 USD. Garantía del 100%.'}
                      </span>
                      <span className="hidden sm:block">
                        {'Acceso inmediato por $390 USD. Pago único. Garantía del 100%.'}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={handleSecondaryAction}
                    className="w-full text-novo-white/80 hover:text-novo-white text-xs sm:text-sm py-2 transition-colors touch-manipulation text-center underline"
                  >
                    Prefiero seguir improvisando (y procastinando)
                  </button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>


      </div>
    </section>
  );
}
