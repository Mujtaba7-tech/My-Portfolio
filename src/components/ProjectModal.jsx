import { useEffect } from 'react'
import { X, ExternalLink, Sparkles, Layers, Cpu } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-gray-950/95 border border-white/15 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 backdrop-blur-md">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-cyan-400 tracking-wider uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Project Overview
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                Frontend & UI
              </span>
              <p className="text-sm text-slate-200 font-medium">
                Responsive 3D Canvas, Reactive State, Framer Motion
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                Performance & Delivery
              </span>
              <p className="text-sm text-slate-200 font-medium">
                Vite Bundle Optimization, Hardware WebGL Acceleration
              </p>
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs sm:text-sm font-mono transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Source</span>
                </a>
              )}

              {!project.liveUrl && !project.githubUrl && (
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md">
                  Status: {project.status || 'In Development'}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Close Window [ESC]
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

