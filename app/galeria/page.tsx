"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const styles = [
  { id: "todos", label: "Todos" },
  { id: "asian", label: "Asian" },
  { id: "blackout", label: "Blackout" },
  { id: "fineline", label: "Fine Line" },
  { id: "blackwork", label: "Blackwork" },
  { id: "colorful", label: "Colorful" },
]

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/asian-1.jpg",
    style: "asian",
    title: "Dragon Japones",
    description: "Tatuaje tradicional japones de dragon en brazo completo",
  },
  {
    id: 2,
    src: "/images/gallery/asian-2.jpg",
    style: "asian",
    title: "Koi Fish",
    description: "Pez koi con elementos de agua en estilo oriental",
  },
  {
    id: 3,
    src: "/images/gallery/blackout-1.jpg",
    style: "blackout",
    title: "Blackout Sleeve",
    description: "Manga completa en negro solido con diseno geometrico",
  },
  {
    id: 4,
    src: "/images/gallery/blackout-2.jpg",
    style: "blackout",
    title: "Blackout Leg",
    description: "Cobertura en negro con espacios negativos",
  },
  {
    id: 5,
    src: "/images/gallery/fineline-1.jpg",
    style: "fineline",
    title: "Flores Delicadas",
    description: "Diseno botanico minimalista en lineas finas",
  },
  {
    id: 6,
    src: "/images/gallery/fineline-2.jpg",
    style: "fineline",
    title: "Geometria Minimalista",
    description: "Patron abstracto con lineas precisas",
  },
  {
    id: 7,
    src: "/images/gallery/blackwork-1.jpg",
    style: "blackwork",
    title: "Geometric Blackwork",
    description: "Patrones geometricos en negro con dotwork",
  },
  {
    id: 8,
    src: "/images/gallery/blackwork-2.jpg",
    style: "blackwork",
    title: "Mandala",
    description: "Mandala intrincado en la espalda",
  },
  {
    id: 9,
    src: "/images/gallery/colorful-1.jpg",
    style: "colorful",
    title: "Rosa Neo-Tradicional",
    description: "Rosa vibrante en estilo neo-tradicional",
  },
  {
    id: 10,
    src: "/images/gallery/colorful-2.jpg",
    style: "colorful",
    title: "Colibri Acuarela",
    description: "Colibri con efecto de acuarela",
  },
]

export default function GaleriaPage() {
  const [activeStyle, setActiveStyle] = useState("todos")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    activeStyle === "todos"
      ? galleryItems
      : galleryItems.filter((item) => item.style === activeStyle)

  return (
    <div className="min-h-screen px-8 py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Nuestro Trabajo
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Galeria
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explora nuestra coleccion de trabajos. Cada tatuaje cuenta una historia unica.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {styles.map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveStyle(style.id)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                activeStyle === style.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              )}
            >
              {style.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <span className="mt-1 text-sm capitalize text-muted-foreground">
                  {item.style}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">
              No hay tatuajes en esta categoria todavia.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 text-foreground transition-colors hover:text-muted-foreground"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square max-h-[70vh] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-card p-6">
              <h3 className="font-serif text-xl font-medium text-foreground">
                {selectedImage.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {selectedImage.description}
              </p>
              <span className="mt-3 inline-block rounded-full border border-border px-3 py-1 text-xs capitalize text-muted-foreground">
                {selectedImage.style}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
