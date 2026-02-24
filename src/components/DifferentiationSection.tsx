import React from 'react';
import foundersImage from 'figma:asset/79ea234cd2214d3b0f1928b02c71fce3ed26c8d8.png';

export function DifferentiationSection() {

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


      </div>
    </section>
  );
}
