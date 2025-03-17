import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

export function CallToAction() {
  return (
    <section id="contact" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#0038FF]/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#0038FF]/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 rounded-2xl border bg-background p-6 shadow-lg md:grid-cols-2 md:p-10 lg:p-12">
            <div className="space-y-4">
              <div className="inline-block rounded-full border border-[#0038FF]/30 bg-[#0038FF]/5 px-3 py-1 text-sm font-medium text-[#0038FF]">
                Get Started
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Transform Your Autonomous Systems?
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Get in touch with our team to learn how Applied Intuition can accelerate your development.
              </p>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#0038FF]/10 p-1">
                    <Check className="h-4 w-4 text-[#0038FF]" />
                  </div>
                  <span className="text-sm">Personalized demo of our platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#0038FF]/10 p-1">
                    <Check className="h-4 w-4 text-[#0038FF]" />
                  </div>
                  <span className="text-sm">Custom solution tailored to your needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#0038FF]/10 p-1">
                    <Check className="h-4 w-4 text-[#0038FF]" />
                  </div>
                  <span className="text-sm">Expert consultation with our team</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#0038FF]/10 p-1">
                    <Check className="h-4 w-4 text-[#0038FF]" />
                  </div>
                  <span className="text-sm">Comprehensive onboarding support</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-medium">Request a Demo</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input id="company" placeholder="Acme Inc." />
                  </div>
                  <Button type="submit" className="w-full bg-[#0038FF] hover:bg-[#0038FF]/90">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="mt-4 text-xs text-muted-foreground">
                  By submitting, you agree to our{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0038FF]/10 text-[#0038FF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10H3"></path>
                  <path d="M21 6H3"></path>
                  <path d="M21 14H3"></path>
                  <path d="M21 18H3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Documentation</h3>
              <p className="mt-2 text-muted-foreground">
                Access comprehensive guides and API references for our platform.
              </p>
              <div className="mt-4">
                <Link href="#" className="inline-flex items-center text-sm font-medium text-[#0038FF]">
                  View Documentation
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0038FF]/10 text-[#0038FF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Support</h3>
              <p className="mt-2 text-muted-foreground">Get help from our expert support team available 24/7.</p>
              <div className="mt-4">
                <Link href="#" className="inline-flex items-center text-sm font-medium text-[#0038FF]">
                  Contact Support
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0038FF]/10 text-[#0038FF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Community</h3>
              <p className="mt-2 text-muted-foreground">Join our community of developers and engineers.</p>
              <div className="mt-4">
                <Link href="#" className="inline-flex items-center text-sm font-medium text-[#0038FF]">
                  Join Community
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

