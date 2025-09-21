import './App.css'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Landing from './components/Landing.tsx'
import Navbar from './components/Navbar.tsx'
import Projects from './components/Projects.tsx'

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 transition-colors">
      <Navbar />
      <main className="pt-20">
        <section id="home" className="min-h-[70vh] flex items-center">
          <Landing />
        </section>

        <section id="about" className="py-16 border-t border-slate-200 dark:border-slate-700">
          <About />
        </section>

        <section id="projects" className="py-16 border-t border-slate-200 dark:border-slate-700">
          <Projects />
        </section>

        <section id="contact" className="py-16 border-t border-slate-200 dark:border-slate-700">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
