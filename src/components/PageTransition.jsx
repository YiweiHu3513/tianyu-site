import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

export default function PageTransition({ children }) {
  const { pathname } = useLocation()
  const [phase, setPhase] = useState('idle') // idle | expanding | visible | shrinking
  const [showContent, setShowContent] = useState(true)
  const prevPathRef = useRef(pathname)
  const isArtech = pathname.startsWith('/artech')
  const wasArtech = useRef(false)

  useEffect(() => {
    const prevPath = prevPathRef.current
    const wasArtechRoute = prevPath.startsWith('/artech')
    const isArtechRoute = pathname.startsWith('/artech')

    // Navigating TO artech from non-artech
    if (isArtechRoute && !wasArtechRoute) {
      setShowContent(false)
      setPhase('expanding')
      const t1 = setTimeout(() => {
        setShowContent(true)
        setPhase('visible')
      }, 800)
      const t2 = setTimeout(() => {
        setPhase('shrinking')
      }, 1000)
      const t3 = setTimeout(() => {
        setPhase('idle')
      }, 1500)
      prevPathRef.current = pathname
      wasArtech.current = true
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
    }

    // Navigating AWAY from artech
    if (!isArtechRoute && wasArtechRoute) {
      setPhase('reverse-expanding')
      const t1 = setTimeout(() => {
        setShowContent(true)
        setPhase('reverse-shrinking')
      }, 600)
      const t2 = setTimeout(() => {
        setPhase('idle')
      }, 1200)
      prevPathRef.current = pathname
      wasArtech.current = false
      return () => { clearTimeout(t1); clearTimeout(t2) }
    }

    prevPathRef.current = pathname
    wasArtech.current = isArtechRoute
  }, [pathname])

  const isActive = phase !== 'idle'

  return (
    <>
      {isActive && (
        <div className="page-transition-overlay" data-phase={phase}>
          {/* Dark circle mask */}
          <div className="page-transition-circle" />
          {/* Star particles */}
          {(phase === 'expanding' || phase === 'visible') && (
            <div className="page-transition-stars">
              {Array.from({ length: 40 }).map((_, i) => {
                const angle = Math.random() * Math.PI * 2
                const dist = 120 + Math.random() * 150
                return (
                  <span
                    key={i}
                    className="page-transition-star"
                    style={{
                      '--star-x': `${Math.random() * 100}%`,
                      '--star-y': `${Math.random() * 100}%`,
                      '--star-delay': `${Math.random() * 0.6}s`,
                      '--star-duration': `${0.4 + Math.random() * 0.6}s`,
                      '--star-tx': `${Math.cos(angle) * dist}px`,
                      '--star-ty': `${Math.sin(angle) * dist}px`,
                      '--star-size': `${1 + Math.random() * 2}px`,
                    }}
                  />
                )
              })}
            </div>
          )}
        </div>
      )}
      <div style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.3s ease' }}>
        {children}
      </div>
    </>
  )
}
