import Image from "next/image"
import { Shield, Sparkles, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Higiene Garantizada",
    description:
      "Utilizamos equipos esterilizados y materiales desechables. Tu seguridad es nuestra prioridad.",
  },
  {
    icon: Sparkles,
    title: "Equipamiento Premium",
    description:
      "Trabajamos con las mejores maquinas y tintas del mercado para resultados excepcionales.",
  },
  {
    icon: Clock,
    title: "Citas Puntuales",
    description:
      "Respetamos tu tiempo. Cada sesion esta planificada para brindarte la mejor experiencia.",
  },
  {
    icon: Award,
    title: "Certificaciones",
    description:
      "Estudio certificado con todas las licencias y permisos sanitarios requeridos.",
  },
]

const studioImages = [
  {
    src: "/images/studio-1.jpg",
    alt: "Interior del estudio de tatuajes",
    title: "Nuestro Espacio",
  },
  {
    src: "/images/studio-2.jpg",
    alt: "Equipamiento profesional",
    title: "Equipamiento",
  },
  {
    src: "/images/studio-3.jpg",
    alt: "Proceso de tatuaje",
    title: "En Accion",
  },
]

export default function EstudioPage() {
  return (
    <div className="min-h-screen px-8 py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Conoce Nuestro Espacio
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            El Estudio
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Un espacio disenado para la creatividad y el confort. Donde el arte
            cobra vida en un ambiente profesional y acogedor.
          </p>
        </div>

        {/* Studio Gallery */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {studioImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
            Por Que Elegirnos
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground"
              >
                <feature.icon className="mb-4 h-8 w-8 text-foreground" />
                <h3 className="mb-2 font-serif text-lg font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="rounded-lg border border-border bg-card p-8 md:p-12">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">
            Nuestro Proceso
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consulta",
                description: "Hablamos sobre tu idea y vision",
              },
              {
                step: "02",
                title: "Diseno",
                description: "Creamos un diseno personalizado",
              },
              {
                step: "03",
                title: "Sesion",
                description: "Realizamos el tatuaje con precision",
              },
              {
                step: "04",
                title: "Cuidado",
                description: "Te guiamos en el proceso de sanacion",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="mb-4 inline-block font-serif text-4xl font-bold text-muted-foreground/30">
                  {item.step}
                </span>
                <h3 className="mb-2 font-serif text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
