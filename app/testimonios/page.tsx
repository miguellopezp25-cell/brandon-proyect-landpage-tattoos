import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Garcia",
    date: "Febrero 2024",
    rating: 5,
    style: "Fine Line",
    text: "Increible experiencia! El artista entendio perfectamente lo que queria. El resultado supero mis expectativas. El estudio es super limpio y profesional. Definitivamente volvere para mi proximo tatuaje.",
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    date: "Enero 2024",
    rating: 5,
    style: "Blackwork",
    text: "Mi manga quedo espectacular. La atencion al detalle es impresionante. El proceso fue comodo y el artista muy profesional. 100% recomendado.",
  },
  {
    id: 3,
    name: "Ana Martinez",
    date: "Diciembre 2023",
    rating: 5,
    style: "Asian",
    text: "Buscaba un artista que dominara el estilo japones y lo encontre. Mi dragon quedo perfecto, con todos los detalles tradicionales que queria. Excelente trabajo.",
  },
  {
    id: 4,
    name: "Diego Lopez",
    date: "Noviembre 2023",
    rating: 5,
    style: "Colorful",
    text: "Los colores de mi tatuaje son vibrantes y el diseno es unico. El artista supo capturar exactamente la vision que tenia en mente. Muy profesional.",
  },
  {
    id: 5,
    name: "Sofia Hernandez",
    date: "Octubre 2023",
    rating: 5,
    style: "Fine Line",
    text: "Era mi primer tatuaje y estaba muy nerviosa, pero el equipo me hizo sentir muy comoda. El resultado es hermoso y delicado, justo lo que queria.",
  },
  {
    id: 6,
    name: "Roberto Sanchez",
    date: "Septiembre 2023",
    rating: 5,
    style: "Blackout",
    text: "Queria cubrir un tatuaje antiguo y el resultado fue increible. El blackout quedo perfecto y la transicion es impecable. Gran trabajo.",
  },
  {
    id: 7,
    name: "Laura Fernandez",
    date: "Agosto 2023",
    rating: 5,
    style: "Blackwork",
    text: "El mandala que me hicieron es una obra de arte. La precision y la simetria son perfectas. Muy contenta con el resultado.",
  },
  {
    id: 8,
    name: "Miguel Torres",
    date: "Julio 2023",
    rating: 5,
    style: "Asian",
    text: "Segundo tatuaje con ellos y no me decepcionan. El koi que me hicieron tiene un movimiento y detalle increibles. Volvere por mas.",
  },
]

export default function TestimoniosPage() {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length

  return (
    <div className="min-h-screen px-8 py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Opiniones de Clientes
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Testimonios
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            La satisfaccion de nuestros clientes es nuestro mayor orgullo.
            Lee lo que dicen sobre su experiencia con nosotros.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-12 border-y border-border py-8">
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-foreground">
              {averageRating.toFixed(1)}
            </p>
            <div className="mt-2 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-foreground text-foreground"
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Calificacion promedio
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-foreground">
              {testimonials.length}+
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Resenas verificadas
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-bold text-foreground">
              100%
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Clientes satisfechos
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/50"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-muted-foreground/20" />
              
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-foreground text-foreground"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 leading-relaxed text-foreground">
                {`"${testimonial.text}"`}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {testimonial.style}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Tu opinion nos importa. Despues de tu sesion, te invitamos a compartir tu experiencia.
          </p>
        </div>
      </div>
    </div>
  )
}
