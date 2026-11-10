import { useState, useEffect } from 'react'
import { personalInfo } from '../../data/portfolioData'
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Copy, Check, Clock, Coffee, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '2d4380d4-fa60-4d9f-813c-545a021d798f',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New message from ${formData.name}`,
          message: formData.message,
          from_name: `${formData.name} (Portfolio Inquiry)`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setError(result.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Have a project in mind? Let's talk.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Whether you want to build a new website from scratch, need frontend help, or just want to say hi—my inbox is always open.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Availability & Details Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 space-y-4">
              
              {/* Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-sm font-semibold text-white">Status: Available</span>
                </div>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 px-2.5 py-1 rounded-md">
                  Freelance & Full-Time
                </span>
              </div>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-zinc-400" />
                    Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-[11px] font-mono text-zinc-300 hover:text-white cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={personalInfo.gmailUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-white hover:underline transition-colors block"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Local Time in India */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-950 border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                    <Clock className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">Current Time (India)</div>
                    <div className="text-sm font-semibold text-white">{currentTime || 'IST'}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">UTC+5:30</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 rounded-lg bg-zinc-950 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                  <Phone className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono">Phone / WhatsApp</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:underline">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-lg bg-zinc-950 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-mono">Based in</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                </div>
              </div>

              {/* Friendly Note */}
              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>I usually reply within a few hours on weekdays!</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Solid Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-zinc-400" />
                  Send Me a Message
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                  Fill in your details below and I'll get back to you promptly.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-950/40 border border-red-800/60 text-red-300 text-xs font-mono">
                  ⚠ {error}
                </div>
              )}

              {submitted ? (
                <div className="p-8 rounded-xl bg-zinc-950 border border-zinc-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto">
                    Thanks for reaching out! Your message was sent to <strong>{personalInfo.email}</strong>. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white text-xs font-mono transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Your Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a bit about what you're looking to build..."
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Note
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
