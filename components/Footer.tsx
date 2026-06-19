'use client'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-neon rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold">AcmeForce Labs</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building the next generation of AI-powered applications, agents, and intelligent systems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Products</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition">QuantumKidz</a></li>
              <li><a href="#" className="hover:text-white transition">PRANAY</a></li>
              <li><a href="#" className="hover:text-white transition">PAMS</a></li>
              <li><a href="#" className="hover:text-white transition">Project-AN</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Categories</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition">AI Apps</a></li>
              <li><a href="#" className="hover:text-white transition">Autonomous Agents</a></li>
              <li><a href="#" className="hover:text-white transition">RAG Systems</a></li>
              <li><a href="#" className="hover:text-white transition">Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Connect</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="mailto:hello@acmeforcelabs.com" className="hover:text-white transition">Email</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">&copy; 2026 AcmeForce Labs. All rights reserved.</p>
          <p className="text-gray-700 text-xs font-mono">Built with AI. Powered by ambition.</p>
        </div>
      </div>
    </footer>
  )
}
