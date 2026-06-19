'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-pink text-sm font-mono uppercase tracking-wider">About</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              We ship AI products<br />
              <span className="text-gray-500">that solve real problems.</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                AcmeForce Labs is a product studio focused on building AI-native applications. We don't just add AI to existing tools — we design from the ground up with intelligence at the core.
              </p>
              <p>
                From teaching kids financial literacy through adaptive games, to building personal AI assistants that orchestrate your digital life — each product pushes the boundary of what's practical with modern AI.
              </p>
              <p>
                Our stack spans full-stack web (React, Next.js, Firebase), mobile (React Native), and AI infrastructure (LLM orchestration, RAG pipelines, multi-agent systems).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-surface-card border border-white/5 rounded-2xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <div className="text-sm text-gray-500">Active Products</div>
            </div>
            <div className="bg-surface-card border border-white/5 rounded-2xl p-6">
              <div className="text-3xl font-bold text-neon mb-2">3</div>
              <div className="text-sm text-gray-500">Platforms</div>
            </div>
            <div className="bg-surface-card border border-white/5 rounded-2xl p-6">
              <div className="text-3xl font-bold text-neon-pink mb-2">AI</div>
              <div className="text-sm text-gray-500">Native Design</div>
            </div>
            <div className="bg-surface-card border border-white/5 rounded-2xl p-6">
              <div className="text-3xl font-bold text-neon-blue mb-2">24/7</div>
              <div className="text-sm text-gray-500">Autonomous Agents</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
