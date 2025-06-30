import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ArrowDown, Phone, Mail, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LuxuryLandscapingPage() {
  return (
    <div className="bg-stone-100 text-stone-900 flex flex-col overflow-x-hidden ">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-stone-200 ">
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

      <main className="pt-16 container mx-auto px-4 md:px-6">
        {/* Hero - Asymmetrical Layout */}
        <section className="relative py-20 lg:py-32">
          <div className="grid grid-cols-12 min-h-[90vh]">
            {/* Left Column - Text */}
            <div className="col-span-7 flex flex-col justify-center px-6 lg:px-12 py-20">
              <div className="max-w-2xl">
                <div className="text-xs font-medium tracking-widest text-stone-500 mb-8">LANDSCAPE ARCHITECTURE</div>
                <h1 className="text-7xl lg:text-8xl font-light leading-none mb-12">
                  WE SHAPE
                  <br />
                  <span className="italic font-serif">EARTH</span>
                </h1>
                <p className="text-xl leading-relaxed text-stone-600 mb-16 max-w-lg">
                  Transforming luxury estates through thoughtful design, sustainable practices, and uncompromising
                  craftsmanship.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
                  <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 text-sm font-medium">
                    VIEW PROJECTS
                  </Button>
                  <Button variant="outline" className="bg-transparent border-stone-300 px-8 py-3 text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    SCHEDULE CONSULTATION
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-stone-500">
                  <span>SCROLL TO EXPLORE</span>
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-span-5 relative">
              <Image
                src="/images/hero-landscape.jpg"
                alt="Luxury landscape design"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 text-xs font-medium">
                BEVERLY HILLS
                <br />
                ESTATE — 2024
              </div>
              {/* Floating CTA */}
              <div className="absolute bottom-8 right-8">
                <Button className="bg-stone-900/90 hover:bg-stone-900 text-white backdrop-blur-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  CALL NOW
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats with CTA */}
        <section className="py-20 border-t border-stone-200 bg-white">
          <div className="px-6 lg:px-12">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-8">
                <div className="grid grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-light mb-2">500+</div>
                    <div className="text-xs font-medium tracking-widest text-stone-500">PROJECTS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light mb-2">25</div>
                    <div className="text-xs font-medium tracking-widest text-stone-500">YEARS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light mb-2">50+</div>
                    <div className="text-xs font-medium tracking-widest text-stone-500">AWARDS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light mb-2">98%</div>
                    <div className="text-xs font-medium tracking-widest text-stone-500">SATISFACTION</div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 text-right">
                <div className="text-sm text-stone-600 mb-4">Ready to transform your estate?</div>
                <Button className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-3">START YOUR PROJECT</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work - Magazine Style */}
        <section id="work" className="py-32">
          <div className="px-6 lg:px-12">
            <div className="text-xs font-medium tracking-widest text-stone-500 mb-16">SELECTED WORK</div>

            {/* Project 1 - Full Width */}
            <div className="mb-32">
              <div className="grid grid-cols-12 gap-8 items-end mb-8">
                <div className="col-span-6">
                  <h2 className="text-5xl font-light">Hillside Sanctuary</h2>
                </div>
                <div className="col-span-4 text-right">
                  <div className="text-sm text-stone-600">Beverly Hills, CA</div>
                  <div className="text-xs text-stone-500">2024</div>
                </div>
                <div className="col-span-2 text-right">
                  <Button variant="outline" size="sm" className="bg-transparent text-xs">
                    VIEW DETAILS
                  </Button>
                </div>
              </div>
              <div className="relative h-[70vh] mb-8">
                <Image
                  src="/images/hillside-project.jpg"
                  alt="Hillside Sanctuary project"
                  fill
                  className="object-cover"
                />
                {/* Overlay CTA */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-stone-900 hover:bg-stone-100">
                    <Mail className="w-4 h-4 mr-2" />
                    REQUEST QUOTE
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6">
                  <p className="text-lg leading-relaxed text-stone-600">
                    A 12-acre estate transformation featuring terraced gardens, infinity water features, and native
                    plant restoration.
                  </p>
                </div>
                <div className="col-span-3">
                  <div className="text-xs font-medium tracking-widest text-stone-500 mb-4">SCOPE</div>
                  <ul className="text-sm space-y-1 text-stone-600">
                    <li>Master Planning</li>
                    <li>Garden Design</li>
                    <li>Water Features</li>
                    <li>Hardscaping</li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <div className="text-xs font-medium tracking-widest text-stone-500 mb-4">RECOGNITION</div>
                  <div className="text-sm text-stone-600 mb-4">
                    ASLA Honor Award
                    <br />
                    Architectural Digest
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent text-xs">
                    SIMILAR PROJECT QUOTE
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 - Split Layout */}
            <div className="grid grid-cols-12 gap-8 mb-32">
              <div className="col-span-6">
                <div className="relative h-[60vh] group">
                  <Image src="/images/modern-oasis.jpg" alt="Modern Oasis project" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-stone-900 hover:bg-stone-100">GET CONSULTATION</Button>
                  </div>
                </div>
              </div>
              <div className="col-span-6 flex flex-col justify-center pl-8">
                <div className="text-xs font-medium tracking-widest text-stone-500 mb-4">MALIBU, CA</div>
                <h3 className="text-4xl font-light mb-8">Modern Oasis</h3>
                <p className="text-lg leading-relaxed text-stone-600 mb-8">
                  Minimalist design meets Mediterranean climate in this coastal estate featuring drought-resistant
                  plantings and sculptural hardscaping.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="bg-transparent">
                    VIEW PROJECT
                  </Button>
                  <Button className="bg-stone-900 hover:bg-stone-800 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    DISCUSS PROJECT
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 3 - Offset Layout */}
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4 col-start-3 flex flex-col justify-center">
                <div className="text-xs font-medium tracking-widest text-stone-500 mb-4">PALO ALTO, CA</div>
                <h3 className="text-4xl font-light mb-8">Urban Retreat</h3>
                <p className="leading-relaxed text-stone-600 mb-8">
                  Transforming a compact city lot into a private sanctuary with vertical gardens and intimate gathering
                  spaces.
                </p>
                <Button className="bg-stone-900 hover:bg-stone-800 text-white self-start">
                  REQUEST SIMILAR DESIGN
                </Button>
              </div>
              <div className="col-span-6">
                <div className="relative h-[50vh] group">
                  <Image src="/images/urban-retreat.jpg" alt="Urban Retreat project" fill className="object-cover" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-stone-900 hover:bg-white backdrop-blur-sm">
                      <Calendar className="w-3 h-3 mr-2" />
                      BOOK VISIT
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Editorial Layout */}
        <section id="services" className="py-32 bg-white">
          <div className="px-6 lg:px-12">
            <div className="grid grid-cols-12 gap-8 mb-20">
              <div className="col-span-4">
                <div className="text-xs font-medium tracking-widest text-stone-500 mb-8">SERVICES</div>
                <h2 className="text-5xl font-light leading-tight">
                  Comprehensive
                  <br />
                  <span className="italic font-serif">Design</span>
                </h2>
              </div>
              <div className="col-span-6 col-start-7 flex flex-col justify-end">
                <p className="text-xl leading-relaxed text-stone-600 mb-8">
                  From initial concept to final installation, we provide end-to-end landscape architecture services for
                  discerning clients.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-stone-900 hover:bg-stone-800 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    CALL FOR QUOTE
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Mail className="w-4 h-4 mr-2" />
                    EMAIL INQUIRY
                  </Button>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-16">
              <div className="grid grid-cols-12 gap-8 py-8 border-t border-stone-200 group hover:bg-stone-50 transition-colors duration-300">
                <div className="col-span-2">
                  <div className="text-6xl font-light text-stone-300">01</div>
                </div>
                <div className="col-span-4">
                  <h3 className="text-2xl font-light mb-4">Master Planning</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Comprehensive site analysis and strategic design development for large-scale residential estates.
                  </p>
                </div>
                <div className="col-span-4">
                  <ul className="text-sm space-y-2 text-stone-600">
                    <li>• Site Analysis</li>
                    <li>• Conceptual Design</li>
                    <li>• Phasing Strategy</li>
                    <li>• Regulatory Approval</li>
                  </ul>
                </div>
                <div className="col-span-2 flex flex-col justify-center items-end space-y-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    GET QUOTE
                  </Button>
                  <ArrowRight className="w-6 h-6 text-stone-400" />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-8 py-8 border-t border-stone-200 group hover:bg-stone-50 transition-colors duration-300">
                <div className="col-span-2">
                  <div className="text-6xl font-light text-stone-300">02</div>
                </div>
                <div className="col-span-4">
                  <h3 className="text-2xl font-light mb-4">Garden Design</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Curated plant palettes and seasonal design strategies tailored to your climate and lifestyle.
                  </p>
                </div>
                <div className="col-span-4">
                  <ul className="text-sm space-y-2 text-stone-600">
                    <li>• Plant Selection</li>
                    <li>• Seasonal Planning</li>
                    <li>• Irrigation Design</li>
                    <li>• Maintenance Programs</li>
                  </ul>
                </div>
                <div className="col-span-2 flex flex-col justify-center items-end space-y-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    GET QUOTE
                  </Button>
                  <ArrowRight className="w-6 h-6 text-stone-400" />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-8 py-8 border-t border-stone-200 group hover:bg-stone-50 transition-colors duration-300">
                <div className="col-span-2">
                  <div className="text-6xl font-light text-stone-300">03</div>
                </div>
                <div className="col-span-4">
                  <h3 className="text-2xl font-light mb-4">Hardscaping</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Custom stonework, water features, and architectural elements that define outdoor spaces.
                  </p>
                </div>
                <div className="col-span-4">
                  <ul className="text-sm space-y-2 text-stone-600">
                    <li>• Natural Stone Work</li>
                    <li>• Water Features</li>
                    <li>• Outdoor Structures</li>
                    <li>• Lighting Design</li>
                  </ul>
                </div>
                <div className="col-span-2 flex flex-col justify-center items-end space-y-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    GET QUOTE
                  </Button>
                  <ArrowRight className="w-6 h-6 text-stone-400" />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-8 py-8 border-t border-stone-200 group hover:bg-stone-50 transition-colors duration-300">
                <div className="col-span-2">
                  <div className="text-6xl font-light text-stone-300">04</div>
                </div>
                <div className="col-span-4">
                  <h3 className="text-2xl font-light mb-4">Project Management</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Seamless coordination of all trades and suppliers to ensure timely, quality installation.
                  </p>
                </div>
                <div className="col-span-4">
                  <ul className="text-sm space-y-2 text-stone-600">
                    <li>• Contractor Coordination</li>
                    <li>• Quality Control</li>
                    <li>• Timeline Management</li>
                    <li>• Client Communication</li>
                  </ul>
                </div>
                <div className="col-span-2 flex flex-col justify-center items-end space-y-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    GET QUOTE
                  </Button>
                  <ArrowRight className="w-6 h-6 text-stone-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-stone-900 text-white">
          <div className="px-6 lg:px-12">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-8">
                <h2 className="text-4xl font-light mb-4">Ready to Begin Your Transformation?</h2>
                <p className="text-xl text-stone-300">Schedule a complimentary consultation with our design team.</p>
              </div>
              <div className="col-span-4 text-right space-y-4">
                <Button className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-3 w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  SCHEDULE CONSULTATION
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-3 w-full bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  CALL (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Studio - Split Screen */}
        <section id="studio" className="min-h-screen">
          <div className="grid grid-cols-12 h-screen">
            <div className="col-span-6 bg-stone-900 text-white flex flex-col justify-center px-12">
              <div className="max-w-lg">
                <div className="text-xs font-medium tracking-widest text-stone-400 mb-8">STUDIO</div>
                <h2 className="text-5xl font-light mb-8">
                  Design
                  <br />
                  <span className="italic font-serif">Philosophy</span>
                </h2>
                <p className="text-lg leading-relaxed text-stone-300 mb-12">
                  We believe in the power of landscape to transform not just spaces, but lives. Our approach combines
                  environmental stewardship with timeless design principles.
                </p>
                <div className="space-y-8 mb-12">
                  <div>
                    <div className="text-sm font-medium mb-2">Founded</div>
                    <div className="text-2xl font-light">1998</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Team</div>
                    <div className="text-2xl font-light">25 Professionals</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Location</div>
                    <div className="text-2xl font-light">Beverly Hills, CA</div>
                  </div>
                </div>
                <Button className="bg-white text-stone-900 hover:bg-stone-100">MEET THE TEAM</Button>
              </div>
            </div>
            <div className="col-span-6 relative">
              <Image src="/images/studio-team.jpg" alt="Studio team" fill className="object-cover" />
              <div className="absolute bottom-8 right-8">
                <Button className="bg-white/90 text-stone-900 hover:bg-white backdrop-blur-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  CONTACT STUDIO
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial - Large Quote */}
        <section className="py-32 bg-stone-50">
          <div className="px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-8xl font-serif text-stone-300 mb-8">"</div>
              <blockquote className="text-3xl font-light leading-relaxed mb-12">
                Sifter transformed our property into something we never imagined possible. Their attention to detail and
                understanding of our vision was extraordinary.
              </blockquote>
              <div className="text-sm font-medium tracking-widest text-stone-500 mb-8">
                SARAH MITCHELL — BEVERLY HILLS HOMEOWNER
              </div>
              <Button className="bg-stone-900 hover:bg-stone-800 text-white">READ MORE TESTIMONIALS</Button>
            </div>
          </div>
        </section>

        {/* Contact - Minimal */}
        <section id="contact" className="py-32">
          <div className="px-6 lg:px-12">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-6">
                <div className="text-xs font-medium tracking-widest text-stone-500 mb-8">CONTACT</div>
                <h2 className="text-5xl font-light mb-12">
                  Let's Create
                  <br />
                  <span className="italic font-serif">Together</span>
                </h2>
                <div className="space-y-8 mb-12">
                  <div>
                    <div className="text-sm font-medium mb-2">Phone</div>
                    <div className="text-xl">(555) 123-4567</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Email</div>
                    <div className="text-xl">hello@terrastudio.com</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Address</div>
                    <div className="text-xl">
                      9876 Wilshire Boulevard
                      <br />
                      Beverly Hills, CA 90210
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-stone-900 hover:bg-stone-800 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    CALL NOW
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    BOOK MEETING
                  </Button>
                </div>
              </div>
              <div className="col-span-6">
                <form className="space-y-8">
                  <div>
                    <Input
                      placeholder="Name"
                      className="border-0 border-b border-stone-300 rounded-none bg-transparent px-0 py-4 text-lg focus:border-stone-900"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Email"
                      type="email"
                      className="border-0 border-b border-stone-300 rounded-none bg-transparent px-0 py-4 text-lg focus:border-stone-900"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Phone"
                      className="border-0 border-b border-stone-300 rounded-none bg-transparent px-0 py-4 text-lg focus:border-stone-900"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Project Type"
                      className="border-0 border-b border-stone-300 rounded-none bg-transparent px-0 py-4 text-lg focus:border-stone-900"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your vision..."
                      rows={4}
                      className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-4 text-lg resize-none focus:outline-none focus:border-stone-900"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3">SEND INQUIRY</Button>
                    <Button variant="outline" className="bg-transparent px-8 py-3">
                      <Phone className="w-4 h-4 mr-2" />
                      CALL INSTEAD
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200 bg-white">
        <div className="px-6 lg:px-12 container mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-6">
              <div className="text-2xl font-light tracking-wider mb-4">SIFTER</div>
              <div className="text-sm text-stone-600">Transforming luxury estates since 1998</div>
            </div>
            <div className="col-span-6 text-right">
              <div className="flex justify-end space-x-4 mb-4">
                <Button className="bg-stone-900 hover:bg-stone-800 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </Button>
                <Button variant="outline" className="bg-transparent">
                  GET QUOTE
                </Button>
              </div>
              <div className="text-xs text-stone-500">© 2024 Sifter Studio. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
