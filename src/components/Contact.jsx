import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center gap-3">
        <Mail className="h-6 w-6 text-slate-900" />
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Get in touch
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-slate-700">
            I’m open to freelance work, full‑time roles, and collaborations.
            Feel free to reach out about opportunities or just to say hi.
          </p>

          <div className="mt-6 space-y-3 text-slate-700">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 text-slate-800 underline-offset-4 hover:underline"
            >
              <Mail className="h-4 w-4" /> you@example.com
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 text-slate-800 underline-offset-4 hover:underline"
            >
              <Phone className="h-4 w-4" /> +1 (234) 567-890
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          action="mailto:you@example.com"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-2"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
