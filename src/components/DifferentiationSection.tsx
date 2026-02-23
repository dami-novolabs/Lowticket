import React from 'react';
import { Card } from './ui/card';
import { Check, X } from 'lucide-react';
import foundersImage from 'figma:asset/79ea234cd2214d3b0f1928b02c71fce3ed26c8d8.png';

export function DifferentiationSection() {
  const esParaVos = [
    "Querés validar sin renunciar a tu trabajo",
    "Sabés construir pero no sabés vender",
    "Sos profesional y querés emprender con método",
    "Querés aprender el sistema antes de invertir $1.150"
  ];

  const noEsParaVos = [
    "Buscás motivación",
    "Querés que alguien haga el trabajo por vos",
    "Necesitás seguimiento constante"
  ];

  return (
    <section className="py-20 px-4 bg-novo-background-2">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="thunder-font text-3xl md:text-5xl text-novo-white mb-6 max-w-4xl mx-auto">
            Aprendé directo de emprendedores que ya recorrieron este camino
          </h2>
        </div>

        {/* Mobile Image - Only visible on mobile */}
        <div className="block lg:hidden mb-12">
          <div className="aspect-[4/3] bg-novo-background rounded-2xl overflow-hidden">
            <img 
              src={foundersImage}
              alt="Fundadores de Novolabs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image - Hidden on mobile */}
          <div className="order-2 lg:order-1 hidden lg:block">
            <div className="aspect-[4/3] bg-novo-background rounded-2xl overflow-hidden">
              <img 
                src={foundersImage}
                alt="Fundadores de Novolabs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Founders */}
            <div>
              <h3 className="thunder-font text-xl sm:text-2xl text-novo-white mb-2">
                {'Tomás Volonté y Damián Sánchez'}
              </h3>
              <p className="text-novo-secondary mb-4">
                Co-fundadores de Novolabs Startup School
              </p>
              <p className="text-novo-grey leading-relaxed">
                {'Más de 10 años de experiencia emprendiendo y 6 años construyendo Novolabs. Ya vivimos en carne propia lo que se siente empezar de cero, muchas veces, cagarla, aprender, ajustar y volver a intentar.'}
              </p>
            </div>

            {/* About section */}
            <div>
              <h4 className="thunder-font text-lg text-novo-white mb-3 tracking-wider">
                Sobre Novolabs Startup School
              </h4>
              <p className="text-novo-grey leading-relaxed">
                {'Estamos construyendo la empresa que nos hubiera gustado que exista hace 10 años cuando empezamos a emprender. Sin teorías vacías, sin brillitos de colores y lo más importante de todo: libre de vendehúmos.'}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="thunder-font text-2xl md:text-3xl text-novo-white mb-1">
                  +350
                </div>
                <div className="text-novo-grey text-sm">
                  Estudiantes
                </div>
              </div>
              <div className="text-center">
                <div className="thunder-font text-2xl md:text-3xl text-novo-white mb-1">
                  +100
                </div>
                <div className="text-novo-grey text-sm">
                  Proyectos Lanzados
                </div>
              </div>
              <div className="text-center">
                <div className="thunder-font text-2xl md:text-3xl text-novo-secondary mb-1">
                  9.2
                </div>
                <div className="text-novo-grey text-sm">
                  NPS
                </div>
              </div>
              <div className="text-center">
                <div className="thunder-font text-2xl md:text-3xl text-novo-white mb-1">
                  {'6 años'}
                </div>
                <div className="text-novo-grey text-sm">
                  Ayudando emprendedores
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Es para vos / No es para vos */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Es para vos si */}
          <Card className="bg-novo-background border-novo-secondary/30 p-6 sm:p-8">
            <h3 className="thunder-font text-xl sm:text-2xl text-novo-secondary mb-6">
              {'Es para vos si:'}
            </h3>
            <div className="space-y-4">
              {esParaVos.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-novo-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-novo-grey leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* No es para vos si */}
          <Card className="bg-novo-background border-novo-primary/30 p-6 sm:p-8">
            <h3 className="thunder-font text-xl sm:text-2xl text-novo-primary mb-6">
              {'No es para vos si:'}
            </h3>
            <div className="space-y-4">
              {noEsParaVos.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-novo-primary mt-0.5 flex-shrink-0" />
                  <span className="text-novo-grey leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
