import { experiences, education, certifications } from '../../data/portfolioData'
import { Briefcase, Calendar, CheckCircle2, GraduationCap, Award } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-zinc-950/60 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-wider">
            Experience & Education
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Work Experience & Background
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            My professional journey, academic foundation, and verified certifications.
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-zinc-300" />
            <span>Work Experience</span>
          </h3>

          <div className="relative border-l border-zinc-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-zinc-700 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-zinc-400" />
                </div>

                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-white font-semibold text-sm">
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    {exp.role}
                  </h4>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-zinc-950 border border-zinc-800 px-2.5 py-1 rounded-md"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-zinc-300" />
              <span>Education</span>
            </h3>

            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">{edu.period}</span>
                    <span className="text-xs font-mono text-emerald-400 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                  <p className="text-xs text-zinc-400 leading-snug">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-zinc-300" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">{cert.year}</span>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded">
                      Verified
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <p className="text-xs text-zinc-400 leading-snug">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
