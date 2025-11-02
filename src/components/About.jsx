import { motion } from "framer-motion";
import { Code2, MapPin } from "lucide-react";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Playwright",
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center gap-3">
        <Code2 className="h-6 w-6 text-slate-900" />
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          About
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <p className="text-lg leading-relaxed text-slate-700">
            I’m a developer who loves bringing ideas to life with polished
            visuals and robust engineering. I care about accessibility,
            performance, and delightful micro‑interactions. Outside of coding, I
            enjoy learning new tools and exploring creative tech.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4" /> Remote / Open to opportunities
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
