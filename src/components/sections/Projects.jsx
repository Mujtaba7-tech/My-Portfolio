import { useState } from 'react'
import { projects } from '../../data/portfolioData'
import { ExternalLink, FolderGit2, Maximize2, Globe } from 'lucide-react'
import { GithubIcon } from '../Icons'
import ProjectModal from '../ProjectModal'
import { sounds } from '../../utils/audio'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All', 'Full Stack', 'Frontend', '3D & Creative']

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-wider">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Things I've built & shipped
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Here are a few real-world web apps, experiments, and interactive projects I've worked on recently.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playClick()
                setFilter(cat)
              }}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                filter === cat
                  ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                sounds.playClick()
                setSelectedProject(project)
              }}
              className="group rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 overflow-hidden flex flex-col justify-between transition-colors cursor-pointer"
            >
              <div>
                {/* Browser Mockup Chrome Frame */}
                <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  
                  {/* URL Bar */}
                  <div className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center gap-1 max-w-[200px] truncate">
                    <Globe className="w-3 h-3 shrink-0 text-zinc-500" />
                    <span>
                      {project.liveUrl ? project.liveUrl.replace('https://', '').replace('/', '') : `${project.title.toLowerCase().split(' ')[0]}.app`}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-zinc-500">
                    {project.category}
                  </span>
                </div>

                {/* Project Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="w-7 h-7 rounded-lg bg-zinc-950/90 border border-zinc-800 text-zinc-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags & Action Links */}
              <div className="p-5 pt-0 space-y-4">
                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 px-3 py-1.5 rounded-md transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
                      {project.status || 'In Development'}
                    </span>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  ) : (
                    project.liveUrl && (
                      <span className="text-[11px] font-mono text-emerald-400">
                        ● Online
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
          >
            <FolderGit2 className="w-4 h-4 text-zinc-400" />
            <span>Check out my other repositories on GitHub ↗</span>
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
