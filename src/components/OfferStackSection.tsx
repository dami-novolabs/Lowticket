import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Shield } from 'lucide-react';

interface OfferStackSectionProps {
  onOpenModal: () => void;
}

export function OfferStackSection({ onOpenModal }: OfferStackSectionProps) {



  return (
    <section data-section="offer-stack" className="py-16 px-4 bg-novo-background-2">
      <div className="container mx-auto max-w-4xl">
        {/* Main Offer Card - Mobile optimized */}
        <Card className="bg-gradient-to-br from-novo-background to-novo-background-2 border-2 border-novo-primary/30 p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-novo-primary/5 via-transparent to-novo-secondary/5 pointer-events-none"></div>
          
          <div className="relative z-10">
            {/* Social Proof Badge - Mobile optimized */}
            <div className="text-center mb-6">

            </div>

            {/* Título Principal - Mobile optimized */}
            <div className="text-center mb-16">
              <p className="text-novo-secondary text-sm font-semibold mb-4">ACCESO DE POR VIDA</p>
              <h2 className="thunder-font text-3xl sm:text-4xl md:text-5xl text-novo-white mb-6 leading-tight">
                {'Evita malgastar ahorros y meses de tu vida en lanzar algo que nadie te quiera comprar'}
              </h2>
            </div>

            {/* Badges de descuento */}


            {/* Tarjeta de Pricing - Mobile optimized */}
            <div className="max-w-md mx-auto mb-16">
              <Card className="bg-gradient-to-br from-novo-background-2 to-novo-background border-2 border-novo-primary/40 p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-novo-primary/5 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                  {/* Old price */}
                  <div className="text-novo-grey/60 text-lg sm:text-xl line-through mb-3 font-medium">{'$1.150 USD'}</div>
                  
                  {/* Current price - main highlight */}
                  <div className="mb-6">
                    <div className="thunder-font text-6xl sm:text-7xl text-transparent bg-gradient-to-r from-novo-primary to-novo-primary/80 bg-clip-text leading-none relative inline-block pr-12 sm:pr-16">
                      $390
                      <span className="text-novo-white text-base sm:text-lg font-medium absolute -top-1 sm:-top-2 -right-0 sm:-right-2">
                        USD
                      </span>
                    </div>
                  </div>
                  <p className="text-novo-grey text-sm mb-2">{'Pago único. Sin suscripción. Sin vencimiento.'}</p>
                  
                  {/* Payment info */}


                  {/* CTA Button */}
                  <div className="text-center mt-6">
                    <Button 
                      onClick={onOpenModal}
                      className="w-full bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white px-6 py-4 text-lg font-bold rounded-lg transition-all duration-300 premium-float premium-pulse mb-4 transform-gpu active:scale-[0.98]"
                    >
                      QUIERO EL SISTEMA COMPLETO
                    </Button>
                    <p className="text-novo-grey mt-3 text-xs">
                      {'Acceso inmediato al finalizar el pago'}
                    </p>
                    <div className="flex items-center justify-center gap-3 text-novo-grey text-sm mt-3">
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-novo-secondary" />
                        <span className="font-medium">Pago Seguro</span>
                      </div>
                      <div className="w-px h-4 bg-novo-grey/30"></div>
                      <div className="flex items-center gap-1">
                        <span className="text-[#635BFF] font-bold tracking-wider text-xs">STRIPE</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-bl from-novo-primary/20 to-transparent rounded-bl-full"></div>
              </Card>
            </div>

            {/* ¿Qué incluye? */}
            <div className="mb-16">

              
              {/* Contenido principal del curso */}
              <div className="max-w-3xl mx-auto">
                <div className="mb-10">
                  <h4 className="text-novo-white font-semibold text-lg mb-6 text-[20px]">
                    Contenido del Curso:
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Acceso de por vida al contenido del curso.</span>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">{'Acceso a 6 m\u00f3dulos paso a paso para validar tu idea.'}</span>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Acceso a 10 Asistentes de IA Especializados.</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Acceso a recursos descargables.</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">{'Acceso a un Certificado al completar el Curso al 100%.'}</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">{'Soporte por canal de WhatsApp para resolver dudas del curso.'}</span>
                    </div>
                  </div>
                </div>

                {/* Separador visual */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-novo-primary/30 to-transparent mb-10"></div>

                {/* Bonus */}
                <div>
                  <h4 className="text-novo-white font-semibold text-lg mb-6">
                    Contenido Bonus
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 group">
                      <span className="text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">🎁</span>
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">{"Bonus #1: Mini-curso: 'Como crear una APP sin programar usando IA'"}</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <span className="text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">🎁</span>
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">{"Bonus #2: Mini-curso: 'C\u00f3mo generar ideas de negocio y encontrar nichos rentables'"}</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <span className="text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">🎁</span>
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">{'Bonus #3: Gu\u00eda con las 50 herramientas clave para emprender'}</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <span className="text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">🎁</span>
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">{'Bonus #4: Descuento de $390 cuando te inscribas en el Programa de 4 meses personalizado.'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proceso de inscripción */}


            {/* CTA Principal */}
            <div className="text-center mb-12">
              <Button 
                onClick={onOpenModal}
                className="bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white px-10 py-5 text-xl font-bold rounded-lg transition-all duration-300 premium-float premium-pulse mb-6 transform-gpu active:scale-[0.98]"
              >
                QUIERO EL SISTEMA COMPLETO
              </Button>
              <div className="flex items-center justify-center gap-4 mt-6 text-novo-grey">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-novo-secondary" />
                  <span className="font-medium">Pago Seguro</span>
                </div>
                <div className="w-px h-5 bg-novo-grey/30"></div>
                <div className="flex items-center gap-2">
                  <span className="text-[#635BFF] font-bold tracking-wider">STRIPE</span>
                </div>
              </div>
              <p className="text-novo-grey mt-4 text-lg font-medium">
                {'Acceso inmediato al finalizar el pago. Garant\u00eda del 100%.'}
              </p>
            </div>

          </div>
          
          {/* Corner accent decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-novo-secondary/10 to-transparent rounded-br-full opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-novo-primary/10 to-transparent rounded-tl-full opacity-50"></div>
        </Card>

        {/* Garantía - Outside main card */}
        <div className="max-w-2xl mx-auto mt-8">

        </div>
      </div>

    </section>
  );
}
