'use client'

import { motion } from 'framer-motion'
import { useState, useRef, MouseEvent } from 'react'

interface Agent {
  name: string
  tagline: string
  description: string
  icon: string
  status: string
  color: string
  glowColor: string
  features: string[]
}

const agents: Agent[] = [
  {
    name: 'PR Review Agent',
    tagline: 'Autonomous Code Reviewer',
    description: 'Reads diffs, checks patterns, leaves inline comments, and suggests fixes. Connects to GitHub/GitLab webhooks for seamless integration.',
    icon: '🔍',
    status: 'In Development',
    color: 'from-accent to-neon-blue',
    glowColor: 'rgba(108, 99, 255, 0.4)',
    features: ['Diff Analysis', 'Pattern Matching', 'Inline Comments', 'Auto-Fix PRs'],
  },
  {
    name: 'Architecture Decision RAG',
    tagline: 'Architectural Memory Engine',
    description: 'Ingests ADRs, RFCs, and your codebase. Answers "why was this built this way?" and suggests patterns consistent with existing decisions.',
    icon: '🏗️',
    status: 'In Development',
    color: 'from-neon to-neon-blue',
    glowColor: 'rgba(0, 245, 212, 0.4)',
    features: ['ADR Ingestion', 'Semantic Search', 'Pattern Suggestions', 'Context Answers'],
  },
  {
    name: 'Test Generation Agent',
    tagline: 'Intelligent Test Synthesizer',
    description: 'Reads source code and requirements, generates property-based and unit tests. Integrates into CI to maintain coverage targets.',
    icon: '🧪',
    status: 'In Development',
    color: 'from-neon-pink to-accent',
    glowColor: 'rgba(255, 107, 157, 0.4)',
    features: ['Code Analysis', 'Property Tests', 'Unit Tests', 'CI Integration'],
  },
]

function AgentCard({ agent, index }: { agent: Agent; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    setTilt({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: 'easeOut' }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative card-3d holographic-border rounded-2xl cursor-pointer"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${isHovered ? 'translateZ(20px)' : 'translateZ(0px)'}`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* Glassmorphism background */}
        <div className="relative bg-surface-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden">
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rounded-2xl`} />

          {/* Floating particles */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-neon/40 rounded-full float-orb" />
          <div className="absolute top-12 right-10 w-1.5 h-1.5 bg-accent/40 rounded-full float-orb-delayed" />
          <div className="absolute bottom-8 left-6 w-1 h-1 bg-neon-pink/40 rounded-full float-orb-slow" />

          {/* Content */}
          <div className="relative z-10">
            {/* Header with icon and status */}
            <div className="flex items-start justify-between mb-6">
              <div className="relative">
                <span className="text-5xl block" style={{ transform: 'translateZ(30px)' }}>
                  {agent.icon}
                </span>
                {/* Glow ring behind icon */}
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-40"
                  style={{ background: agent.glowColor }}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                <span className="text-xs font-mono text-neon/80">{agent.status}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-1">{agent.name}</h3>
            <p className={`text-sm font-mono bg-gradient-to-r ${agent.color} bg-clip-text text-transparent mb-4`}>
              {agent.tagline}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {agent.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {agent.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-lg font-mono backdrop-blur-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function AgentShowcase() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl float-orb" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon/8 rounded-full blur-3xl float-orb-delayed" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-neon-pink/5 rounded-full blur-3xl float-orb-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            SDLC Intelligence Suite
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Autonomous <span className="gradient-text">SDLC Agents</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three AI-powered agents that plug into your software development lifecycle — reviewing code, maintaining architectural knowledge, and generating tests autonomously.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((agent, i) => (
            <AgentCard key={agent.name} agent={agent} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
