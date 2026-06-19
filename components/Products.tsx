'use client'

import { motion } from 'framer-motion'

const products = [
  {
    name: 'QuantumKidz',
    tagline: 'Gamified Financial Literacy for Kids',
    description: 'AI-powered platform teaching kids money concepts through games, missions, and a virtual business simulator. Complete with parent dashboards and subscription management.',
    category: 'App',
    status: 'Live',
    statusColor: 'bg-neon/20 text-neon',
    icon: '⚡',
    tech: ['React', 'Firebase', 'React Native', 'Stripe', 'AI Chore Gen'],
    gradient: 'from-accent/20 to-neon-blue/20',
  },
  {
    name: 'Pranay',
    tagline: 'Personal Multi-Agent AI Assistant',
    description: 'An autonomous AI orchestration system with multi-agent architecture, LangGraph supervisor, persistent memory, tool integrations, and observability via Langfuse. Your personal intelligent assistant that reasons, plans, and acts.',
    category: 'Agent',
    status: 'Beta',
    statusColor: 'bg-neon-pink/20 text-neon-pink',
    icon: '🧠',
    tech: ['Python', 'LangGraph', 'Anthropic', 'FastAPI', 'Multi-Agent', 'Langfuse'],
    gradient: 'from-neon-pink/20 to-accent/20',
  },
  {
    name: 'PAMS',
    tagline: 'Parent Athlete Management System',
    description: 'Intelligent platform for managing youth athletes. Track development, schedules, performance metrics, and nutrition with AI-powered insights.',
    category: 'App',
    status: 'Live',
    statusColor: 'bg-neon/20 text-neon',
    icon: '🏆',
    tech: ['Python', 'Flask', 'Data Analytics', 'Mobile'],
    gradient: 'from-neon/20 to-neon-blue/20',
  },
  {
    name: 'Project-AN',
    tagline: 'AI Math & Reading Tutor',
    description: 'Adaptive learning platform using AI to personalize math and reading instruction for children. Real-time assessment and intelligent curriculum adjustments.',
    category: 'RAG',
    status: 'Coming Soon',
    statusColor: 'bg-yellow-500/20 text-yellow-400',
    icon: '📚',
    tech: ['RAG Pipeline', 'Adaptive AI', 'Progress Analytics', 'LLM Tutoring'],
    gradient: 'from-yellow-500/20 to-accent/20',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono uppercase tracking-wider">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">AI-Powered Solutions</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Each product is built with intelligent automation at its core — from adaptive learning to autonomous agents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group bg-surface-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all card-glow`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{product.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <p className="text-gray-500 text-sm">{product.tagline}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-lg font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-gray-500 font-mono uppercase">{product.category}</span>
                  <span className="text-accent text-sm hover:text-white transition cursor-pointer">
                    Learn more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
