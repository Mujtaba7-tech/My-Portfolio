import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import StarsBackground from './components/canvas/StarsBackground'

function App() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-slate-100 selection:bg-cyan-400 selection:text-gray-950">
      {/* 3D Global Space Particles Background */}
      <StarsBackground />

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
