import { useState } from 'react'
import { Link, useLocation } from 'react-router'

const NAV_ITEMS = [
  { label: '首页', to: '/' },
  { label: '平台', to: '/sci-vision' },
  { label: '天与科艺', to: '/artech' },
  { label: '天与科玩', to: '/sciplay' },
  { label: '服务', to: '/services' },
  { label: '关于', to: '/about' },
  { label: '联系', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-line">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-lg font-bold tracking-tight text-ink">天与视界</span>
          <span className="text-xs text-muted tracking-widest uppercase hidden sm:inline">Tianyu Vision</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium no-underline transition-colors ${
                pathname === to
                  ? 'bg-teal/10 text-teal'
                  : 'text-muted hover:text-ink hover:bg-black/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-ink transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-line px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium no-underline ${
                pathname === to ? 'bg-teal/10 text-teal' : 'text-muted'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
