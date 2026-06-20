import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-gray-400 mb-6">Page not found</p>
        <Link href="/" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition">
          Go home
        </Link>
      </div>
    </div>
  )
}
