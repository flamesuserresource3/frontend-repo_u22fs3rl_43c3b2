import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Rocket } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 text-slate-900">
            <Rocket className="h-5 w-5" />
            <span className="font-semibold">My Portfolio</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-8">
        <p className="mx-auto max-w-7xl px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} • Built with love for animated, modern web experiences.
        </p>
      </footer>
    </div>
  );
}

export default App;
