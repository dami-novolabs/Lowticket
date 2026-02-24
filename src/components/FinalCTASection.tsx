import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Countdown } from './Countdown';
import { Users, Shield, Zap, CreditCard } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  const paymentMethods = [
    'Visa', 'MasterCard', 'American Express', 'PayPal', 'Stripe'
  ];

  const handleCTAClick = () => {
    // En un caso real, esto redirigirías a la página de pago
    alert('Redirigiendo a la página de pago segura...');
  };

  return (
    <section id="final-cta" className="py-20 px-4 bg-novo-background">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-novo-secondary border-0 rounded-2xl p-8 md:p-16">
          <div className="text-center">
            {/* Small text above */}
            <p className="text-novo-black text-lg mb-6 satoshi-font">
              {'Por algo el destino te trajo hasta ac\u00e1'}
            </p>
            
            {/* Main headline */}
            <h2 className="thunder-font text-xl sm:text-3xl md:text-4xl lg:text-5xl text-novo-black mb-4 leading-tight">
              {'Evita malgastar ahorros y dolores de cabeza con tu emprendimiento'}
            </h2>

            <p className="text-novo-black/70 satoshi-font text-sm mb-6">{'Utiliza el mismo sistema con el que +350 personas de todo Latinoam\u00e9rica ya lanzaron su proyecto al mercado y consiguieron sus primeros clientes reales'}</p>
            
            {/* CTA Button */}
            <Button 
              onClick={onOpenModal}
              size="lg"
              className="bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white px-8 py-4 text-lg font-bold rounded-lg mb-4 transition-all duration-300 premium-float premium-pulse transform-gpu active:scale-[0.98]"
            >
              {'Activar mi usuario en la plataforma'}
            </Button>
            
            {/* Guarantee text */}
            <p className="text-novo-black satoshi-font font-medium text-sm mb-2">
              {'Acceso inmediato al curso.'}
            </p>
            <p className="text-novo-black/70 satoshi-font text-xs mb-4">
              {'Pago seguro \u2022 Garant\u00eda 7 d\u00edas'}
            </p>
            

          </div>
        </Card>
        
        {/* Social Validation Text - Outside Card */}
        <p className="text-novo-white satoshi-font font-medium text-sm text-center mt-6 mb-2">
          {'350+ personas en Latinoamérica ya lanzaron con Novo'}
        </p>
        <p className="text-novo-grey satoshi-font text-xs text-center mb-4">
          {'Muchos founders empiezan con el on-demand. Después aplican a la mentoría con claridad total.'}
        </p>
        
        {/* Trustpilot Rating Only - Outside Card */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-lg">
            <span className="text-novo-white font-bold text-sm">4.8</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 relative" viewBox="0 0 24 24">
                  {/* Background star (empty) */}
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                        fill="#E5E7EB" />
                  {/* Filled star */}
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                        fill="#00B67A"
                        clipPath={i < 4 ? undefined : "inset(0 30% 0 0)"} 
                        style={{ 
                          clipPath: i < 4 ? undefined : 'polygon(0% 0%, 70% 0%, 70% 100%, 0% 100%)'
                        }} />
                </svg>
              ))}
            </div>
            <span className="text-novo-white font-semibold text-sm">Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
}
