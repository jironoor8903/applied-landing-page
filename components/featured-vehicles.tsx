import { AutonomousVehicleCard } from "@/components/autonomous-vehicle-card"

export function FeaturedVehicles() {
  const vehicles = [
    {
      title: "Autonomous Passenger Vehicle",
      description: "Advanced self-driving technology for urban environments with enhanced safety features.",
      imageSrc: "/carfeat.png",
    },
    {
      title: "Agricultural Harvester",
      description: "AI-powered harvesting equipment that maximizes crop yield and reduces operational costs.",
      imageSrc: "/agriculture.png",
    },
    {
      title: "Construction Excavator",
      description: "Precision excavation system with real-time terrain mapping and obstacle avoidance.",
      imageSrc: "/images.jpeg",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full border border-[#0038FF]/30 bg-[#0038FF]/5 px-3 py-1 text-sm font-medium text-[#0038FF]">
              Featured Vehicles
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Autonomous Solutions in Action</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Explore our cutting-edge autonomous vehicle platforms designed for various industries.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle, index) => (
            <AutonomousVehicleCard
              key={index}
              title={vehicle.title}
              description={vehicle.description}
              imageSrc={vehicle.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

