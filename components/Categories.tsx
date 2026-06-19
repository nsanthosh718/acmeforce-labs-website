'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    name: 'AI Apps',
    icon: '📱',
    description: 'Full-stack applications with embedded AI — from personalized learning to intelligent management systems.',
    count: 2,
    color: 'border-accent/30 hover:border-accent',
  },
  {
    name: 'Autonomous Agents',
    icon: '🤖',
    description: 'Multi-agent systems that reason, plan, and act. Self-improving assistants with memory and tool use.',
    count: 1,
    color: 'border-neon-pink/30 hover:border-neon-pink',
  },
  {
    name: 'RAG Systems',
    icon: '🔍',
    description: 'Retrieval-augmented generation pipelines for domain-specific knowledge, adaptive tutoring, and Q&A.',
    count: 1,
    color: 'border-neon/30 hover:border-neon',
  },
  {
    name: 'Automation',
    icon: '⚙️',
    description: 'AI-powered workflow automation — content generation, scheduling, data pipelines, and orchestration.',
    count: 1,
    color: 'border-neon-blue/30 hover:border-neon-blue',
  },
]

export default function Categories() {
  return (
    <section id="categories" className="py-32 bg-surface-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon text-sm font-mono uppercase tracking-wider">Categories</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">What We Build</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every solution combines cutting-edge AI with practical product design.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-surface-card border ${cat.color} rounded-2xl p-6 transition-all cursor-pointer`}
            >
              <span className="text-4xl mb-4 block">{cat.icon}</span>
              <h3 className="text-lg font-bold mb-2">{cat.name}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{cat.description}</p>
              <span className="text-xs text-gray-600 font-mono">{cat.count} {cat.count === 1 ? 'product' : 'products'}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
