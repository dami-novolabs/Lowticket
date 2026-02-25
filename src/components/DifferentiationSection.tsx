import React from 'react';
import foundersImage from 'figma:asset/79ea234cd2214d3b0f1928b02c71fce3ed26c8d8.png';
import c5nLogo from 'figma:asset/5e56563d4d2f43f6cacabbb74f2e241e7a5e1c1d.png';
import clarinLogo from 'figma:asset/d399663dc68a8a2b9a5d52ff995252cfd2750bae.png';
import forbesLogo from 'figma:asset/703b5dedebffe029a7e02674bb9d9e555c683cd0.png';
import lanacionLogo from 'figma:asset/4150b3abe68230ad8c1124084a7d8f1b488b88f1.png';
import iprofesionalLogo from 'figma:asset/80415a206b10e0613c3449bcf8393c2cdecb45fa.png';

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

        {/* Press Mentions */}
        <div className="mt-16 sm:mt-20 py-8 px-4 rounded-xl bg-gradient-to-r from-novo-background-2 via-novo-black to-novo-background-2">
          <div className="container mx-auto max-w-6xl text-center">
            <h3 className="thunder-font text-novo-white mb-6 text-base sm:text-xl">
              Menciones en prensa:
            </h3>

            {/* Mobile: Animated scroll */}
            <div className="block sm:hidden">
              <div className="relative w-full max-w-xs mx-auto overflow-hidden">
                <div className="flex animate-[scroll_12s_linear_infinite] hover:[animation-play-state:paused]">
                  {[0, 1].map((iter) => (
                    <div key={iter} className="flex gap-10 shrink-0">
                      {[
                        { src: c5nLogo, alt: 'C5N' },
                        { src: clarinLogo, alt: 'Clarín' },
                        { src: forbesLogo, alt: 'Forbes' },
                        { src: lanacionLogo, alt: 'LA NACIÓN' },
                        { src: iprofesionalLogo, alt: 'iPROFESIONAL' },
                      ].map((logo) => (
                        <div key={`${iter}-${logo.alt}`} className="flex justify-center items-center w-24">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: Static grid */}
            <div className="hidden sm:flex items-center justify-center gap-6 opacity-70">
              {[
                { src: c5nLogo, alt: 'C5N', h: 'h-8' },
                { src: clarinLogo, alt: 'Clarín', h: 'h-8' },
                { src: forbesLogo, alt: 'Forbes', h: 'h-8' },
                { src: lanacionLogo, alt: 'LA NACIÓN', h: 'h-6' },
                { src: iprofesionalLogo, alt: 'iPROFESIONAL', h: 'h-6' },
              ].map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.h} w-auto filter grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:scale-105`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
