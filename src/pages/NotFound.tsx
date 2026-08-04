import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-ink-400 dark:text-ink-300 mb-3">
        404
      </p>
      <h1 className="font-serif text-3xl font-semibold text-ink-900 dark:text-cream-50 mb-3">
        Page not found
      </h1>
      <p className="text-ink-500 dark:text-ink-200 mb-6">
        That subject or chapter doesn't exist yet.
      </p>
      <Link
        to="/"
        className="inline-block px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white rounded-lg text-sm font-medium"
      >
        Back to home
      </Link>
    </div>
  )
}
