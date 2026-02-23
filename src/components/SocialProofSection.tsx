import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import trustpilotLogo from 'figma:asset/f8caa03cf474966137234210cf241621c022e856.png';

// Import ALL 10 review images
import review1 from 'figma:asset/6e5fb2aaa9d7772bcbbe4a6bf69e2de0414ad263.png';
import review2 from 'figma:asset/ddd8c550c75ead91d09eb5087516b669919b9e42.png';
import review3 from 'figma:asset/cb868f6104b1716a397ff3d4257da6aae88bd4b0.png';
import review4 from 'figma:asset/e1be36f1e1891a906ff8f6dab4328ad5c01e578e.png';
import review5 from 'figma:asset/fb2e55149f94c0739cd8a464bf30d46c3eb61d63.png';
import review6 from 'figma:asset/555e9d9f5701c2b85723bdec58ac77c882e1f53b.png';
import review7 from 'figma:asset/593a1eca64777b637d94e236a9382544440709e0.png';
import review8 from 'figma:asset/51bf313ef1ba22faeea028820e2ff9ad256c2d5f.png';
import review9 from 'figma:asset/8072912981547952e29a24a79ef04a46f9d5623d.png';
import review10 from 'figma:asset/86623586593dd10bf2aec4ff37d0a436570435a8.png';
import review11 from 'figma:asset/e5b1a2dc2bea96e4a99cd72ddb11fb02b15696a3.png';
import review12 from 'figma:asset/f9a9ea9de56e25d3dc44ab8b8fa6b3b32011de92.png';
import review13 from 'figma:asset/533a96a8ecdfbcd2fff5bba5b20ad2ebb95325b3.png';
import review14 from 'figma:asset/10ad59d30fe2c880fa50544745eabb6f369db066.png';

// Import C5N logo
import c5nLogo from 'figma:asset/5e56563d4d2f43f6cacabbb74f2e241e7a5e1c1d.png';
// Import Clarín logo
import clarinLogo from 'figma:asset/d399663dc68a8a2b9a5d52ff995252cfd2750bae.png';
// Import Forbes logo
import forbesLogo from 'figma:asset/703b5dedebffe029a7e02674bb9d9e555c683cd0.png';
// Import LA NACIÓN logo
import lanacionLogo from 'figma:asset/4150b3abe68230ad8c1124084a7d8f1b488b88f1.png';
import iprofesionalLogo from 'figma:asset/80415a206b10e0613c3449bcf8393c2cdecb45fa.png';

interface ReviewImage {
  id: number;
  alt: string;
  src: string;
  loaded: boolean;
}

