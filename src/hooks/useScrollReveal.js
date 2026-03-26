import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Small delay to let the new page render its elements
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )

      // Reset and re-observe all scroll-reveal elements
      const elements = document.querySelectorAll('.scroll-reveal')
      for (const el of elements) {
        el.classList.remove('revealed')
        observer.observe(el)
      }

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname])
}
