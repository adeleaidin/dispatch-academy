'use client'

import { motion } from 'framer-motion'
import { FileText, ArrowRight, Download, ExternalLink, Send } from 'lucide-react'

const modules = [
  { title: "Lecture 1 · Introduction to Truck Industry & Dispatching", file: "truck_course_1.pdf" },
  { title: "Lecture 2 · Logistics Fundamentals", file: "truck_course_2.pdf" },
  { title: "Lecture 3 · Trailer Types (Part 1)", file: "truck_course_3.pdf" },
  { title: "Lecture 4 · Trailer Types (Part 2)", file: "truck_course_4.pdf" },
  { title: "Lecture 5 · Driver Relationships", file: "truck_course_5.pdf" },
  { title: "Lecture 6 · Planning: Optimizing Your Operations", file: "truck_course_6.pdf" },
  { title: "Lecture 7 · Setup Process", file: "truck_course_7.pdf" },
  { title: "Lecture 8 · Transit Process (Part 1)", file: "truck_course_8.pdf" },
  { title: "Lecture 9 · Transit Process (Part 2)", file: "truck_course_9.pdf" },
];


const stats = [
  { kpi: "$2k–5k", label: "Dispatcher monthly pay (typical)" },
  { kpi: "$5k–10k+", label: "Truck driver monthly pay (range)" },
  { kpi: "1000+", label: "Kyrgyz-owned trucking companies in the US" },
]

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900 via-zinc-900 to-black" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
        >
          Kyrgyz Took Over the US Trucking Industry
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-zinc-300"
        >
          Free dispatcher training — 9 concise presentations. Learn the market, tools, docs, and how to land a job. No gatekeeping.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#course" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-black font-medium shadow hover:shadow-lg transition">
            Start learning free <ArrowRight size={18} />
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-5 py-3 text-white hover:bg-zinc-800 transition">
            Why free?
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="bg-black py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-zinc-800 p-6">
              <div className="text-2xl sm:text-3xl font-semibold text-white">{s.kpi}</div>
              <div className="mt-1 text-zinc-400 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Course() {
  return (
    <section id="course" className="bg-gradient-to-b from-black to-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Free Course · 10 Presentations</h2>
            <p className="mt-2 text-zinc-400">Open in browser or download. Use them to learn or to hire and train junior dispatchers.</p>
          </div>
          <div className="hidden sm:block text-zinc-400 text-sm">Format: PDF · English</div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, idx) => {
            const url = `/presentations/${m.file}`
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 transition shadow-sm hover:shadow-md"
              >
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-zinc-800 p-2">
                      <FileText size={18} className="text-zinc-300" />
                    </div>
                    <div className="text-sm text-zinc-400">Presentation</div>
                  </div>
                  <h3 className="mt-3 text-white font-medium leading-snug">{m.title}</h3>
                  <div className="mt-5 flex gap-2">
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-black text-sm font-medium hover:shadow"
                    >
                      Open <ExternalLink size={16} />
                    </a>
                    <a
                      href={url}
                      download
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-3 py-2 text-white text-sm hover:bg-zinc-800"
                    >
                      Download <Download size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Why is this free?</h2>
        <p className="mt-4 text-zinc-300">
          I built these decks from scratch for a private course. Plans changed, but the knowledge shouldn’t go to waste. Kyrgyz people are already shaping the US trucking market; let’s make it easier to enter the field without misinformation or overpriced paywalls.
        </p>
        <p className="mt-3 text-zinc-400">
          Use the materials to learn, hire, or train. If you’re a company hiring juniors, I’d love to partner: internships, curated cohorts, or job placement.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://t.me/adeleaidin"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-black font-medium shadow hover:shadow-lg"
          >
            Join Telegram <Send size={18} />
          </a>
          <a
            href="#course"
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-5 py-3 text-white hover:bg-zinc-800"
          >
            Back to course
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Kyrgyz Dispatch Academy — Made by Adele Aidin
        </div>
        <div className="text-zinc-500 text-sm">
          All presentations are for educational use. If you are a rights holder and have concerns about any image used, contact me.
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Stats />
      <Course />
      <About />
      <Footer />
    </div>
  )
}
