import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TextCycler } from "@/components/text-cycler"
import { Features } from "@/components/features"
import { CallToAction } from "@/components/call-to-action"
import { Navbar } from "@/components/navbar"
import { Testimonials } from "@/components/testimonials"
import { TechSpecs } from "@/components/tech-specs"
import { FeaturedVehicles } from "@/components/featured-vehicles"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10 bg-[#f8f9ff]">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#0038FF]/5"></div>
            <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-[#0038FF]/5"></div>
            <div className="absolute -bottom-32 right-1/2 h-80 w-80 rounded-full bg-[#0038FF]/5"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-[#0038FF]/30 bg-[#0038FF]/5 px-3 py-1 text-sm font-medium text-[#0038FF]">
                    Next Generation Autonomy
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    AI-defined vehicles for{" "}
                    <TextCycler
                      texts={["automotive", "construction", "agriculture", "YOU"]}
                      className="text-[#0038FF]"
                    />
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Applied Intuition delivers the AI-powered ADAS/AD software toolchain, vehicle platform, and autonomy
                    stack to help customers shorten time to market, build high-quality systems, and create
                    next-generation consumer experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#0038FF] hover:bg-[#0038FF]/90">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-[#0038FF] text-[#0038FF] hover:bg-[#0038FF]/10">
                    <Link href="#learn-more">Watch Demo</Link>
                  </Button>
                </div>
                <div className="mt-4 flex items-center space-x-4 text-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                      >
                        {/* <Image
                          src={`/placeholder.svg?height=32&width=32&text=User${i}`}
                          alt={`User ${i}`}
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        /> */}
                      </div>
                    ))}
                  </div>
                  {/* <div className="text-muted-foreground">
                    <span className="font-medium">500+</span> companies trust Applied Intuition
                  </div> */}
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#0038FF]/10 blur-3xl"></div>
                <div className="relative z-10 overflow-hidden rounded-2xl border bg-background/50 p-2 shadow-xl backdrop-blur-sm">
                  <Image
                    src="nicepic.png"
                    alt="Autonomous vehicle visualization"
                    width={800}
                    height={600}
                    className="rounded-xl object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white/90 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Autonomous Navigation</h3>
                        <p className="text-sm text-muted-foreground">Real-time path planning and obstacle avoidance</p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0038FF]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        {/* <section className="w-full border-y bg-muted/30 py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Trusted by industry leaders</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src={`/placeholder.svg?height=40&width=120&text=Partner+${i}`}
                      alt={`Partner logo ${i}`}
                      width={120}
                      height={40}
                      className="h-8 w-auto grayscale transition-all duration-200 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Features Section */}
        <Features />

        {/* Featured Vehicles */}
        <FeaturedVehicles />

        {/* Tech Specs Section */}
        <TechSpecs />

        {/* Testimonials */}
        <Testimonials />

        {/* Call to Action */}
        <CallToAction />
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">Applied Intuition</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Accelerating the development of autonomous systems through advanced simulation and software tools.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Products</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Simulation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Validation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Vehicle Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Autonomy Stack
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-muted-foreground md:text-left">
                © {new Date().getFullYear()} Applied Intuition. All rights reserved.
              </p>
              <nav className="flex gap-4 sm:gap-6">
                <Link className="text-sm text-muted-foreground hover:text-foreground" href="#">
                  Terms
                </Link>
                <Link className="text-sm text-muted-foreground hover:text-foreground" href="#">
                  Privacy
                </Link>
                <Link className="text-sm text-muted-foreground hover:text-foreground" href="#">
                  Cookies
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

