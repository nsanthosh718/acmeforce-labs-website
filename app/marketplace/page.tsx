'use client'

import { useState, useRef, MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

type Category = 'all' | 'sdlc' | 'salesforce' | 'healthcare' | 'architecture' | 'cross-domain'

interface FlowNode {
  label: string
}

interface AgentFlow {
  color: string
  borderColor: string
  dotColor: string
  glowRgba: string
  nodes: FlowNode[]
}

interface Product {
  name: string
  type: 'Agent' | 'RAG'
  category: Category
  description: string
  status: 'Coming Soon' | 'In Development' | 'Live'
  icon: string
  flow?: AgentFlow
}

// Flow data for the three SDLC agents
const agentFlows: Record<string, AgentFlow> = {
  'PR Review Agent': {
    color: 'text-accent',
    borderColor: 'border-accent/30',
    dotColor: 'bg-accent',
    glowRgba: 'rgba(108,99,255,0.15)',
    nodes: [
      { label: 'PR Opened' },
      { label: 'Webhook' },
      { label: 'Diff Analysis' },
      { label: 'Rules + ADR + Memory' },
      { label: 'LLM Review' },
      { label: 'Inline Comments + Fix PRs' },
    ],
  },
  'Architecture Decision RAG': {
    color: 'text-neon',
    borderColor: 'border-neon/30',
    dotColor: 'bg-neon',
    glowRgba: 'rgba(0,245,212,0.15)',
    nodes: [
      { label: 'ADRs / RFCs' },
      { label: 'Ingestion' },
      { label: 'Chunking + Embedding' },
      { label: 'Vector Store' },
      { label: 'Query' },
      { label: 'Contextual Answer' },
    ],
  },
  'Test Generation Agent': {
    color: 'text-neon-pink',
    borderColor: 'border-neon-pink/30',
    dotColor: 'bg-neon-pink',
    glowRgba: 'rgba(255,107,157,0.15)',
    nodes: [
      { label: 'Source Code' },
      { label: 'Analysis' },
      { label: 'ADR Context' },
      { label: 'LLM Generation' },
      { label: 'Syntax Validation' },
      { label: 'Coverage Gate → CI Report' },
    ],
  },
  'Lead Scoring Agent': {
    color: 'text-accent',
    borderColor: 'border-accent/30',
    dotColor: 'bg-accent',
    glowRgba: 'rgba(108,99,255,0.15)',
    nodes: [
      { label: 'Lead Ingested' },
      { label: 'Multi-Source Enrichment' },
      { label: 'Weighted Scoring' },
      { label: 'Tier Classification' },
      { label: 'Rep Routing' },
      { label: 'CRM Update' },
    ],
  },
  'Deal Coaching RAG': {
    color: 'text-neon',
    borderColor: 'border-neon/30',
    dotColor: 'bg-neon',
    glowRgba: 'rgba(0,245,212,0.15)',
    nodes: [
      { label: 'Call Transcripts' },
      { label: 'Segment Analysis' },
      { label: 'Pattern Detection' },
      { label: 'Top vs Avg Comparison' },
      { label: 'Coaching Suggestions' },
      { label: 'Rep Notification' },
    ],
  },
  'CPQ Assistant': {
    color: 'text-neon-blue',
    borderColor: 'border-neon-blue/30',
    dotColor: 'bg-neon-blue',
    glowRgba: 'rgba(76,201,240,0.15)',
    nodes: [
      { label: 'Pricing Question' },
      { label: 'Catalog Lookup' },
      { label: 'Rule Validation' },
      { label: 'Discount Calculation' },
      { label: 'Config Check' },
      { label: 'Quote Response' },
    ],
  },
  'Churn Prediction Agent': {
    color: 'text-neon-pink',
    borderColor: 'border-neon-pink/30',
    dotColor: 'bg-neon-pink',
    glowRgba: 'rgba(255,107,157,0.15)',
    nodes: [
      { label: 'Usage Signals' },
      { label: 'Support Tickets' },
      { label: 'Engagement Metrics' },
      { label: 'Risk Scoring' },
      { label: 'Tier Classification' },
      { label: 'Outreach Trigger' },
    ],
  },
  'RFP Response RAG': {
    color: 'text-accent',
    borderColor: 'border-accent/30',
    dotColor: 'bg-accent',
    glowRgba: 'rgba(108,99,255,0.15)',
    nodes: [
      { label: 'RFP Questions' },
      { label: 'Proposal Retrieval' },
      { label: 'Case Study Match' },
      { label: 'Product Doc Lookup' },
      { label: 'Draft Assembly' },
      { label: 'Proof Points + Response' },
    ],
  },
  'Cloud Cost Optimizer Agent': {
    color: 'text-neon',
    borderColor: 'border-neon/30',
    dotColor: 'bg-neon',
    glowRgba: 'rgba(0,245,212,0.15)',
    nodes: [
      { label: 'Cloud Usage Data' },
      { label: 'Resource Analysis' },
      { label: 'Idle Detection' },
      { label: 'Right-Sizing Calc' },
      { label: 'Terraform Generation' },
      { label: 'PR with Savings Report' },
    ],
  },
  'Migration Planning RAG': {
    color: 'text-accent',
    borderColor: 'border-accent/30',
    dotColor: 'bg-accent',
    glowRgba: 'rgba(108,99,255,0.15)',
    nodes: [
      { label: 'Legacy Codebase' },
      { label: 'Target Architecture' },
      { label: 'Dependency Mapping' },
      { label: 'Risk Assessment' },
      { label: 'Step-by-Step Plan' },
      { label: 'Migration Playbook' },
    ],
  },
  'API Design Agent': {
    color: 'text-neon-blue',
    borderColor: 'border-neon-blue/30',
    dotColor: 'bg-neon-blue',
    glowRgba: 'rgba(76,201,240,0.15)',
    nodes: [
      { label: 'OpenAPI Spec' },
      { label: 'Style Guide Lint' },
      { label: 'Violation Detection' },
      { label: 'Design Suggestions' },
      { label: 'SDK Generation' },
      { label: 'Doc Output' },
    ],
  },
  'Observability Agent': {
    color: 'text-neon-pink',
    borderColor: 'border-neon-pink/30',
    dotColor: 'bg-neon-pink',
    glowRgba: 'rgba(255,107,157,0.15)',
    nodes: [
      { label: 'Metrics + Logs + Traces' },
      { label: 'Anomaly Detection' },
      { label: 'Signal Correlation' },
      { label: 'LLM Explanation' },
      { label: 'Gap Analysis' },
      { label: 'Alert + Suggestion' },
    ],
  },
  'Compliance Checker RAG': {
    color: 'text-neon',
    borderColor: 'border-neon/30',
    dotColor: 'bg-neon',
    glowRgba: 'rgba(0,245,212,0.15)',
    nodes: [
      { label: 'Framework Requirements' },
      { label: 'Infra Code Parse' },
      { label: 'Evidence Mapping' },
      { label: 'Gap Detection' },
      { label: 'Compliance Report' },
      { label: 'Remediation Plan' },
    ],
  },
}

const products: Product[] = [
  { name: 'PR Review Agent', type: 'Agent', category: 'sdlc', description: 'Autonomous code reviewer — reads diffs, checks patterns, leaves inline comments, suggests fixes. Connects to GitHub/GitLab webhooks.', status: 'In Development', icon: '🔍' },
  { name: 'Incident Response Agent', type: 'Agent', category: 'sdlc', description: 'Monitors alerts (PagerDuty, CloudWatch), correlates logs, suggests root cause, drafts runbooks, and auto-remediates known patterns.', status: 'Coming Soon', icon: '🚨' },
  { name: 'Architecture Decision RAG', type: 'RAG', category: 'sdlc', description: 'Ingests your ADRs, RFCs, and codebase. Answers "why was this built this way?" and suggests patterns consistent with existing decisions.', status: 'In Development', icon: '🏗️' },
  { name: 'Test Generation Agent', type: 'Agent', category: 'sdlc', description: 'Reads source code + requirements, generates property-based and unit tests. Integrates into CI to maintain coverage targets.', status: 'In Development', icon: '🧪' },
  { name: 'Dependency Upgrade Agent', type: 'Agent', category: 'sdlc', description: 'Monitors CVEs and outdated deps, creates upgrade PRs with changelog summaries and risk assessment.', status: 'Coming Soon', icon: '📦' },
  { name: 'Sprint Planning RAG', type: 'RAG', category: 'sdlc', description: 'Ingests Jira/Linear history, estimates story points based on similar past tickets, flags scope creep patterns.', status: 'Coming Soon', icon: '📋' },
  { name: 'Lead Scoring Agent', type: 'Agent', category: 'salesforce', description: 'Enriches leads from multiple sources (LinkedIn, company data, email patterns), scores them, and auto-routes to the right rep.', status: 'In Development', icon: '🎯' },
  { name: 'Deal Coaching RAG', type: 'RAG', category: 'salesforce', description: 'Ingests call transcripts, emails, and CRM notes. Surfaces what top performers do differently and coaches reps in real-time.', status: 'In Development', icon: '🏆' },
  { name: 'CPQ Assistant', type: 'RAG', category: 'salesforce', description: 'Answers complex pricing/configuration questions by querying product catalog, discount rules, and past quotes.', status: 'In Development', icon: '💰' },
  { name: 'Churn Prediction Agent', type: 'Agent', category: 'salesforce', description: 'Monitors usage patterns, support tickets, and engagement signals. Triggers proactive outreach workflows before churn happens.', status: 'In Development', icon: '📉' },
  { name: 'RFP Response RAG', type: 'RAG', category: 'salesforce', description: 'Ingests past proposals, case studies, and product docs. Auto-drafts RFP responses with relevant proof points.', status: 'In Development', icon: '📝' },
  { name: 'Clinical Documentation Agent', type: 'Agent', category: 'healthcare', description: 'Listens to physician-patient conversations, generates structured SOAP notes, codes diagnoses (ICD-10), and drafts referral letters.', status: 'Coming Soon', icon: '🏥' },
  { name: 'Medical Literature RAG', type: 'RAG', category: 'healthcare', description: 'Ingests PubMed, UpToDate, and internal protocols. Answers clinical questions with cited evidence and guideline references.', status: 'Coming Soon', icon: '📚' },
  { name: 'Prior Authorization Agent', type: 'Agent', category: 'healthcare', description: 'Reads denial letters, matches patient records to payer criteria, drafts appeal letters with supporting evidence.', status: 'Coming Soon', icon: '📋' },
  { name: 'Patient Intake Agent', type: 'Agent', category: 'healthcare', description: 'Conversational agent that collects symptoms, history, and medications before appointments. Structures data for the EHR.', status: 'Coming Soon', icon: '🩺' },
  { name: 'Care Gap Identifier', type: 'RAG', category: 'healthcare', description: 'Queries patient records against preventive care guidelines (HEDIS measures) and generates outreach lists.', status: 'Coming Soon', icon: '🔎' },
  { name: 'Cloud Cost Optimizer Agent', type: 'Agent', category: 'architecture', description: 'Analyzes AWS/GCP usage, identifies waste (idle resources, over-provisioned instances), generates Terraform PRs to right-size.', status: 'In Development', icon: '☁️' },
  { name: 'Migration Planning RAG', type: 'RAG', category: 'architecture', description: 'Ingests legacy codebase + target architecture docs. Answers "how do I migrate X?" with step-by-step plans for your specific stack.', status: 'In Development', icon: '🚀' },
  { name: 'API Design Agent', type: 'Agent', category: 'architecture', description: 'Reviews OpenAPI specs against company style guide, suggests improvements, generates client SDKs and documentation.', status: 'In Development', icon: '🔌' },
  { name: 'Observability Agent', type: 'Agent', category: 'architecture', description: 'Correlates metrics, logs, and traces. Detects anomalies, explains them in plain language, and suggests instrumentation gaps.', status: 'In Development', icon: '📊' },
  { name: 'Compliance Checker RAG', type: 'RAG', category: 'architecture', description: 'Ingests SOC2/HIPAA/PCI requirements + your infrastructure code. Answers "are we compliant?" with specific evidence or gaps.', status: 'In Development', icon: '✅' },
  { name: 'Contract Review RAG', type: 'RAG', category: 'cross-domain', description: 'Ingests company templates, past negotiations, and legal playbook. Redlines incoming contracts and flags non-standard terms.', status: 'Coming Soon', icon: '📄' },
  { name: 'Onboarding Agent', type: 'Agent', category: 'cross-domain', description: 'Guides new hires through company knowledge — answers questions about processes, tools, people, and policies from internal docs.', status: 'Coming Soon', icon: '👋' },
  { name: 'Meeting Action Agent', type: 'Agent', category: 'cross-domain', description: 'Joins calls, transcribes, extracts action items, creates tickets, and follows up on overdue items.', status: 'Coming Soon', icon: '🎙️' },
  { name: 'Knowledge Base Curator', type: 'Agent', category: 'cross-domain', description: 'Monitors Slack/Teams for answers to repeated questions, auto-drafts FAQ articles, and keeps docs updated.', status: 'Coming Soon', icon: '🧠' },
]

const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'all', label: 'All', icon: '🌐' },
  { id: 'sdlc', label: 'SDLC & DevTools', icon: '⚙️' },
  { id: 'salesforce', label: 'Sales & CRM', icon: '💼' },
  { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
  { id: 'architecture', label: 'Architecture', icon: '🏗️' },
  { id: 'cross-domain', label: 'Cross-Domain', icon: '🔗' },
]


