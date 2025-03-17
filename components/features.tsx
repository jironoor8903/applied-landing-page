"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, Zap, Shield, Clock, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Features() {
  const [activeTab, setActiveTab] = useState("automotive")

  return (
    <section id="learn-more" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#0038FF]/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full border border-[#0038FF]/30 bg-[#0038FF]/5 px-3 py-1 text-sm font-medium text-[#0038FF]">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Accelerate Your Autonomous Vehicle Development
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our comprehensive suite of tools and platforms helps you build, test, and deploy autonomous systems
              faster.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-[#0038FF] hover:shadow-lg">
            <div className="absolute right-4 top-4 rounded-full bg-[#0038FF]/10 p-2 text-[#0038FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ChevronRight className="h-4 w-4" />
            </div>
            <CardHeader className="pb-2">
              <div className="mb-2 rounded-full bg-[#0038FF]/10 p-2 w-fit">
                <Zap className="h-5 w-5 text-[#0038FF]" />
              </div>
              <CardTitle>AI-Powered Toolchain</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Comprehensive software tools for simulation, validation, and deployment of autonomous systems.
              </CardDescription>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                  <span>Advanced simulation environments</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                  <span>Real-time data processing</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                  <span>Seamless integration with existing systems</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-[#0038FF] hover:shadow-lg">
            <div className="absolute right-4 top-4 rounded-full bg-[#0038FF]/10 p-2 text-[#0038FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ChevronRight className="h-4 w-4" />
            </div>
            <CardHeader className="pb-2">
              <div className="mb-2 rounded-full bg-[#0038FF]/10 p-2 w-fit">
                <Shield className="h-5 w-5 text-[#0038FF]" />
              </div>
              <CardTitle>Vehicle Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Robust and flexible platform for developing and testing autonomous vehicle systems.
              </CardDescription>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                  <span>Modular architecture</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                  <span>Cross-platform compatibility</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                  <span>Scalable for different vehicle types</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-[#0038FF] hover:shadow-lg">
            <div className="absolute right-4 top-4 rounded-full bg-[#0038FF]/10 p-2 text-[#0038FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ChevronRight className="h-4 w-4" />
            </div>
            <CardHeader className="pb-2">
              <div className="mb-2 rounded-full bg-[#0038FF]/10 p-2 w-fit">
                <Clock className="h-5 w-5 text-[#0038FF]" />
              </div>
              <CardTitle>Faster Time to Market</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Reduce development cycles and accelerate your path to production with our integrated solutions.
              </CardDescription>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                  <span>Streamlined development workflow</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                  <span>Automated testing and validation</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                  <span>Rapid prototyping capabilities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold tracking-tighter md:text-3xl">Industry Applications</h3>
            <p className="mt-4 text-muted-foreground">
              Our solutions are tailored for various industries with specific autonomous vehicle needs.
            </p>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="automotive" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="automotive">Automotive</TabsTrigger>
                  <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
                  <TabsTrigger value="construction">Construction</TabsTrigger>
                </TabsList>
              </div>
              <div className="mt-8">
                <TabsContent value="automotive" className="mt-0">
                  <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="order-2 md:order-1">
                      <h4 className="text-xl font-bold">Automotive Solutions</h4>
                      <p className="mt-2 text-muted-foreground">
                        Advanced ADAS and autonomous driving solutions for passenger vehicles, trucks, and commercial
                        fleets.
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-[#0038FF]/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                          </div>
                          <div>
                            <h5 className="font-medium">Advanced Driver Assistance</h5>
                            <p className="text-sm text-muted-foreground">
                              Enhance safety with cutting-edge ADAS features
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-[#0038FF]/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                          </div>
                          <div>
                            <h5 className="font-medium">Full Self-Driving</h5>
                            <p className="text-sm text-muted-foreground">
                              Develop and test autonomous driving capabilities
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-[#0038FF]/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                          </div>
                          <div>
                            <h5 className="font-medium">Fleet Management</h5>
                            <p className="text-sm text-muted-foreground">
                              Optimize operations for commercial vehicle fleets
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="overflow-hidden rounded-lg border">
                        <Image
                          src="car.png"
                          alt="Automotive application"
                          width={600}
                          height={400}
                          className="w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="agriculture" className="mt-0">
                  <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="order-2 md:order-1">
                      <h4 className="text-xl font-bold">Agriculture Solutions</h4>
                      <p className="mt-2 text-muted-foreground">
                        Autonomous farming and precision agriculture solutions to optimize crop yields and reduce costs.
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-[#0038FF]/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                          </div>
                          <div>
                            <h5 className="font-medium">Autonomous Tractors</h5>
                            <p className="text-sm text-muted-foreground">
                              Self-driving farm equipment for efficient field operations
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-[#0038FF]/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                          </div>
                          <div>
                            <h5 className="font-medium">Precision Spraying</h5>
                            <p className="text-sm text-muted-foreground">
                              Targeted application of fertilizers and pesticides
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-[#0038FF]/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                          </div>
                          <div>
                            <h5 className="font-medium">Harvest Automation</h5>
                            <p className="text-sm text-muted-foreground">
                              Robotic systems for efficient crop harvesting
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="overflow-hidden rounded-lg border">
                        <Image
                          src="/placeholder.svg?height=400&width=600&text=Agricultural+Autonomy"
                          alt="Agriculture application"
                          width={600}
                          height={400}
                          className="w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="construction" className="mt-0">
                  <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="order-2 md:order-1">
                      <h4 className="text-xl font-bold">Construction Solutions</h4>
                      <p className="mt-2 text-muted-foreground">
                        Automated construction equipment and site management for increased safety and productivity.
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-[#0038FF]/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                          </div>
                          <div>
                            <h5 className="font-medium">Autonomous Excavation</h5>
                            <p className="text-sm text-muted-foreground">
                              Self-operating excavators for precise digging operations
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-[#0038FF]/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                          </div>
                          <div>
                            <h5 className="font-medium">Site Mapping</h5>
                            <p className="text-sm text-muted-foreground">
                              Automated surveying and real-time site monitoring
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="rounded-full bg-[#0038FF]/10 p-1 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-[#0038FF]" />
                          </div>
                          <div>
                            <h5 className="font-medium">Material Transport</h5>
                            <p className="text-sm text-muted-foreground">
                              Autonomous vehicles for efficient material movement
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="overflow-hidden rounded-lg border">
                        <Image
                          src="/placeholder.svg?height=400&width=600&text=Construction+Autonomy"
                          alt="Construction application"
                          width={600}
                          height={400}
                          className="w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

