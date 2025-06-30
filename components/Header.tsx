import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-stone-200">
      <div className="flex h-16 items-center justify-between px-6 lg:px-12 container mx-auto">
        <div className="text-2xl font-light tracking-wider">SIFTER</div>
        <nav className="hidden md:flex items-center space-x-12 text-sm font-medium">
          <Link href="#work" className="hover:text-stone-600 transition-colors">
            WORK
          </Link>
          <Link href="#services" className="hover:text-stone-600 transition-colors">
            SERVICES
          </Link>
          <Link href="#studio" className="hover:text-stone-600 transition-colors">
            STUDIO
          </Link>
          <Link href="#contact" className="hover:text-stone-600 transition-colors">
            CONTACT
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="text-xs font-medium bg-transparent">
            <Phone className="w-3 h-3 mr-2" />
            (555) 123-4567
          </Button>
          <Button size="sm" className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium">
            GET QUOTE
          </Button>
        </div>
      </div>
    </header>
  )
}