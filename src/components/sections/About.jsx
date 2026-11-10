import { Smile, Sparkles, Coffee, Globe, ShieldCheck, MessageCircle } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'

export default function About() {
  const values = [
    {
      icon: Smile,
      title: "User-Centered",
      description: "I build websites for real human beings. That means intuitive navigation, readable text, and zero confusion.",
    },
    {
      icon: Sparkles,
      title: "Care for the Craft",
      description: "Smooth hover transitions, clean spacing, and solid typography make the difference between good and great.",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "No tech jargon overwhelm. I explain decisions clearly, keep you updated, and respect deadlines.",
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Web tech evolves fast. I'm constantly experimenting with new libraries and refining my skills.",
    },
  ]

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-wider">
            My Story
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            A bit more about me & how I work
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Beyond just writing code, I love solving problems and turning ideas into things people enjoy using.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Story Card (Spans 7 columns) */}
          <div className="md:col-span-7 p-8 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">
                // The Person Behind the Screen
              </span>
              <div className="flex items-center gap-4 pt-1">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-16 h-16 rounded-xl object-cover border border-zinc-700 shadow-md shrink-0"
                />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Hi, I'm {personalInfo.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">Web Developer • India</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed text-base">
                {personalInfo.bio}
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                I believe web development is at its best when it's thoughtful. I don't just dump code into templates—I take the time to understand what you're trying to achieve, who your users are, and how to make the experience smooth, snappy, and memorable.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono">Location</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono">Availability</div>
                  <div className="text-sm font-semibold text-emerald-400">{personalInfo.status}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Real Workspace Photo Card (Spans 5 columns) */}
          <div className="md:col-span-5 rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden relative group min-h-[320px] flex flex-col justify-end">
            <img
              src={personalInfo.workspaceImage}
              alt="Developer Workspace"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
            
            <div className="relative z-10 p-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-950/90 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Focused Coding Setup</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Where ideas turn into reality
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Quiet focus, clean code, and modern tooling to build fast, responsive web products and interactive web experiences.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Human Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-zinc-900 border border-zinc-800"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
