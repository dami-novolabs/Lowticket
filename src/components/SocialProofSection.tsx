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
    avatar: '/avatars/magdalena-laplacette.png',
    text: '"Es un proceso adaptado a cada industria, con acompañamiento real. Aprendí a testear mi idea sin tirar plata antes de tiempo. La comunidad es excelente, todos apoyándose."',
  },
  {
    name: 'Magdalena Laplacette',
    linkedIn: 'https://www.linkedin.com/in/magdalena-laplacette/',
    avatar: '/avatars/hernan-farruggia.png',
    text: '"Los chicos de Novolabs, tanto Dami, Tomi como todo el equipo de mentores, son grandes profesionales que te ayudan a llevar a cabo tu proyecto, con paciencia, sabiduría, y lo mas importante, desafiandote a ir por todo."',
  },
  {
    name: 'Hernán Farruggia',
    linkedIn: 'https://www.linkedin.com/in/hernanfarruggia/',
    avatar: '/avatars/alexy-narvaez.png',
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
    <div style={{ backgroundColor: '#ffffff', color: '#111827' }} className="rounded-xl border border-gray-200 p-5 sm:p-6 hover:border-lime-400/50 hover:shadow-sm transition-all duration-300">
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
            <p className="font-semibold text-sm sm:text-base" style={{ color: '#111827' }}>{testimonial.name}</p>
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
      <p className="text-sm sm:text-base leading-relaxed italic" style={{ color: '#374151' }}>
        {testimonial.text}
      </p>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-balance" style={{ color: '#111827' }}>
            {'Antes de seguir, '}
            <span style={{ color: '#EF4444' }} className="italic">{'leé esto:'}</span>
          </h2>
          <p className="text-base sm:text-lg mt-3" style={{ color: '#6B7280' }}>
            {'Algunas de las +300 personas que ya pasaron por Novolabs.'}
          </p>
        </div>

        {/* Testimonial Cards - 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-12">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Trustpilot Rating */}
        <div className="flex items-center justify-center gap-2 mb-16 sm:mb-20">
          <span className="font-bold text-lg" style={{ color: '#111827' }}>4.8</span>
          <TrustpilotStars rating={4.8} />
          <span className="text-sm" style={{ color: '#6B7280' }}>en</span>
          <a
            href="https://www.trustpilot.com/review/novolabs.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sm underline underline-offset-2 transition-colors"
            style={{ color: '#111827' }}
          >
            Trustpilot
          </a>
        </div>


      </div>
    </section>
  );
}
