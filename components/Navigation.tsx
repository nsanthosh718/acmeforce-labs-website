'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-neon rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-lg">AcmeForce Labs</span>
        </a>

        <div className="hidden md:flex gap-10 items-center">
          <a href="#products" className="text-sm text-gray-400 hover:text-white transition">Products</a>
          <a href="/marketplace" className="text-sm text-gray-400 hover:text-white transition">Marketplace</a>
          <a href="#categories" className="text-sm text-gray-400 hover:text-white transition">Categories</a>
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition">About</a>
          <a href="#contact" className="px-5 py-2 bg-accent hover:bg-accent-dark text-white text-sm rounded-lg transition">
            Get Access
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface-light border-t border-white/5 px-6 py-4 space-y-3">
          <a href="#products" className="block text-sm text-gray-400 py-2">Products</a>
          <a href="/marketplace" className="block text-sm text-gray-400 py-2">Marketplace</a>
          <a href="#categories" className="block text-sm text-gray-400 py-2">Categories</a>
          <a href="#about" className="block text-sm text-gray-400 py-2">About</a>
          <a href="#contact" className="block text-sm text-accent py-2">Get Access</a>
        </div>
      )}
    </motion.nav>
  )
}
