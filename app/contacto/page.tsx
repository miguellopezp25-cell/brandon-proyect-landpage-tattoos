import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    label: "Direccion",
    value: "Av. Principal 123, Col. Centro",
    subvalue: "Ciudad, CP 12345",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+52 55 1234 5678",
    href: "tel:+525512345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@inkstudio.com",
    href: "mailto:contacto@inkstudio.com",
  },
]

const hours = [
  { day: "Lunes - Viernes", hours: "10:00 - 20:00" },
  { day: "Sabado", hours: "11:00 - 18:00" },
  { day: "Domingo", hours: "Cerrado" },
]

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/inkstudio",
    handle: "@inkstudio",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/",
    handle: "Paradise",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/525512345678",
    handle: "+52 55 1234 5678",
  },
]

export default function ContactoPage() {
  return (
    <div className="min-h-screen px-8 py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Hablemos
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Contacto
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Estamos listos para convertir tu idea en arte. Contactanos para
            agendar una consulta gratuita y discutir tu proximo tatuaje.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-6 font-serif text-xl font-medium text-foreground">
                Informacion de Contacto
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border">
                      <item.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground transition-colors hover:text-muted-foreground"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <>
                          <p className="font-medium text-foreground">{item.value}</p>
                          {item.subvalue && (
                            <p className="text-sm text-muted-foreground">
                              {item.subvalue}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-5 w-5 text-foreground" />
                <h2 className="font-serif text-xl font-medium text-foreground">
                  Horario de Atencion
                </h2>
              </div>
              <div className="space-y-3">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium text-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-6 font-serif text-xl font-medium text-foreground">
                Siguenos
              </h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:border-foreground hover:bg-accent"
                  >
                    <social.icon className="h-5 w-5 text-foreground" />
                    <div>
                      <p className="font-medium text-foreground">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button asChild size="lg" className="w-full">
              <Link
                href="https://wa.me/525512345678?text=Hola!%20Me%20gustaria%20agendar%20una%20cita"
                target="_blank"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar por WhatsApp
              </Link>
            </Button>
          </div>

          {/* Right Column - Map */}
          <div className="space-y-6">
            {/* Map */}
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661890562026!2d-99.16869508509427!3d19.427023086886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sZocalo%2C%20Centro%20Historico%2C%20Mexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1679012345678!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
                title="Ubicacion del estudio"
              />
            </div>

            {/* Map Info */}
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <MapPin className="mx-auto mb-3 h-8 w-8 text-foreground" />
              <h3 className="font-serif text-lg font-medium text-foreground">
                Visitanos
              </h3>
              <p className="mt-2 text-muted-foreground">
                Estamos ubicados en el corazon de la ciudad. Facil acceso por
                transporte publico y estacionamiento disponible.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link
                  href="https://maps.google.com/?q=19.427023,-99.166695"
                  target="_blank"
                >
                  Abrir en Google Maps
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-20 border-t border-border pt-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Paradise tattoos
              </h3>
              <p className="mt-4 max-w-md text-muted-foreground">
                Mas de 5 anos creando arte en la piel. Cada tatuaje cuenta una
                historia unica. Somos tu estudio de confianza.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 font-medium text-foreground">Enlaces</h4>
              <nav className="space-y-2">
                <Link
                  href="/galeria"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  Galeria
                </Link>
                <Link
                  href="/estudio"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  Estudio
                </Link>
                <Link
                  href="/cuidados"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  Cuidados
                </Link>
                <Link
                  href="/testimonios"
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  Testimonios
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 font-medium text-foreground">Contacto</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+52 55 1234 5678</p>
                <p>contacto@inkstudio.com</p>
                <div className="flex gap-4 pt-2">
                  <Link
                    href="https://instagram.com/inkstudio"
                    target="_blank"
                    className="text-foreground transition-colors hover:text-muted-foreground"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://facebook.com/inkstudio"
                    target="_blank"
                    className="text-foreground transition-colors hover:text-muted-foreground"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://wa.me/525512345678"
                    target="_blank"
                    className="text-foreground transition-colors hover:text-muted-foreground"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>
              Paradise Tattos. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
