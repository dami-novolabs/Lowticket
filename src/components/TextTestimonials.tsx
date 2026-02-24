import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Henry",
    avatar: "/images/testimonials-text/henry.png",
    text: "Aprend\u00ed metodolog\u00edas que aplicar\u00e9 siempre. La parte de validaci\u00f3n fue clave para m\u00ed: consegu\u00ed mis primeros clientes antes de lanzar. Es un programa serio, sin verso.",
    linkedin: "https://www.linkedin.com/in/frangeary/",
  },
  {
    name: "Tatiana Dom\u00ednguez",
    avatar: "/images/testimonials-text/tatiana-dominguez.png",
    text: "Nos ayudaron a validar el producto antes de desarrollarlo, ahorramos meses de trabajo. El nivel de feedback es brutal, te dicen la verdad sin filtros.",
    linkedin: "https://www.linkedin.com/in/tatiana-teresa-dominguez-rojas-65392415/",
  },
  {
    name: "Luciano Schillagi",
    avatar: "/images/testimonials-text/luciano-schillagi.png",
    text: "Arranqu\u00e9 con dudas enormes sobre mi idea. Hoy tengo claridad total sobre qu\u00e9 hacer y c\u00f3mo escalar. El equipo de Novolabs es incre\u00edble, te empujan a dar lo mejor.",
    linkedin: "https://www.linkedin.com/in/lucianoschillagi/",
  },
  {
    name: "Ger\u00f3nimo M\u00e1rsico",
    avatar: "/images/testimonials-text/geronimo-marsico.png",
    text: "Logr\u00e9 pivotar mi proyecto y encontrar product-market fit gracias al programa. La red de contactos que arm\u00e9 ac\u00e1 vale oro. Super recomendable para cualquier founder.",
    linkedin: "https://www.linkedin.com/in/geronimomarsico/",
  },
  {
    name: "Isabel Darsin",
    avatar: "/images/testimonials-text/isabel-darsin.png",
    text: "Los chicos de Novo son excelentes profesionales, tienen much\u00edsima experiencia y un m\u00e9todo para emprendedores que garantiza el \u00e9xito de tu start-up.",
    linkedin: "https://www.linkedin.com/in/isabeldarsin/",
  },
  {
    name: "Ignacio Ferreira",
    avatar: "/images/testimonials-text/ignacio-ferreira.png",
    text: "Me ayudaron a estructurar mi startup desde cero. Aprend\u00ed a vender antes de tener producto. El networking con otros founders fue un plus enorme.",
    linkedin: "https://www.linkedin.com/in/ignacio-ferreira/",
  },
  {
    name: "Adri\u00e1n Dutra",
    avatar: "/images/testimonials-text/adrian-dutra.png",
    text: "Pas\u00e9 de estar perdido a tener un roadmap claro y ejecutable. Los mentores son cracks, te gu\u00edan sin darte todo servido. Sal\u00eds con habilidades reales.",
    linkedin: "https://www.linkedin.com/in/adrian-dutra/",
  },
  {
    name: "Camila Aguado",
    avatar: "/images/testimonials-text/camila-aguado.png",
    text: "Me ayud\u00f3 de forma pr\u00e1ctica y clara a llevar adelante mi emprendimiento. Novo es muy bueno!",
    linkedin: "https://www.linkedin.com/in/camilaaguado/",
  },
  {
    name: "Pol L\u00f3pez",
    avatar: "/images/testimonials-text/pol-lopez.png",
    text: "El acompa\u00f1amiento fue incre\u00edble, por el conocimiento y la cercan\u00eda del equipo. Pero lo mejor es la comunidad: todos comparten, ayudan y suman. Emprender acompa\u00f1ado hace toda la diferencia.",
    linkedin: "https://www.linkedin.com/in/paullopezreyes/",
  },
  {
    name: "Maximiliano Fabi\u00e1n",
    avatar: "/images/testimonials-text/maximiliano-fabian.png",
    text: "El nivel de profundidad en las sesiones es impresionante. Te ayudan a pensar estrat\u00e9gicamente y ejecutar de forma t\u00e1ctica. Los resultados hablan solos.",
    linkedin: "https://www.linkedin.com/in/maxifabian",
  },
  {
    name: "Silvina Fernandez",
    avatar: "/images/testimonials-text/silvina-fernandez.png",
    text: "Entre en el programa buscando orientaci\u00f3n para poder llevar a cabo mi proyecto\u2026 Y al finalizar logre validar mi idea y lanzar mi MVP al mercado. A todos los que est\u00e9n pensando en emprender no duden en que Novo es la mejor opci\u00f3n.",
    linkedin: "https://www.linkedin.com/in/silfernandez-liderarte/",
  },
  {
    name: "Juan Mart\u00edn Cavallari",
    avatar: "/images/testimonials-text/juan-martin-cavallari.png",
    text: "Novolabs me ayud\u00f3 a pasar del concepto a la ejecuci\u00f3n. Aprend\u00ed herramientas concretas que uso todos los d\u00edas. La comunidad es un diferencial enorme.",
    linkedin: "https://www.linkedin.com/in/juan-mart%C3%ADn-cavallari-b25850ba",
  },
  {
    name: "Lisandro Belmonte",
    avatar: "/images/testimonials-text/lisandro-belmonte.png",
    text: "Tuve una gran experiencia en Novo, me ense\u00f1aron mucho y la comunidad siempre est\u00e1 dispuesta a ayudar. Muy recomendable!!",
    linkedin: "https://www.linkedin.com/in/lisandro-belmonte-942335279/",
  },
  {
    name: "Mercedes Rey",
    avatar: "/images/testimonials-text/mercedes-rey.png",
    text: "Cambi\u00f3 mi forma de pensar los negocios. Aprend\u00ed a testear r\u00e1pido, fallar barato y validar antes de invertir. Hoy mi startup est\u00e1 creciendo gracias a lo que aprend\u00ed ac\u00e1.",
    linkedin: "https://www.linkedin.com/in/mercedes-rey82/",
  },
  {
    name: "Lucas Zoppi",
    avatar: "/images/testimonials-text/lucas-zoppi.png",
    text: "Arranqu\u00e9 sin un norte claro y sal\u00ed entendiendo por completo si mi emprendimiento va a funcionar o no. El nivel de atenci\u00f3n es excelente y en cada clase me he llevado cosas que no ten\u00eda en consideraci\u00f3n.",
    linkedin: "https://www.linkedin.com/in/zoppi/",
  },
];

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-shrink-0 cursor-pointer fill-[#0A66C2] transition-opacity hover:opacity-80"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function TextTestimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white px-4 sm:px-6 border-t border-gray-200">
      <div className="mx-auto max-w-6xl">
        {/* Titulo */}
        <h2
          className="mb-10 text-center font-sans text-3xl text-black sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl"
          style={{ fontWeight: 800 }}
        >
          {"M\u00e1s y "}
          <span className="text-[rgb(255,58,32)]">{"m\u00e1s testimonios"}</span>
        </h2>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-lime-400/50 sm:p-6"
            >
              {/* Header: avatar + nombre + estrellas + LinkedIn */}
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full border-2 border-gray-200 object-cover sm:h-14 sm:w-14"
                />
                <div className="flex-1">
                  <p
                    className="mb-1 text-gray-900"
                    style={{ fontWeight: 600 }}
                  >
                    {t.name}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    {/* 5 estrellas Trustpilot */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-[#00b67a] text-[#00b67a] sm:h-4 sm:w-4"
                        />
                      ))}
                    </div>
                    {/* Icono LinkedIn */}
                    {t.linkedin && (
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Texto del testimonio */}
              <p className="text-sm italic leading-relaxed text-gray-700 sm:text-base">
                {`\u201c${t.text}\u201d`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