export function SocialProofSection() {
  // All 14 review images with loading state
  const initialReviews: ReviewImage[] = [
    { id: 2, alt: "Review de Ignacio Ferreira - Respuesta de leads, validación de problema", src: review2, loaded: false },
    { id: 1, alt: "Review de Soledad Martinez - Válido cada centavo", src: review1, loaded: false },
    { id: 11, alt: "Review de Adrián Dutra - Una experiencia práctica y transformadora para nuestro proyecto", src: review11, loaded: false },
    { id: 13, alt: "Review de Tatiana Dominguez - Logré hacer cosas que no imaginé poder hacer bajo la asistencia de mentores preparados", src: review13, loaded: false },
    { id: 14, alt: "Review de Alexy Narvaez - Gente muy preparada con herramientas para construir desde cero, 100% recomendado", src: review14, loaded: false },
    { id: 12, alt: "Review de Hernan Suarez - Novo nos cambió toda la manera de pensar las cosas para lanzar una startup", src: review12, loaded: false },
    { id: 3, alt: "Review de Isabel - Excelencia y profesionalismo", src: review3, loaded: false },
    { id: 4, alt: "Review de Lisandro Belmonte - Mi experiencia en Novo", src: review4, loaded: false },
    { id: 5, alt: "Review de Camila Aguado - Me ayudó de forma práctica y clara", src: review5, loaded: false },
    { id: 6, alt: "Review de Facundo Rosa Breik - Gamechanger", src: review6, loaded: false },
    { id: 7, alt: "Review de Lucas Zoppi - Una experiencia única", src: review7, loaded: false },
    { id: 8, alt: "Review de Manuel Fondovila - Novolabs cambió mi perspectiva", src: review8, loaded: false },
    { id: 9, alt: "Review de Pol López - Emprender acompañado hace toda la diferencia", src: review9, loaded: false },
    { id: 10, alt: "Review de Luciano Schillagi - El contenido es de gran valor", src: review10, loaded: false }
  ];

  const [validReviews, setValidReviews] = useState<ReviewImage[]>([]);
  const [loadingComplete, setLoadingComplete] = useState(false);
  
  // Auto-play state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  // Preload images and filter out broken ones
  useEffect(() => {
    const loadImages = async () => {
      const loadPromises = initialReviews.map((review) => {
        return new Promise<ReviewImage | null>((resolve) => {
          const img = new Image();
          
          img.onload = () => {
            resolve({ ...review, loaded: true });
          };
          
          img.onerror = () => {
            // Silently handle failed images - no console warnings
            resolve(null); // Return null for failed images
          };
          
          img.src = review.src;
        });
      });

      try {
        const results = await Promise.all(loadPromises);
        // Filter out null results (failed images) and keep only loaded ones
        const validImages = results.filter((result): result is ReviewImage => result !== null);
        
        // Successfully filtered and loaded working images
        setValidReviews(validImages);
      } catch (error) {
        console.error('Error loading review images:', error);
        setValidReviews([]); // Fallback to empty array
      } finally {
        setLoadingComplete(true);
      }
    };

    loadImages();
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (!carouselApi || validReviews.length === 0 || !isAutoPlaying) return;

    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        // Loop back to start
        carouselApi.scrollTo(0);
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselApi, validReviews.length, isAutoPlaying]);

  // Handle carousel API setup
  useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <section className="py-20 px-4 bg-novo-background-2">
      <div className="container mx-auto max-w-7xl">
        {/* Main Metric */}
        <div className="text-center mb-16">
          <h2 className="thunder-font text-3xl md:text-4xl text-novo-white text-[32px]">
            <span className="text-novo-secondary">350+ Alumni</span> en <span className="text-novo-primary">Latinoam&eacute;rica</span>
          </h2>
          <p className="text-novo-grey text-lg mt-2">{'Ya lanzaron su idea al mercado y consiguieron sus primeros clientes aplicando esta metodología.'}</p>
        </div>

        {/* Trustpilot Reviews Carousel */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 bg-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-lg mb-4">
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
              <img 
                src={trustpilotLogo}
                alt="Trustpilot"
                className="h-3.5 w-auto"
              />
            </div>
          </div>

          {/* Loading State */}
          {!loadingComplete && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-novo-primary"></div>
              <p className="text-novo-grey mt-4">Cargando testimonios...</p>
            </div>
          )}

          {/* Reviews Carousel - Only show if we have valid reviews */}
          {loadingComplete && validReviews.length > 0 && (
            <div 
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-6xl mx-auto"
                setApi={setCarouselApi}
              >
              <CarouselContent className="-ml-2 md:-ml-4">
                {validReviews.map((review) => (
                  <CarouselItem key={review.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={review.src}
                        alt={review.alt}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious 
                  className="bg-novo-primary hover:bg-novo-primary/90 text-white border-novo-primary" 
                  onClick={() => {
                    setIsAutoPlaying(false);
                    if (carouselApi) {
                      carouselApi.scrollPrev();
                    }
                  }}
                />
                <CarouselNext 
                  className="bg-novo-primary hover:bg-novo-primary/90 text-white border-novo-primary"
                  onClick={() => {
                    setIsAutoPlaying(false);
                    if (carouselApi) {
                      carouselApi.scrollNext();
                    }
                  }}
                />
              </div>
            </Carousel>
            </div>
          )}

          {/* Fallback if no reviews loaded */}
          {loadingComplete && validReviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-novo-grey">Los testimonios se están cargando...</p>
            </div>
          )}



          {/* Historical credibility message - After carousel */}
          {loadingComplete && validReviews.length > 0 && (
            <div className="text-center mt-8">
              <p className="text-novo-grey text-sm">Desde el 2019 ayudando a emprendedores. Menciones en prensa:</p>
            </div>
          )}
        </div>

        {/* Press Mentions */}
        <div className="bg-gradient-to-r from-novo-background-2 via-novo-black to-novo-background-2 py-8 -mx-4 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            {/* Title */}
            <h3 className="thunder-font text-novo-white mb-6 text-base sm:text-xl">
              Menciones en prensa:
            </h3>
            
            {/* Media Logos - Mobile: Animated Grid | Desktop: Static Grid */}
            <div className="block sm:hidden">
              <div className="relative w-full max-w-xs mx-auto overflow-hidden">
                <div className="flex animate-[scroll_12s_linear_infinite] hover:[animation-play-state:paused]">
                  {/* Primera iteración de logos */}
                  <div className="flex gap-10 shrink-0">
                    <div className="flex justify-center items-center w-24">
                      <img 
                        src={c5nLogo}
                        alt="C5N - Canal de noticias"
                        className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                    <div className="flex justify-center items-center w-24">
                      <img 
                        src={clarinLogo}
                        alt="Clarín - Diario argentino"
                        className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                    <div className="flex justify-center items-center w-24">
                      <img 
                        src={forbesLogo}
                        alt="Forbes - Revista de negocios"
                        className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                    <div className="flex justify-center items-center w-24">
                      <img 
                        src={lanacionLogo}
                        alt="LA NACIÓN - Diario argentino"
                        className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                    <div className="flex justify-center items-center w-24">
                      <img 
                        src={iprofesionalLogo}
                        alt="iPROFESIONAL - Portal de noticias"
                        className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                  </div>
                  {/* Segunda iteración para scroll infinito */}
                  <div className="flex gap-10 shrink-0">
                    <div className="flex justify-center items-center w-24">
                      <img 
                        src={c5nLogo}
                        alt="C5N - Canal de noticias"
                        className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                    <div className="flex justify-center items-center w-24">
                      <img 
                        src={clarinLogo}
                        alt="Clarín - Diario argentino"
                        className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                    <div className="flex justify-center items-center w-24">
                      <img 
                        src={forbesLogo}
                        alt="Forbes - Revista de negocios"
                        className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                    <div className="flex justify-center items-center w-24">
                      <img 
                        src={lanacionLogo}
                        alt="LA NACIÓN - Diario argentino"
                        className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                    <div className="flex justify-center items-center w-24">
                      <img 
                        src={iprofesionalLogo}
                        alt="iPROFESIONAL - Portal de noticias"
                        className="h-6 w-auto filter grayscale opacity-70 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Static Grid */}
            <div className="hidden sm:flex items-center justify-center gap-6 opacity-70">
              <img 
                src={c5nLogo}
                alt="C5N - Canal de noticias"
                className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:scale-105"
              />
              <img 
                src={clarinLogo}
                alt="Clarín - Diario argentino"
                className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:scale-105"
              />
              <img 
                src={forbesLogo}
                alt="Forbes - Revista de negocios"
                className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:scale-105"
              />
              <img 
                src={lanacionLogo}
                alt="LA NACIÓN - Diario argentino"
                className="h-6 w-auto filter grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:scale-105"
              />
              <img 
                src={iprofesionalLogo}
                alt="iPROFESIONAL - Portal de noticias"
                className="h-6 w-auto filter grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
