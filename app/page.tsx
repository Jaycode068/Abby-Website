'use client'

import { ChevronRight, Droplet, Shield, CheckCircle, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground tracking-tight">ABBY</div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#why" className="text-sm text-muted-foreground hover:text-foreground transition">Why Abby</Link>
            <Link href="#quality" className="text-sm text-muted-foreground hover:text-foreground transition">Quality</Link>
            <Link href="#distributors" className="text-sm text-muted-foreground hover:text-foreground transition">Distributors</Link>
          </div>
          <Link href="/contact">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">Contact</Button>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-block">
              <span className="text-accent text-sm font-semibold tracking-widest">PREMIUM TABLE WATER</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              The Water You Proudly Serve
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
              Premium table water crafted for homes, offices, schools, and hospitality spaces. Where purity meets elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto bg-transparent">
                Become a Distributor
              </Button>
            </div>
          </div>

          {/* Right: Bottle Image */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full blur-3xl"></div>
              <img 
                src="/images/hhome1.png" 
                alt="Abby Table Water Premium Bottle" 
                className="relative z-10 h-80 lg:h-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Not Just Drinking Water. Table Water.
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            <p>
              Abby Table Water was created with one simple belief — water should not just be consumed, it should be <span className="text-foreground font-semibold">served</span>.
            </p>
            <p>
              From family dining tables to corporate boardrooms, Abby represents purity, elegance, and trust in every bottle.
            </p>
            <p className="pt-4 text-primary font-semibold italic">
              This is not street water. This is Table Water.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ABBY */}
      <section id="why" className="py-20 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Why Choose Abby Table Water</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-background p-8 rounded-lg border border-border/30">
              <Shield className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Premium Quality</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Advanced purification systems ensuring the highest hygiene standards for every bottle.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-background p-8 rounded-lg border border-border/30">
              <Droplet className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Crystal Clear Taste</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pure, refreshing, neutral taste — no smell, no after-feel, just pure hydration.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-background p-8 rounded-lg border border-border/30">
              <CheckCircle className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">NAFDAC Certified</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fully approved and quality controlled for safety and compliance with standards.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-background p-8 rounded-lg border border-border/30">
              <Users className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Hospitality Ready</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Designed specifically for serving guests, clients, and customers with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Perfect For Every Space</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Homes & Families', image: '/images/home4.png' },
              { title: 'Offices & Corporate', image: '/images/hhome5.png' },
              { title: 'Schools & Institutions', image: '/images/home6.png' },
              { title: 'Restaurants & Hotels', image: '/images/home2.png' },
              { title: 'Events & Conferences', image: '/images/hhome5.png' },
              { title: 'Retail & Supermarkets', image: '/images/home9.png' },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg h-64">
                <img 
                  src={item.image || "/placeholder.svg"} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition flex items-end p-6">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              Anywhere quality matters, Abby belongs.
            </p>
          </div>
        </div>
      </section>

      {/* QUALITY PROCESS */}
      <section id="quality" className="py-20 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-4">Our Purification Process</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Every drop of Abby Table Water passes through strict quality checks to ensure it is safe for children and adults.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { num: '1', title: 'Multi-stage Filtration' },
              { num: '2', title: 'Reverse Osmosis' },
              { num: '3', title: 'UV Sterilization' },
              { num: '4', title: 'Ozone Treatment' },
              { num: '5', title: 'Automated Sealing' },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-accent">{step.num}</span>
                </div>
                <p className="text-sm font-medium text-foreground">{step.title}</p>
              </div>
            ))}
          </div>

          {/* Process Image */}
          <div className="mt-16">
            <img 
              src="/images/home8.png"
              alt="Abby water production facility with bottles on manufacturing line"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* EMOTIONAL BRAND SECTION */}
      <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-balance">
            More Than Water. A Standard.
          </h2>
          <div className="space-y-6 text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            <p>
              Serving Abby is not just about hydration.
            </p>
            <p>
              It is about <span className="text-accent font-semibold">care</span>. It is about <span className="text-accent font-semibold">class</span>. It is about <span className="text-accent font-semibold">trust</span>.
            </p>
            <p className="text-2xl font-semibold pt-6">
              When you serve Abby, you serve confidence.
            </p>
          </div>
        </div>

        {/* Hospitality Image */}
        <div className="mt-16 max-w-5xl mx-auto">
          <img 
            src="/images/home3.png"
            alt="Premium service: Waiter serving Abby water at fine dining establishment"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* DISTRIBUTOR CTA */}
      <section id="distributors" className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/50 rounded-xl p-12 border border-border/30 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Become an Abby Partner</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We are building a strong distribution network and inviting partners to grow with us across cities, schools, offices, and retail outlets. Join us in bringing premium table water to every space.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Become a Distributor
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-balance">
            Ready to Experience Premium Water?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
              Order Abby Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary/95 text-gray-300 py-12 px-6 border-t border-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Abby</h3>
              <p className="text-sm text-gray-400">
                The Water You Proudly Serve
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">About Abby</Link></li>
                <li><Link href="#" className="hover:text-white transition">Products</Link></li>
                <li><Link href="#" className="hover:text-white transition">Quality</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Channels</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Distributors</Link></li>
                <li><Link href="#" className="hover:text-white transition">Retail</Link></li>
                <li><Link href="#" className="hover:text-white transition">Bulk Orders</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition">Support</Link></li>
                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-accent/20 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Abby Table Water. All rights reserved. | <Link href="#" className="hover:text-white">Privacy</Link> | <Link href="#" className="hover:text-white">Terms</Link></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
