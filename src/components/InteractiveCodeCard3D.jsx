import { useState, useRef } from 'react'
import { Terminal, Check, Copy } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function InteractiveCodeCard3D() {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [copied, setCopied] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Gentle 3D perspective tilt without artificial glow
    const rotX = ((y - centerY) / centerY) * -8
    const rotY = ((x - centerX) / centerX) * 8

    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="w-full max-w-lg mx-auto py-4"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="relative rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl transition-transform duration-200 ease-out p-6 overflow-hidden select-none"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Window Header */}
        <div
          className="flex items-center justify-between pb-4 border-b border-zinc-800"
          style={{ transform: 'translateZ(15px)' }}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              about-mujtaba.ts
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Human Personal Code Snippet */}
        <div
          className="pt-4 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 space-y-1.5"
          style={{ transform: 'translateZ(25px)' }}
        >
          <div>
            <span className="text-purple-400">const</span>{' '}
            <span className="text-blue-400">developer</span> = {'{'}
          </div>

          <div className="pl-4">
            <span className="text-zinc-500">name:</span>{' '}
            <span className="text-emerald-400">'{personalInfo.name}'</span>,
          </div>

          <div className="pl-4">
            <span className="text-zinc-500">role:</span>{' '}
            <span className="text-emerald-400">'{personalInfo.role}'</span>,
          </div>

          <div className="pl-4">
            <span className="text-zinc-500">location:</span>{' '}
            <span className="text-emerald-400">'India'</span>,
          </div>

          <div className="pl-4">
            <span className="text-zinc-500">passions:</span> [
          </div>
          <div className="pl-8 text-amber-300">
            'Clean UI', 'Interactive Web', 'Problem Solving'
          </div>
          <div className="pl-4">],</div>

          <div className="pl-4">
            <span className="text-zinc-500">currentlyBuilding:</span>{' '}
            <span className="text-emerald-400">'Fast, modern web applications'</span>,
          </div>

          <div className="pl-4">
            <span className="text-zinc-500">fuel:</span>{' '}
            <span className="text-zinc-300">'Chai & Curiosity ☕'</span>,
          </div>

          <div>{'}'};</div>

          <div className="pt-2 text-zinc-500">
            <span>// "Good code is readable, fast, and simple."</span>
          </div>
        </div>

        {/* Bottom Card Footer */}
        <div
          className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between gap-3 text-xs"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-zinc-400 font-mono text-[11px]">
              Available for work
            </span>
          </div>

          <div className="text-zinc-500 text-[11px] font-mono">
            Handcrafted portfolio
          </div>
        </div>
      </div>
    </div>
  )
}
