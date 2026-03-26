import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
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

    const elements = document.querySelectorAll('.scroll-reveal')
    for (const el of elements) observer.observe(el)

    return () => observer.disconnect()
  }, [])
}
