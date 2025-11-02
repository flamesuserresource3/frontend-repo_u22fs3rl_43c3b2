import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Interactive 3D Landing",
    description:
      "A playful tech landing page integrating a Spline scene with smooth page transitions and responsive design.",
    tags: ["React", "Spline", "Framer Motion", "Tailwind"],
    live: "#",
    repo: "#",
  },
  {
    title: "Real‑time Dashboard",
    description:
      "Live metrics, charts, and status boards with WebSocket updates and dark mode.",
    tags: ["React", "Node", "Tailwind"],
    live: "#",
    repo: "#",
  },
  {
    title: "AI‑assisted Portfolio",
    description:
      "A portfolio generator with content blocks, animation presets, and export to static hosting.",
    tags: ["FastAPI", "MongoDB", "React"],
    live: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Featured Projects
        </h2>
        <p className="mt-2 text-slate-600">
          A selection of work that blends interaction design with engineering
          craftsmanship.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">
                {p.title}
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={p.repo}
                  className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50"
                  aria-label="Repository"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={p.live}
                  className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50"
                  aria-label="Live demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <p className="mt-2 text-slate-600">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
