import React from 'react';
import { Card } from './ui/card';
import { CheckCircle } from 'lucide-react';
import cronogramaImage from 'figma:asset/a961d2ef457d16a466522d96e756348907e63359.png';

export function RoadmapSection() {
  const roadmapDays = [
    {
      day: 1,
      title: "Fundamentos del Emprendimiento",
      description: "Desarrollá la mentalidad correcta para emprender. Conocé los fundamentos del proceso de validación y configurá las herramientas que vas a usar durante todo el curso.",
      deliverable: "Mentalidad y herramientas configuradas"
    },
    {
      day: 2, 
      title: "Generación de Ideas",
      description: "Aprende a usar inteligencia artificial y pasa de 0 a 10+ ideas de negocio en minutos, sin quedarte paralizado frente a la hoja en blanco.",
      deliverable: "Inventario completo de ideas"
    },
    {
      day: 3,
      title: "Selección de Idea ganadora",
      description: "Aprende a aplicar criterios objetivos para filtrar tus ideas y evitar decisiones basadas solo en intuición o emoción.",
      deliverable: "Top 3 ideas priorizadas"
    },
    {
      day: 4,
      title: "Identificación de Nichos Rentables",
      description: "Aprende a identificar nichos de mercado donde la gente quiera y pueda pagar por tu producto/servicio.",
      deliverable: "Análisis de nicho detallado"
    },
    {
      day: 5,
      title: "Descubrimiento de Problemas Urgentes", 
      description: "Aprende a diferenciar entre lo que la gente dice que quiere / necesita y lo que en verdad está dispuesta a pagar.",
      deliverable: "Mapa de problemas urgentes"
    },
    {
      day: 6,
      title: "Definición del Modelo de Negocios",
      description: "Aprende a estructurar tu idea y su modelo de negocios de forma clara y atacando los 9 cuadrantes del Lean Canvas.",
      deliverable: "Modelo de negocio definido"
    },
    {
      day: 7,
      title: "Creación Experimentos de validación",
      description: "Pasa de la teoría a la práctica con pruebas rápidas que confirmen si tu idea genera tracción real de tus clientes.",
      deliverable: "Plan de experimentos listo"
    },
    {
      day: "🎁",
      title: "Bonus: Preparación de entrevistas a clientes",
      description: "Aprende las bases de una buena entrevista: cómo escuchar, qué preguntar y cómo evitar cesgar las respuestas de tus potenciales clientes.",
      deliverable: "Guión de entrevistas estructurado"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="thunder-font text-2xl sm:text-3xl md:text-4xl text-novo-white mb-4">
            Cronograma del curso
          </h2>
          
          {/* Workspace Image - Mobile Only (between title and subtitle) */}
          <div className="block sm:hidden mb-6 flex justify-center">
            <div className="relative max-w-sm mx-auto px-4">

              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-novo-background/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl text-novo-grey max-w-3xl mx-auto">
            Cada módulo tiene objetivos claros, herramientas específicas para aplicar, tutoriales paso a paso y entregables concretos. Diseñado para que no haya lugar a confusiones.
          </p>
        </div>

        {/* Workspace Image - Desktop Only (after subtitle) */}
        <div className="hidden sm:block mb-12 flex justify-center">
          <div className="relative max-w-4xl mx-auto px-4">

            {/* Subtle overlay for premium effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-novo-background/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line - Mobile first */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-novo-primary via-novo-secondary to-novo-primary"></div>

          {/* Roadmap items - Mobile optimized */}
          <div className="space-y-8">
            {roadmapDays.map((day, index) => {              
              return (
                <div key={day.day} className="relative flex items-start gap-6 pl-16">
                  
                  {/* Timeline dot */}
                  <div className="absolute left-3 top-7 w-6 h-6 bg-novo-primary rounded-full border-4 border-novo-background flex items-center justify-center z-10">
                    <span className="block sm:hidden text-novo-white text-xs font-bold">{day.day}</span>
                  </div>

                  {/* Content card - Mobile optimized */}
                  <Card className="w-full bg-novo-background-2 border-novo-primary/20 p-4 sm:p-5 hover:border-novo-secondary/40 transition-all duration-300">
                    
                    <div className="flex items-center gap-3 mb-3">
                      <div className="hidden sm:flex w-10 h-10 bg-novo-primary/20 rounded-lg items-center justify-center flex-shrink-0">
                        <span className="text-novo-primary font-bold text-lg">{day.day}</span>
                      </div>
                      <div className="flex-1">
                        <div className="thunder-font text-novo-white sm:text-lg leading-tight text-[20px]">
                          {day.title}
                        </div>
                      </div>
                    </div>

                    <p className="text-novo-grey text-sm sm:text-base leading-relaxed">
                      {day.description}
                    </p>

                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary - Mobile optimized */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-novo-primary/10 to-novo-secondary/10 border-novo-primary/20 p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="thunder-font text-xl sm:text-2xl text-novo-white mb-6">
              Al finalizar este curso obtendrás:
            </h3>
            <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6">
              <div className="flex items-center gap-3 sm:flex-col sm:text-center sm:gap-0">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-novo-secondary flex-shrink-0 sm:mx-auto sm:mb-2" />
                <div className="text-novo-white font-semibold text-sm sm:text-base">Una idea con potencial</div>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:text-center sm:gap-0">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-novo-secondary flex-shrink-0 sm:mx-auto sm:mb-2" />
                <div className="text-novo-white font-semibold text-sm sm:text-base">Un nicho con capacidad de pago</div>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:text-center sm:gap-0">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-novo-secondary flex-shrink-0 sm:mx-auto sm:mb-2" />
                <div className="text-novo-white font-semibold text-sm sm:text-base">Un plan de acción paso a paso</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}