// ---------- Flow Modal ----------

function FlowModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const flow = agentFlows[product.name]
  if (!flow) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal content */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0, rotateX: 10 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        exit={{ scale: 0.85, opacity: 0, rotateX: -10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-surface-card/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden"
        style={{ boxShadow: `0 0 80px ${flow.glowRgba}, 0 30px 60px rgba(0,0,0,0.5)` }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition text-gray-400 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-4xl">{product.icon}</span>
          <div>
            <h2 className={`text-2xl font-bold ${flow.color}`}>{product.name}</h2>
            <p className="text-gray-400 text-sm">{product.description}</p>
          </div>
        </div>

        {/* Flow title */}
        <div className="flex items-center gap-2 mb-6">
          <div className={`w-2.5 h-2.5 rounded-full ${flow.dotColor} animate-pulse`} />
          <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">Processing Flow</span>
        </div>

        {/* Flow nodes */}
        <div className="flex items-center gap-0 overflow-x-auto pb-4">
          {flow.nodes.map((node, i) => (
            <div key={i} className="flex items-center shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`relative px-5 py-4 rounded-xl bg-surface/90 backdrop-blur-sm border ${flow.borderColor} text-center min-w-[110px] max-w-[150px] hover:scale-105 transition-transform`}
                style={{ boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 20px ${flow.glowRgba}` }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
                <span className="relative z-10 text-sm font-medium text-gray-200 leading-tight block">
                  {node.label}
                </span>
                <div className={`absolute -top-2 -left-2 w-5 h-5 rounded-full ${flow.dotColor} flex items-center justify-center shadow-lg`}>
                  <span className="text-[9px] font-bold text-white">{i + 1}</span>
                </div>
              </motion.div>

              {/* Connector */}
              {i < flow.nodes.length - 1 && (
                <div className="relative flex items-center min-w-[40px] mx-1">
                  <div className={`w-full h-[2px] ${flow.dotColor} opacity-30`} />
                  <motion.div
                    className={`absolute left-0 w-2.5 h-2.5 rounded-full ${flow.dotColor}`}
                    animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: 'linear' }}
                    style={{ boxShadow: `0 0 10px currentColor` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer hint */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              product.type === 'Agent' ? 'bg-accent/20 text-accent' : 'bg-neon/20 text-neon'
            }`}>
              {product.type}
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-neon-blue/20 text-neon-blue">
              {product.status}
            </span>
          </div>
          <span className="text-xs text-gray-500 font-mono">Click outside or ✕ to close</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ---------- Marketplace Card ----------

function MarketplaceCard({ product, onClick }: { product: Product; onClick?: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -3
    const rotateY = ((x - centerX) / centerX) * 3
    setTilt({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  const isInDevelopment = product.status === 'In Development'
  const hasFlow = product.name in agentFlows

  const categoryLabel: Record<string, { label: string; icon: string; color: string }> = {
    sdlc: { label: 'SDLC', icon: '⚙️', color: 'bg-purple-500/15 text-purple-300 border-purple-500/20' },
    salesforce: { label: 'Sales', icon: '💼', color: 'bg-blue-500/15 text-blue-300 border-blue-500/20' },
    healthcare: { label: 'Health', icon: '🏥', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20' },
    architecture: { label: 'Arch', icon: '🏗️', color: 'bg-orange-500/15 text-orange-300 border-orange-500/20' },
    'cross-domain': { label: 'Cross', icon: '🔗', color: 'bg-pink-500/15 text-pink-300 border-pink-500/20' },
  }
  const domain = categoryLabel[product.category]

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={hasFlow ? onClick : undefined}
      className={`relative preserve-3d bg-surface-card border rounded-xl p-6 transition-all card-glow group ${
        isInDevelopment ? 'holographic-border border-transparent' : 'border-white/5 hover:border-white/15'
      } ${hasFlow ? 'cursor-pointer' : ''}`}
      style={{
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      {/* Domain sticker */}
      {domain && (
        <div className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-mono rounded-md border ${domain.color}`}>
          {domain.icon} {domain.label}
        </div>
      )}
      <div className="flex items-start justify-between mb-4 mt-4">
        <span className="text-3xl">{product.icon}</span>
        <div className="flex gap-2">
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
            product.type === 'Agent' ? 'bg-accent/20 text-accent' : 'bg-neon/20 text-neon'
          }`}>
            {product.type}
          </span>
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
            isInDevelopment ? 'bg-neon-blue/20 text-neon-blue' : 'bg-yellow-500/20 text-yellow-400'
          }`}>
            {product.status}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-white transition">{product.name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">{product.description}</p>
      {hasFlow && (
        <div className="flex items-center gap-1.5 text-xs text-accent/80 group-hover:text-accent transition mt-auto">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          Click to view processing flow
        </div>
      )}
    </div>
  )
}

// ---------- Page ----------

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [typeFilter, setTypeFilter] = useState<'all' | 'Agent' | 'RAG'>('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filtered = products.filter((p) => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false
    if (typeFilter !== 'all' && p.type !== typeFilter) return false
    return true
  })

  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-6">
              <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
              {products.length} Solutions Available
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              AI <span className="gradient-text">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Production-ready AI agents and RAG systems for every domain. Deploy intelligent automation across your organization.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeCategory === cat.id
                      ? 'bg-accent text-white'
                      : 'bg-surface-card border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {(['all', 'Agent', 'RAG'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    typeFilter === type
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'bg-surface-card border border-white/5 text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {type === 'all' ? '🔄 All Types' : type === 'Agent' ? '🤖 Agents' : '🔍 RAG Systems'}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 mb-6 font-mono">
            Showing {filtered.length} of {products.length} solutions
          </p>

          {/* Products grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 perspective-1500">
            {filtered.map((product) => (
              <MarketplaceCard
                key={product.name}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Want early access or have a custom use case?</p>
            <a href="mailto:hello@acmeforcelabs.com" className="inline-block px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-medium transition glow">
              Request Access
            </a>
          </div>
        </div>
      </section>
      <Footer />

      {/* Flow diagram modal */}
      <AnimatePresence>
        {selectedProduct && selectedProduct.name in agentFlows && (
          <FlowModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </main>
  )
}
