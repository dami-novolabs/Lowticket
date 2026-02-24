import { useState } from "react";
import { Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";

const videoTestimonials = [
  {
    id: 1,
    thumbnail: "/images/testimonials/magdalena-biassuto.png",
    videoUrl: "https://www.youtube.com/embed/ESUN3E3aX3g",
    name: "Magdalena Biassuto",
    industry: "Salud",
    quote:
      "Mejore mi idea original y encontre a mi socio tech dentro del Programa...",
  },
  {
    id: 2,
    thumbnail: "/images/testimonials/raul-monge.png",
    videoUrl: "https://www.youtube.com/embed/7F4_lbbzPKM",
    name: "Raul Monge",
    industry: "Logistica",
    quote:
      "Consegui mis primeros 15 clientes recurrentes en menos de 4 meses...",
  },
  {
    id: 3,
    thumbnail: "/images/testimonials/roberto-jimenez.png",
    videoUrl: "https://www.youtube.com/embed/XOs8wzErvVw",
    name: "Roberto Jimenez",
    industry: "Legales",
    quote:
      "Tengo una idea mucho mas solida y los primeros clientes...",
  },
  {
    id: 4,
    thumbnail: "/images/testimonials/laura-martinez.png",
    videoUrl: "https://www.youtube.com/embed/83F0dm9QVmY",
    name: "Laura Martinez",
    industry: "Energias Renovables",
    quote:
      "Me gusto tanto el Programa que le cuento a todos de Novolabs ...",
  },
  {
    id: 5,
    thumbnail: "/images/testimonials/valentin-llorens.png",
    videoUrl: "https://www.youtube.com/embed/_cnUn0Q0uEs",
    name: "Valentin Llorens",
    industry: "Educacion",
    quote:
      "Descubri una nueva forma de emprender, me cambiaron la cabeza...",
  },
  {
    id: 6,
    thumbnail: "/images/testimonials/gabriel-vicentin.png",
    videoUrl: "https://www.youtube.com/embed/uloRdBDJsHw",
    name: "Gabriel Vicentin",
    industry: "Deporte",
    quote:
      "Ojala hubiera conocido Novolabs hace muchos anos atras...",
  },
];

export function VideoTestimonials() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const activeTestimonial = videoTestimonials.find(
    (t) => t.id === playingVideo
  );

  return (
    <>
      <section className="py-12 sm:py-16 md:py-24 bg-novo-background px-4 sm:px-6 border-t border-novo-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2
              className="thunder-font text-3xl sm:text-4xl md:text-5xl text-novo-white mb-3 sm:mb-4 px-2 text-balance"
            >
              {"Opiniones reales, "}
              <span className="text-novo-primary">{"sin humo."}</span>
            </h2>
            <p className="text-sm sm:text-base text-novo-grey max-w-xl mx-auto px-4 satoshi-font">
              {
                "Nada mejor que escuchar directamente a las personas que ya pasaron por lo que vos estas pasando ahora."
              }
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {videoTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative bg-novo-background-2 rounded-xl sm:rounded-2xl overflow-hidden border border-novo-white/10 group cursor-pointer hover:border-novo-secondary/50 active:scale-[0.98] transition-all w-full touch-manipulation"
                onClick={() => setPlayingVideo(testimonial.id)}
              >
                {/* Industry Badge + Name - Top Left */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex flex-col gap-1.5">
                  <span className="inline-block w-fit text-[10px] sm:text-xs text-novo-black font-semibold tracking-wide satoshi-font bg-novo-secondary px-2.5 py-1 rounded-md">
                    {testimonial.industry}
                  </span>
                  <p className="text-novo-white text-xs sm:text-sm satoshi-font font-medium drop-shadow-lg">
                    {testimonial.name}
                  </p>
                </div>

                {/* Thumbnail Cover - Horizontal 16:9 */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={testimonial.thumbnail}
                    alt={`Testimonio de ${testimonial.name}`}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-novo-black via-novo-black/20 to-transparent opacity-90" />
                </div>

                {/* Play Button - Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-novo-white/90 rounded-full flex items-center justify-center group-hover:bg-novo-secondary group-active:bg-novo-secondary transition-all duration-300">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 text-novo-black fill-current ml-0.5" />
                  </div>
                </div>

                {/* Quote - Bottom */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <p
                    className="text-novo-white text-sm sm:text-base md:text-lg leading-snug satoshi-font"
                    style={{ fontWeight: 600, fontStyle: "italic" }}
                  >
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal (vertical 9:16) */}
      <Dialog
        open={playingVideo !== null}
        onOpenChange={(open) => !open && setPlayingVideo(null)}
      >
        <DialogContent
          className="!max-w-md !p-0 bg-transparent border-0 shadow-none [&>button]:hidden"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Video Testimonio</DialogTitle>

          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute -top-12 right-0 z-50 rounded-full p-2.5 bg-novo-white/90 backdrop-blur-sm text-novo-black hover:bg-novo-white transition-all"
          >
            <X className="h-5 w-5" />
          </button>

          {activeTestimonial && (
            <div className="w-full aspect-[9/16] max-h-[80vh] bg-novo-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={`${activeTestimonial.videoUrl}${
                  activeTestimonial.videoUrl.includes("?") ? "&" : "?"
                }autoplay=1&fs=1&modestbranding=1&rel=0`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                title={`Testimonio de ${activeTestimonial.name}`}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
