import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: "¿Cuánto tiempo necesito dedicarle por día?",
      answer: "El curso no tiene una cantidad de horas definida como tal. Está diseñado para personas ocupadas. La idea es que puedas hacerlo en los días que puedas destinar 90 minutos de foco continuo."
    },
    {
      question: "¿El curso es en vivo?",
      answer: "No, este curso no es en vivo. Todo el contenido está pregrabado y disponible 24/7 para que puedas avanzar a tu ritmo y en tus propios horarios. Además, tenés acceso de por vida al contenido."
    },
    {
      question: "¿Funciona para cualquier tipo de negocio?",
      answer: "Este sistema funciona perfectamente con Apps m\u00f3viles, SaaS, Marketplace, Chatbots, Copilotos de IA, Agencias de Servicios, Negocios de Consultor\u00eda y negocios de Educaci\u00f3n (Bootcamp, programa, infoproducto, etc)."
    },
    {
      question: "¿Puedo pagar desde LATAM?",
      answer: "Sí, aceptamos pagos en dólares desde toda Latinoamérica. Nuestro proveedor de pagos es Stripe, empresa líder en infraestructura de pagos para comercio internacional."
    },
    {
      question: "\u00bfPor qu\u00e9 cuesta $390 solamente?",
      answer: "$390 es el precio de lanzamiento, por lo que si est\u00e1s leyendo esto\u2026 Enhorabuena por la oportunidad, no la desaproveches. Este curso On-Demand te incluye una bonificaci\u00f3n de $390 en nuestro Programa en Vivo de 4 meses donde te damos acompa\u00f1amiento personalizado. \u00a1Tenelo en cuenta!"
    },
    {
      question: "\u00bfQu\u00e9 incluye el Programa de Acompa\u00f1amiento en vivo que este curso no tiene?",
      answer: "El programa de 4 meses de acompa\u00f1amiento incluye entre 1 y 3 puntos de contacto en vivo por semana con tus mentores. Unas 80 horas de acompa\u00f1amiento en vivo donde vas a poder hablar de tu proyecto y recibir nuestra ayuda para ejecutarlo en tiempo real."
    },
    {
      question: "¿Qué pasa si mi experimento 'falla'?",
      answer: "¡Perfecto! Un experimento que 'falla' te ahorra meses de tiempo y dinero. El objetivo es encontrar la verdad, no confirmar lo que querés escuchar. Podés volver a repetir el proceso con otro experimento u otra idea de negocios."
    },
    {
      question: "¿Necesito conocimientos técnicos?",
      answer: "No. Este curso lo han completado con éxito personas no-técnicas de 55+ años. Los Asistentes de IA Especializados de Novolabs hacen el trabajo pesado."
    },
    {
      question: "¿Hay soporte o comunidad?",
      answer: "Sí, tendrás soporte por WhatsApp durante los primeros 7 días del curso. Para acceder a la comunidad de emprendedores y al soporte extendido está el Programa 'Lanzar' de 4 meses."
    },
    {
      question: "\u00bfQu\u00e9 pasa despu\u00e9s del curso?",
      answer: "Tendr\u00e1s una idea validada de forma correcta, con clientes identificados que quieren pagar por lo que hac\u00e9s. Tambi\u00e9n tendr\u00e1s el producto/servicio ya definido y listo para lanzar. A partir de ah\u00ed tu trabajo ser\u00e1 agrandar la masa de clientes que pagan. Pod\u00e9s hacerlo por tu cuenta o unirte al Programa de 4 meses con $390 USD de descuento (bono incluido)."
    },
    {
      question: "¿Es realmente una garantía sin letra chica?",
      answer: "Sí. Si seguís el método y no tenés claridad, reembolsamos 100% en 48hs. Sin preguntas. Así de simple."
    }
  ];

  return (
    <section className="py-16 px-4 bg-novo-background-2">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="thunder-font text-2xl sm:text-3xl md:text-4xl text-novo-white mb-4">
            LAS PREGUNTAS MAS FRECUENTES
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-novo-background border border-novo-primary/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 sm:px-6 py-4 text-left text-novo-white hover:text-novo-secondary hover:no-underline text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 text-novo-grey leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <div className="bg-novo-background-2 border border-novo-primary/20 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Side - Text */}
              <div className="flex-1">
                <h3 className="thunder-font text-2xl md:text-3xl text-novo-white mb-2">
                  ¿Tenés otra pregunta?
                </h3>
                <p className="text-novo-grey text-lg">
                  ¡Hablemos por WhatsApp!
                </p>
              </div>
              
              {/* Center Arrow */}
              <div className="hidden md:block">
                <svg 
                  className="w-12 h-8 text-novo-secondary" 
                  viewBox="0 0 48 32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M2 16H46M46 16L32 2M46 16L32 30" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              {/* Right Side - WhatsApp Button */}
              <div className="flex-1 flex justify-center md:justify-end">
                <a 
                  href="https://wa.me/5491163544698?text=Buenas!%20Me%20gustar%C3%ADa%20comprar%20el%20curso%20On%20Demand%20de%20Novolabs%2C%20pero%20necesito%20m%C3%A1s%20informaci%C3%B3n.%20Me%20ayudas%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-3 rounded-lg transition-colors duration-200 opacity-80 hover:opacity-100"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="font-semibold text-lg">Abrir WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
