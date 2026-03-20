import {
  Clock,
  Droplets,
  Sun,
  Hand,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Heart,
} from "lucide-react"

const phases = [
  {
    title: "Primeras 24 Horas",
    icon: Clock,
    steps: [
      "Deja el vendaje puesto por 2-4 horas",
      "Lava suavemente con agua tibia y jabon antibacterial",
      "Seca con palmaditas suaves usando una toalla limpia",
      "Aplica una capa fina de crema cicatrizante",
      "No vuelvas a cubrir el tatuaje",
    ],
  },
  {
    title: "Primera Semana",
    icon: Droplets,
    steps: [
      "Lava el tatuaje 2-3 veces al dia",
      "Aplica crema hidratante sin fragancia",
      "Usa ropa holgada que no roce el tatuaje",
      "Evita remojar el tatuaje (banos, piscinas, mar)",
      "Es normal que aparezca algo de costrita",
    ],
  },
  {
    title: "Semanas 2-4",
    icon: Sun,
    steps: [
      "Continua hidratando regularmente",
      "La piel puede picar - NO rasques",
      "Las capas superficiales se descamaran",
      "Evita la exposicion directa al sol",
      "El color se asentara gradualmente",
    ],
  },
  {
    title: "Cuidado a Largo Plazo",
    icon: Heart,
    steps: [
      "Usa protector solar SPF 50+ siempre",
      "Mantiene la piel bien hidratada",
      "Evita la exposicion prolongada al sol",
      "Los retoques son normales despues de sanar",
      "Consulta ante cualquier anomalia",
    ],
  },
]

const doList = [
  "Mantener el tatuaje limpio y seco",
  "Usar productos sin fragancia",
  "Dejar que el tatuaje respire",
  "Beber mucha agua",
  "Seguir una dieta balanceada",
  "Dormir bien para ayudar a la sanacion",
]

const dontList = [
  "Rascar o arrancar las costras",
  "Exponer al sol directo",
  "Sumergir en agua (piscinas, tinas, mar)",
  "Usar ropa ajustada sobre el tatuaje",
  "Aplicar alcohol o peroxido",
  "Hacer ejercicio intenso los primeros dias",
]

export default function CuidadosPage() {
  return (
    <div className="min-h-screen px-8 py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Guia Completa
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Cuidados del Tatuaje
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Un tatuaje bien cuidado durara toda la vida. Sigue estas instrucciones
            para asegurar una sanacion optima y mantener tu tatuaje vibrante.
          </p>
        </div>

        {/* Warning */}
        <div className="mb-12 flex items-start gap-4 rounded-lg border border-border bg-card p-6">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-foreground" />
          <div>
            <h3 className="font-medium text-foreground">Importante</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Estas son recomendaciones generales. Siempre sigue las instrucciones
              especificas que te de tu tatuador, ya que pueden variar segun el
              tamano, ubicacion y estilo de tu tatuaje.
            </p>
          </div>
        </div>

        {/* Phases */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <phase.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {phase.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {phase.steps.map((step, stepIndex) => (
                  <li
                    key={stepIndex}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Do's and Don'ts */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {/* Do's */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-foreground" />
              <h3 className="font-serif text-xl font-medium text-foreground">
                Que Hacer
              </h3>
            </div>
            <ul className="space-y-4">
              {doList.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <XCircle className="h-6 w-6 text-foreground" />
              <h3 className="font-serif text-xl font-medium text-foreground">
                Que NO Hacer
              </h3>
            </div>
            <ul className="space-y-4">
              {dontList.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <XCircle className="h-4 w-4 shrink-0 text-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Products */}
        <div className="rounded-lg border border-border bg-card p-8">
          <h2 className="mb-6 text-center font-serif text-2xl font-bold text-foreground">
            Productos Recomendados
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <Hand className="mx-auto mb-3 h-8 w-8 text-foreground" />
              <h4 className="font-medium text-foreground">Jabon</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Jabon antibacterial sin fragancia
              </p>
            </div>
            <div className="text-center">
              <Droplets className="mx-auto mb-3 h-8 w-8 text-foreground" />
              <h4 className="font-medium text-foreground">Hidratante</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Crema sin fragancia (Bepanthen, Aquaphor)
              </p>
            </div>
            <div className="text-center">
              <Sun className="mx-auto mb-3 h-8 w-8 text-foreground" />
              <h4 className="font-medium text-foreground">Protector Solar</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                SPF 50+ de amplio espectro
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Si tienes dudas sobre el cuidado de tu tatuaje o notas algo inusual,{" "}
            <a href="/contacto" className="text-foreground underline">
              contactanos
            </a>{" "}
            inmediatamente.
          </p>
        </div>
      </div>
    </div>
  )
}
