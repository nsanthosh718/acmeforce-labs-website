'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import AgentShowcase from '@/components/AgentShowcase'
// AgentFlowDiagram is now integrated into the marketplace card modals
import Categories from '@/components/Categories'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Products />
      <AgentShowcase />
      {/* Flow diagrams are now accessed by clicking agent cards in the marketplace */}
      <Categories />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
