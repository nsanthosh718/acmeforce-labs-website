'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-surface-light relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build with AI?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Whether you're looking to use our products, collaborate on AI solutions, or explore custom builds — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@acmeforcelabs.com" className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl text-lg font-medium transition glow">
              Get in Touch
            </a>
            <a href="#products" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-lg font-medium transition">
              View Products
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
