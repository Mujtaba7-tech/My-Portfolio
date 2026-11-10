import { ArrowDown, Mail, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../Icons'
import { personalInfo, stats } from '../../data/portfolioData'
import HeroScene3D from '../canvas/HeroScene3D'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Natural Human Introduction */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Friendly Avatar & Status Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <div className="relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-zinc-700 shadow-md"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-zinc-950" title="Available for work" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Available for freelance & full-time work</span>
              </div>
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                Hey, I'm {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-zinc-300">
                {personalInfo.role} based in India
              </p>
            </div>

            {/* Authentic Tagline */}
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.tagline}
            </p>

            {/* Solid Clean Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>See My Work</span>
                <ExternalLink className="w-4 h-4 text-zinc-950" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 font-medium text-sm transition-colors cursor-pointer"
              >
                <span>Say Hello</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-lg bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800 font-mono text-xs transition-colors"
              >
                Resume ↗
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-2">
              <span className="text-xs text-zinc-500 font-mono mr-2">Find me on:</span>
              {[
                { icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
                { icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: personalInfo.gmailUrl, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroScene3D />
          </div>

        </div>

        {/* Real Human Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
          >
            <span>SCROLL DOWN</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-zinc-400" />
          </a>
        </div>

      </div>
    </section>
  )
}
