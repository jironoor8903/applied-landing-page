"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

type ImageWithFallbackProps = ImageProps & {
  fallback?: string
}

export function ImageWithFallback({
  src,
  alt,
  fallback = "/placeholder.svg?height=400&width=600&text=Applied+Intuition",
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  return <Image {...props} src={error ? fallback : src} alt={alt} onError={() => setError(true)} />
}

