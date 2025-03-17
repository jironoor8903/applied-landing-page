"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TextCyclerProps {
  texts: string[]
  className?: string
  interval?: number
}

export function TextCycler({ texts, className, interval = 2000 }: TextCyclerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const fadeTimer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsVisible(true)
      }, 500) // Half a second for fade out
    }, interval)

    return () => clearInterval(fadeTimer)
  }, [texts, interval])

  return (
    <span
      className={cn("inline-block transition-opacity duration-500", isVisible ? "opacity-100" : "opacity-0", className)}
    >
      {texts[currentIndex]}
    </span>
  )
}

