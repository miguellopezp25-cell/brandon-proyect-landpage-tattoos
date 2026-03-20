import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Artist Presentation */}
      <section className="relative flex min-h-screen items-center px-8 py-20 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Artist Info */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Artista Brando Rodriguez
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">
                Creando Arte Permanente en Tu Piel
              </span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Con mas de 5 anos de experiencia, transformo ideas en obras de arte unicas. 
              Mi pasion es crear tatuajes que cuenten tu historia y reflejen tu personalidad. 
              Cada diseno es una pieza exclusiva, trabajada con precision y dedicacion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/galeria">
                  Ver Galeria
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">Agendar Cita</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Anos de experiencia</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Tatuajes realizados</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Clientes satisfechos</p>
              </div>
            </div>
          </div>

          {/* Right - Artist Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg">
              <Image
                src="/images/artist.png"
                alt="Artista tatuador profesional"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 border border-border" />
            <div className="absolute -top-4 -left-4 h-32 w-32 border border-border" />
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="border-t border-border bg-card px-8 py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Estilos de Trabajo
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {["Asian", "Blackout", "Fine Line", "Blackwork", "Colorful"].map(
              (style) => (
                <Link
                  key={style}
                  href={`/galeria?estilo=${style.toLowerCase().replace(" ", "-")}`}
                  className="group flex flex-col items-center rounded-lg border border-border bg-background p-6 transition-all hover:border-foreground"
                >
                  <span className="font-serif text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                    {style}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Listo para tu proximo tatuaje?</span>
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Agenda una consulta gratuita y hablemos sobre tu idea. 
            Juntos crearemos algo unico.
          </p>
          <Button asChild size="lg" className="group">
            <Link href="/contacto">
              Contactar
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
