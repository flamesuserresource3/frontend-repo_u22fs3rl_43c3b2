import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold tracking-tight text-slate-900 drop-shadow-sm sm:text-6xl"
          >
            Hi, I build playful, interactive web experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-4 max-w-xl text-lg text-slate-700"
          >
            Full‑stack developer focused on modern, animated interfaces and solid
            engineering. Welcome to my portfolio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              Contact Me
            </a>
            <div className="ml-2 flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/90" />
    </section>
  );
}
