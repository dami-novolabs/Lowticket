import React from 'react';
import trustpilotLogo from 'figma:asset/f8caa03cf474966137234210cf241621c022e856.png';
import c5nLogo from 'figma:asset/5e56563d4d2f43f6cacabbb74f2e241e7a5e1c1d.png';
import clarinLogo from 'figma:asset/d399663dc68a8a2b9a5d52ff995252cfd2750bae.png';
import forbesLogo from 'figma:asset/703b5dedebffe029a7e02674bb9d9e555c683cd0.png';
import lanacionLogo from 'figma:asset/4150b3abe68230ad8c1124084a7d8f1b488b88f1.png';
import iprofesionalLogo from 'figma:asset/80415a206b10e0613c3449bcf8393c2cdecb45fa.png';

const TRUSTPILOT_GREEN = '#00B67A';

interface Testimonial {
  name: string;
  linkedIn: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alexy Narváez',
    linkedIn: 'https://www.linkedin.com/in/alexy-eduardo-narvaez-gonzalez-0958a31a/?originalSubdomain=cl',
    avatar: '/avatars/alexy-narvaez.jpg',
    text: '"Es un proceso adaptado a cada industria, con acompañamiento real. Aprendí a testear mi idea sin tirar plata antes de tiempo. La comunidad es excelente, todos apoyándose."',
  },
  {
    name: 'Magdalena Laplacette',
    linkedIn: 'https://www.linkedin.com/in/magdalena-laplacette/',
    avatar: '/avatars/magdalena-laplacette.jpg',
    text: '"Los chicos de Novolabs, tanto Dami, Tomi como todo el equipo de mentores, son grandes profesionales que te ayudan a llevar a cabo tu proyecto, con paciencia, sabiduría, y lo mas importante, desafiandote a ir por todo."',
  },
  {
    name: 'Hernán Farruggia',
    linkedIn: 'https://www.linkedin.com/in/hernanfarruggia/',
    avatar: '/avatars/hernan-farruggia.jpg',
    text: '"Entré con ideas vagas y salí con un plan claro. Me ayudaron a evitar errores costosos y a enfocarme en lo que realmente importa. Hoy ya tengo tracción real."',
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill={filled ? TRUSTPILOT_GREEN : '#E5E7EB'}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TrustpilotStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5" viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="#E5E7EB"
          />
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={TRUSTPILOT_GREEN}
            style={
              i < Math.floor(rating)
                ? undefined
                : { clipPath: `polygon(0% 0%, ${(rating % 1) * 100}% 0%, ${(rating % 1) * 100}% 100%, 0% 100%)` }
            }
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:border-lime-400/50 hover:shadow-sm transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-gray-200"
            crossOrigin="anonymous"
          />
          <div>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
            <div className="flex gap-0.5 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled />
              ))}
            </div>
          </div>
        </div>
        <a
          href={testimonial.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver perfil de LinkedIn de ${testimonial.name}`}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <LinkedInIcon />
        </a>
      </div>
      {/* Body */}
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
        {testimonial.text}
      </p>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold leading-tight text-balance">
            {'Antes de seguir, '}
            <span className="text-red-500 italic">{'leé esto:'}</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-3">
            {'Algunas de las +300 personas que ya pasaron por Novolabs.'}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-12">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Trustpilot Rating */}
        <div className="flex items-center justify-center gap-2 mb-16 sm:mb-20">
          <span className="text-gray-900 font-bold text-lg">4.8</span>
          <TrustpilotStars rating={4.8} />
          <span className="text-gray-500 text-sm">en</span>
          <a
            href="https://www.trustpilot.com/review/novolabs.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-semibold text-sm underline underline-offset-2 hover:text-gray-600 transition-colors"
          >
            Trustpilot
          </a>
        </div>

        {/* Press Mentions */}
        <div className="bg-gradient-to-r from-novo-background-2 via-novo-black to-novo-background-2 py-8 -mx-4 px-4 rounded-xl">
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
