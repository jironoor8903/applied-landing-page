"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "@/components/logo"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-[#0038FF] text-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Applied Intuition</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link className="text-sm font-medium hover:text-white/80" href="#">
            Products
          </Link>
          <Link className="text-sm font-medium hover:text-white/80" href="#">
            Solutions
          </Link>
          <Link className="text-sm font-medium hover:text-white/80" href="#">
            Resources
          </Link>
          <Link className="text-sm font-medium hover:text-white/80" href="#">
            About
          </Link>
        </nav>
        <div className="ml-auto md:ml-4 flex gap-2">
          <Button className="hidden md:flex bg-white text-[#0038FF] hover:bg-white/90">Contact Sales</Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden border-white text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex items-center gap-2 mt-4">
                <Logo className="h-6 w-6" />
                <span className="text-lg font-bold">Applied Intuition</span>
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline">Sign In</Button>
                  <Button className="bg-[#0038FF] text-white hover:bg-[#0038FF]/90">Contact Sales</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

