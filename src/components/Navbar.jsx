import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['about', 'skills', 'projects', 'experience', 'contact']
      const current = sections.find((sec) => {
        const el = document.getElementById(sec)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-zinc-950/90 border-b border-zinc-800 py-3.5 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-white font-bold tracking-tight text-base sm:text-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="flex items-center gap-1">
            <span className="text-white font-bold">
              {personalInfo.name}
            </span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs sm:text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? 'text-white bg-zinc-800'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 text-xs text-zinc-300 font-mono bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Available for hire
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-5 rounded-xl bg-zinc-950 border border-zinc-800 shadow-xl flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono pb-2 border-b border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {personalInfo.status}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-white font-medium py-2 text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-lg bg-white text-zinc-950 font-semibold text-sm shadow-sm"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  )
}
