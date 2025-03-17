import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Applied Intuition's platform has accelerated our autonomous vehicle development by at least 18 months. The simulation capabilities are unmatched in the industry.",
      author: "Sarah Johnson",
      title: "CTO, AutoDrive Technologies",
      avatar: "/placeholder.svg?height=60&width=60&text=SJ",
    },
    {
      quote:
        "The integration with our existing systems was seamless. We've seen a 40% reduction in development costs since implementing Applied Intuition's solutions.",
      author: "Michael Chen",
      title: "VP of Engineering, FarmBot Inc.",
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
    },
    {
      quote:
        "Their AI-powered toolchain has transformed how we validate our autonomous systems. We can now test edge cases that were previously impossible to simulate.",
      author: "David Rodriguez",
      title: "Director of Innovation, BuildTech",
      avatar: "/placeholder.svg?height=60&width=60&text=DR",
    },
  ]

}

