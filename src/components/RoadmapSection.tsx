import React from 'react';
import { Card } from './ui/card';
import { CheckCircle } from 'lucide-react';
import cronogramaImage from 'figma:asset/a961d2ef457d16a466522d96e756348907e63359.png';

export function RoadmapSection() {
  const roadmapDays = [
    {
      day: "1",
      title: "Dise\u00f1\u00e1s tu Modelo de Negocios",
      description: "Descubr\u00eds qu\u00e9 modelo encaja con tu contexto y habilidades \u2192 avanz\u00e1s con claridad sin copiar f\u00f3rmulas ajenas.",
      deliverable: ""
    },
    {
      day: "2",
      title: "Detect\u00e1s el Problema Real",
      description: "Identific\u00e1s dolores urgentes y concretos del cliente \u2192 evit\u00e1s construir bas\u00e1ndose en suposiciones.",
      deliverable: ""
    },
    {
      day: "3",
      title: "Defin\u00eds la Soluci\u00f3n (sin construir nada)",
      description: "Dise\u00f1\u00e1s una soluci\u00f3n deseable y simple \u2192 evit\u00e1s malgastar meses desarrollando features innecesarias.",
      deliverable: ""
    },
    {
      day: "4",
      title: "Cre\u00e1s una Oferta Irresistible para el mercado",
      description: "Transform\u00e1s tu idea en una propuesta irresistible \u2192 comunic\u00e1s valor con precisi\u00f3n y gener\u00e1s inter\u00e9s real.",
      deliverable: ""
    },
    {
      day: "5",
      title: "Valid\u00e1s con Clientes que Pagan antes de construir",
      description: "Consegu\u00eds tus primeros compradores antes de tener el producto \u2192 obten\u00e9s evidencia objetiva de mercado.",
      deliverable: ""
    },
    {
      day: "6",
      title: "Constru\u00eds y lanzas tu MVP (solo si vale la pena)",
      description: "Si el mercado lo confirma, us\u00e1s IA + No-Code para crear un MVP simple y enfocado \u2192 evitando invertir de m\u00e1s.",
      deliverable: ""
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
                  </div>

                  {/* Content card - Mobile optimized */}
                  <Card className="w-full bg-novo-background-2 border-novo-primary/20 p-4 sm:p-5 hover:border-novo-secondary/40 transition-all duration-300">
                    
                    <div className="mb-1">
                      <span className="text-novo-secondary text-xs font-bold tracking-wider">{`M\u00d3DULO ${day.day}`}</span>
                    </div>
                    <div className="mb-3">
                      <div className="thunder-font text-novo-white sm:text-lg leading-tight text-[20px]">
                        {day.title}
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
                <div className="text-novo-white font-semibold text-sm sm:text-base">Un modelo de negocios para tu idea</div>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:text-center sm:gap-0">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-novo-secondary flex-shrink-0 sm:mx-auto sm:mb-2" />
                <div className="text-novo-white font-semibold text-sm sm:text-base">Seguridad de que al cliente le interesa lo que haces</div>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:text-center sm:gap-0">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-novo-secondary flex-shrink-0 sm:mx-auto sm:mb-2" />
                <div className="text-novo-white font-semibold text-sm sm:text-base">Un producto/servicio claro para lanzar al mercado</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
