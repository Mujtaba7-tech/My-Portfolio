import {
  ReactLogo,
  AstroLogo,
  LaravelLogo,
  TailwindLogo,
  JavaScriptLogo,
  NodeLogo,
  MongoLogo,
  GitLogo,
  FigmaLogo,
} from '../TechLogos'
import { Code2 } from 'lucide-react'

const allTech = [
  { name: 'React.js', logo: ReactLogo, desc: 'Component architecture & hooks' },
  { name: 'Astro.js', logo: AstroLogo, desc: 'High-performance content-driven UI' },
  { name: 'Laravel', logo: LaravelLogo, desc: 'Full-stack PHP applications & MVC' },
  { name: 'Tailwind CSS', logo: TailwindLogo, desc: 'Utility-first responsive styling' },
  { name: 'JavaScript', logo: JavaScriptLogo, desc: 'Modern ES6+ frontend logic' },
  { name: 'Node.js', logo: NodeLogo, desc: 'Backend APIs & server services' },
  { name: 'MongoDB', logo: MongoLogo, desc: 'NoSQL data management' },
  { name: 'Git & GitHub', logo: GitLogo, desc: 'Version control & teamwork' },
  { name: 'Figma', logo: FigmaLogo, desc: 'Design systems & prototyping' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-wider">
            Technical Skills
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            My Core Tech Stack
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Tools and technologies I use to build responsive, performant, and full-stack web applications.
          </p>
        </div>

        {/* Real Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {allTech.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col items-center text-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center p-2.5 transition-transform group-hover:scale-110">
                <tech.logo className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {tech.name}
                </h3>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy on Tools & Certifications Highlight */}
        <div className="mt-12 p-6 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
              <Code2 className="w-5 h-5 text-zinc-300" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Certified & Production Tested
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Certified by IIT Kharagpur (DBMS), IIT Madras (Python), Johns Hopkins, and IBM SkillsBuild.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400 shrink-0">
            <span className="px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800">HTML5 / CSS3</span>
            <span className="px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800">MySQL</span>
            <span className="px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800">Blade</span>
            <span className="px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800">REST APIs</span>
          </div>
        </div>

      </div>
    </section>
  )
}
