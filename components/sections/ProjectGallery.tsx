"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0])

  if (!images || images.length === 0) return null

  return (
    <div className="mt-10 space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted">
        <Image
          src={activeImage}
          alt={title}
          fill
          className="object-cover transition-all duration-500"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(image)}
              className={cn(
                "relative aspect-video w-32 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 hover:opacity-80",
                activeImage === image ? "ring-2 ring-primary border-transparent" : "border-border"
              )}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
