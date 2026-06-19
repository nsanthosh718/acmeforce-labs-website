'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-8">
            <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
            AI-Powered Solutions Marketplace
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Build with{' '}
            <span className="gradient-text">Intelligent</span>
            <br />
            Applications
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Production-ready AI apps, autonomous agents, and RAG systems.
            From concept to deployment — built at AcmeForce Labs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl text-lg font-medium transition glow">
              Explore Products
            </a>
            <a href="#about" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-lg font-medium transition">
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div>
            <div className="text-3xl font-bold text-white">4+</div>
            <div className="text-sm text-gray-500">AI Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-sm text-gray-500">Platforms</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">∞</div>
            <div className="text-sm text-gray-500">Possibilities</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
