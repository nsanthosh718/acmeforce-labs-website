'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

type Category = 'all' | 'sdlc' | 'salesforce' | 'healthcare' | 'architecture' | 'cross-domain'

interface Product {
  name: string
  type: 'Agent' | 'RAG'
  category: Category
  description: string
  status: 'Coming Soon' | 'In Development' | 'Live'
  icon: string
}

const products: Product[] = [
  // SDLC
  { name: 'PR Review Agent', type: 'Agent', category: 'sdlc', description: 'Autonomous code reviewer — reads diffs, checks patterns, leaves inline comments, suggests fixes. Connects to GitHub/GitLab webhooks.', status: 'Coming Soon', icon: '🔍' },
  { name: 'Incident Response Agent', type: 'Agent', category: 'sdlc', description: 'Monitors alerts (PagerDuty, CloudWatch), correlates logs, suggests root cause, drafts runbooks, and auto-remediates known patterns.', status: 'Coming Soon', icon: '🚨' },
  { name: 'Architecture Decision RAG', type: 'RAG', category: 'sdlc', description: 'Ingests your ADRs, RFCs, and codebase. Answers "why was this built this way?" and suggests patterns consistent with existing decisions.', status: 'Coming Soon', icon: '🏗️' },
  { name: 'Test Generation Agent', type: 'Agent', category: 'sdlc', description: 'Reads source code + requirements, generates property-based and unit tests. Integrates into CI to maintain coverage targets.', status: 'Coming Soon', icon: '🧪' },
  { name: 'Dependency Upgrade Agent', type: 'Agent', category: 'sdlc', description: 'Monitors CVEs and outdated deps, creates upgrade PRs with changelog summaries and risk assessment.', status: 'Coming Soon', icon: '📦' },
  { name: 'Sprint Planning RAG', type: 'RAG', category: 'sdlc', description: 'Ingests Jira/Linear history, estimates story points based on similar past tickets, flags scope creep patterns.', status: 'Coming Soon', icon: '📋' },
  // Salesforce / CRM
  { name: 'Lead Scoring Agent', type: 'Agent', category: 'salesforce', description: 'Enriches leads from multiple sources (LinkedIn, company data, email patterns), scores them, and auto-routes to the right rep.', status: 'Coming Soon', icon: '🎯' },
  { name: 'Deal Coaching RAG', type: 'RAG', category: 'salesforce', description: 'Ingests call transcripts, emails, and CRM notes. Surfaces what top performers do differently and coaches reps in real-time.', status: 'Coming Soon', icon: '🏆' },
  { name: 'CPQ Assistant', type: 'RAG', category: 'salesforce', description: 'Answers complex pricing/configuration questions by querying product catalog, discount rules, and past quotes.', status: 'Coming Soon', icon: '💰' },
  { name: 'Churn Prediction Agent', type: 'Agent', category: 'salesforce', description: 'Monitors usage patterns, support tickets, and engagement signals. Triggers proactive outreach workflows before churn happens.', status: 'Coming Soon', icon: '📉' },
  { name: 'RFP Response RAG', type: 'RAG', category: 'salesforce', description: 'Ingests past proposals, case studies, and product docs. Auto-drafts RFP responses with relevant proof points.', status: 'Coming Soon', icon: '📝' },
  // Healthcare
  { name: 'Clinical Documentation Agent', type: 'Agent', category: 'healthcare', description: 'Listens to physician-patient conversations, generates structured SOAP notes, codes diagnoses (ICD-10), and drafts referral letters.', status: 'Coming Soon', icon: '🏥' },
  { name: 'Medical Literature RAG', type: 'RAG', category: 'healthcare', description: 'Ingests PubMed, UpToDate, and internal protocols. Answers clinical questions with cited evidence and guideline references.', status: 'Coming Soon', icon: '📚' },
  { name: 'Prior Authorization Agent', type: 'Agent', category: 'healthcare', description: 'Reads denial letters, matches patient records to payer criteria, drafts appeal letters with supporting evidence.', status: 'Coming Soon', icon: '📋' },
  { name: 'Patient Intake Agent', type: 'Agent', category: 'healthcare', description: 'Conversational agent that collects symptoms, history, and medications before appointments. Structures data for the EHR.', status: 'Coming Soon', icon: '🩺' },
  { name: 'Care Gap Identifier', type: 'RAG', category: 'healthcare', description: 'Queries patient records against preventive care guidelines (HEDIS measures) and generates outreach lists.', status: 'Coming Soon', icon: '🔎' },
  // Software Architecture
  { name: 'Cloud Cost Optimizer Agent', type: 'Agent', category: 'architecture', description: 'Analyzes AWS/GCP usage, identifies waste (idle resources, over-provisioned instances), generates Terraform PRs to right-size.', status: 'Coming Soon', icon: '☁️' },
  { name: 'Migration Planning RAG', type: 'RAG', category: 'architecture', description: 'Ingests legacy codebase + target architecture docs. Answers "how do I migrate X?" with step-by-step plans for your specific stack.', status: 'Coming Soon', icon: '🚀' },
  { name: 'API Design Agent', type: 'Agent', category: 'architecture', description: 'Reviews OpenAPI specs against company style guide, suggests improvements, generates client SDKs and documentation.', status: 'Coming Soon', icon: '🔌' },
  { name: 'Observability Agent', type: 'Agent', category: 'architecture', description: 'Correlates metrics, logs, and traces. Detects anomalies, explains them in plain language, and suggests instrumentation gaps.', status: 'Coming Soon', icon: '📊' },
  { name: 'Compliance Checker RAG', type: 'RAG', category: 'architecture', description: 'Ingests SOC2/HIPAA/PCI requirements + your infrastructure code. Answers "are we compliant?" with specific evidence or gaps.', status: 'Coming Soon', icon: '✅' },
  // Cross-Domain
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

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [typeFilter, setTypeFilter] = useState<'all' | 'Agent' | 'RAG'>('all')

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
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
          </motion.div>

          {/* Filters */}
          <div className="mb-10 space-y-4">
            {/* Category filter */}
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
            {/* Type filter */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="bg-surface-card border border-white/5 rounded-xl p-6 hover:border-white/15 transition-all card-glow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{product.icon}</span>
                  <div className="flex gap-2">
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      product.type === 'Agent' ? 'bg-accent/20 text-accent' : 'bg-neon/20 text-neon'
                    }`}>
                      {product.type}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400">
                      {product.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-white transition">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
              </motion.div>
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
    </main>
  )
}
