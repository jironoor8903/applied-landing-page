import { ImageWithFallback } from "@/components/image-with-fallback"

interface AutonomousVehicleCardProps {
  title: string
  description: string
  imageSrc: string
  className?: string
}

export function AutonomousVehicleCard({ title, description, imageSrc, className }: AutonomousVehicleCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border bg-background shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      <div className="aspect-video overflow-hidden">
        <ImageWithFallback
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

