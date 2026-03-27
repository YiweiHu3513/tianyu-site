import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Activate scroll-reveal animations
  useScrollReveal()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
      </PageTransition>
    </div>
  )
}
