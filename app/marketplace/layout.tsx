import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Marketplace — AcmeForce Labs',
  description: 'Browse 26+ production-ready AI agents and RAG systems across SDLC, Sales, Healthcare, Architecture, and more. Deploy intelligent automation today.',
}

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
