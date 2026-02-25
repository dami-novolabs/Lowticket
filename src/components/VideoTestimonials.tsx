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
                className="relative rounded-2xl overflow-hidden group cursor-pointer active:scale-[0.98] transition-all duration-300 w-full touch-manipulation border-2 border-transparent hover:border-novo-secondary/40"
                onClick={() => setPlayingVideo(testimonial.id)}
              >
                {/* Thumbnail - fills entire card */}
                <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden">
                  <img
                    src={testimonial.thumbnail}
                    alt={`Testimonio de ${testimonial.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark overlay gradients for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-novo-black/70 via-transparent to-novo-black/80" />
                  <div className="absolute inset-0 bg-novo-black/20" />
                </div>

                {/* Name - Top Left */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20">
                  <p className="text-novo-white text-xs sm:text-sm satoshi-font font-medium" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>
                    {testimonial.name}
                  </p>
                </div>

                {/* Play Button - Center */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 bg-novo-white/80 group-hover:bg-novo-secondary group-active:bg-novo-secondary shadow-lg group-hover:shadow-novo-secondary/30">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 text-novo-black fill-current ml-0.5" />
                  </div>
                </div>

                {/* Quote - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-5 sm:px-6 pb-5 sm:pb-7 pt-16 bg-gradient-to-t from-novo-black via-novo-black/70 to-transparent">
                  <p
                    className="text-novo-secondary text-lg sm:text-xl md:text-2xl leading-tight thunder-font tracking-wide"
                    style={{ fontWeight: 800, fontStyle: "italic", textShadow: '0 2px 12px rgba(0,0,0,1)' }}
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
          className="!p-0 bg-transparent border-0 shadow-none [&>button]:hidden"
          style={{ maxWidth: '90vw', width: '90vw', maxHeight: '90vh' }}
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
            <div className="w-full bg-novo-black rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16', maxHeight: '85vh' }}>
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
