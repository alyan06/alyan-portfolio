import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading, SpotlightCard, Reveal } from "./ui"
import { projects } from "../data"

const glows = {
  volt: "204, 255, 0",
  flare: "255, 77, 0",
  pulse: "124, 58, 237",
  cyanic: "34, 211, 238",
}
const accents = {
  volt: "text-volt",
  flare: "text-flare",
  pulse: "text-pulse",
  cyanic: "text-cyanic",
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 md:px-10">
      <SectionHeading index="02" title="Selected Projects" accent="text-cyanic" />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} className={p.size === "lg" ? "md:col-span-1" : ""}>
            <SpotlightCard glow={glows[p.accent]} className="h-full">
              <a
                href={p.link}
                target={p.link.startsWith("http") ? "_blank" : undefined}
                rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block h-full cursor-pointer p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-mist">
                    {p.title}
                  </h3>
                  <motion.span
                    className={`shrink-0 rounded-full border border-line p-2 ${accents[p.accent]} transition-colors duration-200 group-hover:border-zinc-500`}
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </div>
                <p className="mt-3 leading-relaxed text-soft">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-void px-3 py-1 font-mono text-xs uppercase tracking-wider text-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
