import { ArrowUp, Terminal, Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-8 h-8 rounded-full object-cover border border-zinc-700"
            />
            <div>
              <div className="text-white font-bold tracking-tight text-sm">
                {personalInfo.name}
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                {personalInfo.role} • Based in India
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {[
              { icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: personalInfo.gmailUrl, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <s.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
            <span className="flex items-center gap-1">
              Built with care & React
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom micro print */}
        <div className="mt-8 pt-6 border-t border-zinc-900 text-center text-[11px] text-zinc-600 font-mono">
          © {new Date().getFullYear()} {personalInfo.name}. Designed & coded with passion.
        </div>
      </div>
    </footer>
  )
}
