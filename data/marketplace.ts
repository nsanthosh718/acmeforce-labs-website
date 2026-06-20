export type Category = 'all' | 'sdlc' | 'salesforce' | 'healthcare' | 'architecture' | 'cross-domain'

export interface MarketplaceProduct {
  name: string
  type: 'Agent' | 'RAG'
  category: Exclude<Category, 'all'>
  description: string
  status: 'Coming Soon' | 'In Development' | 'Live'
  icon: string
}

export const products: MarketplaceProduct[] = [
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
  { name: 'Clinical Documentation Agent', type: 'Agent', category: 'healthcare', description: 'Listens to physician-patient conversations, generates structured SOAP notes, codes diagnoses (ICD-10), and drafts referral letters.', status: 'Coming Soon', icon: '��' },
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

export const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'all', label: 'All', icon: '🌐' },
  { id: 'sdlc', label: 'SDLC & DevTools', icon: '⚙️' },
  { id: 'salesforce', label: 'Sales & CRM', icon: '💼' },
  { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
  { id: 'architecture', label: 'Architecture', icon: '🏗️' },
  { id: 'cross-domain', label: 'Cross-Domain', icon: '🔗' },
]
