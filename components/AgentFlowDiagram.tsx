'use client'

import { motion } from 'framer-motion'

interface FlowNode {
  label: string
}

interface AgentFlow {
  name: string
  color: string
  glowColor: string
  borderColor: string
  dotColor: string
  nodes: FlowNode[]
}

const flows: AgentFlow[] = [
  {
    name: 'PR Review Agent',
    color: 'text-accent',
    glowColor: 'shadow-accent/20',
    borderColor: 'border-accent/30',
    dotColor: 'bg-accent',
    nodes: [
      { label: 'PR Opened' },
      { label: 'Webhook' },
      { label: 'Diff Analysis' },
      { label: 'Rules + ADR + Memory' },
      { label: 'LLM Review' },
      { label: 'Inline Comments + Fix PRs' },
    ],
  },
  {
    name: 'Architecture Decision RAG',
    color: 'text-neon',
    glowColor: 'shadow-neon/20',
    borderColor: 'border-neon/30',
    dotColor: 'bg-neon',
    nodes: [
      { label: 'ADRs / RFCs' },
      { label: 'Ingestion' },
      { label: 'Chunking + Embedding' },
      { label: 'Vector Store' },
      { label: 'Query' },
      { label: 'Contextual Answer' },
    ],
  },
  {
    name: 'Test Generation Agent',
    color: 'text-neon-pink',
    glowColor: 'shadow-neon-pink/20',
    borderColor: 'border-neon-pink/30',
    dotColor: 'bg-neon-pink',
    nodes: [
      { label: 'Source Code' },
      { label: 'Analysis' },
      { label: 'ADR Context' },
      { label: 'LLM Generation' },
      { label: 'Syntax Validation' },
      { label: 'Coverage Gate → CI Report' },
    ],
  },
]

function FlowLine({ color, delay }: { color: string; delay: number }) {
  return (
    <div className="flex-1 relative flex items-center min-w-[32px]">
      {/* Static line */}
      <div className={`w-full h-[2px] ${color} opacity-30`} />
      {/* Animated dot traveling along the line */}
      <motion.div
        className={`absolute left-0 w-2 h-2 rounded-full ${color}`}
        animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2,
          delay: delay,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ boxShadow: `0 0 8px currentColor` }}
      />
    </div>
  )
}

function FlowNodeCard({
  node,
  index,
  flow,
  totalNodes,
}: {
  node: FlowNode
  index: number
  flow: AgentFlow
  totalNodes: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
      className={`
        relative px-4 py-3 rounded-xl
        bg-surface-card/90 backdrop-blur-sm
        border ${flow.borderColor}
        shadow-lg ${flow.glowColor}
        text-center min-w-[100px] max-w-[140px]
        hover:scale-105 transition-transform
      `}
      style={{
        boxShadow: `0 4px 20px rgba(0,0,0,0.3), 0 0 15px ${
          flow.dotColor === 'bg-accent'
            ? 'rgba(108,99,255,0.1)'
            : flow.dotColor === 'bg-neon'
            ? 'rgba(0,245,212,0.1)'
            : 'rgba(255,107,157,0.1)'
        }`,
      }}
    >
      {/* 3D raised effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
      <span className="relative z-10 text-xs font-medium text-gray-200 leading-tight block">
        {node.label}
      </span>
      {/* Node index indicator */}
      <div className={`absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full ${flow.dotColor} flex items-center justify-center`}>
        <span className="text-[8px] font-bold text-white">{index + 1}</span>
      </div>
    </motion.div>
  )
}

function AgentFlowRow({ flow, rowIndex }: { flow: AgentFlow; rowIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: rowIndex * 0.2, duration: 0.6 }}
      className="mb-12 last:mb-0"
    >
      {/* Flow title */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-3 h-3 rounded-full ${flow.dotColor} animate-pulse`} />
        <h3 className={`text-lg font-bold ${flow.color}`}>{flow.name}</h3>
      </div>

      {/* Flow nodes with connecting lines */}
      <div className="flex items-center gap-0 overflow-x-auto pb-4 scrollbar-thin">
        {flow.nodes.map((node, i) => (
          <div key={i} className="flex items-center shrink-0">
            <FlowNodeCard
              node={node}
              index={i}
              flow={flow}
              totalNodes={flow.nodes.length}
            />
            {i < flow.nodes.length - 1 && (
              <FlowLine color={flow.dotColor} delay={i * 0.3 + rowIndex * 0.5} />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function AgentFlowDiagram() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-6">
            <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            How They Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Agent <span className="gradient-text">Processing Flows</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each agent follows a sophisticated pipeline — from data ingestion to intelligent output. Here&apos;s the journey your code takes through each system.
          </p>
        </motion.div>

        {/* Flow diagrams */}
        <div className="bg-surface-card/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12">
          {flows.map((flow, i) => (
            <AgentFlowRow key={flow.name} flow={flow} rowIndex={i} />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span>PR Review Agent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neon" />
            <span>Architecture Decision RAG</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neon-pink" />
            <span>Test Generation Agent</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
