import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { SectionHeading, Reveal } from "./ui"
import { experience } from "../data"

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 md:px-10">
      <SectionHeading index="03" title="Where I've Worked" accent="text-flare" />

      <div className="relative ml-3 border-l border-line pl-8 md:ml-6 md:pl-12">
        {experience.map((e, i) => (
          <Reveal key={e.role + e.org} delay={i * 0.05} className="relative pb-14 last:pb-0">
            {/* Timeline node */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.05, type: "spring", stiffness: 300 }}
              className="absolute -left-[2.55rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-ink md:-left-[3.55rem]"
              aria-hidden="true"
            >
              <Briefcase className="h-3.5 w-3.5 text-volt" />
            </motion.span>

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-display text-xl font-bold text-mist md:text-2xl">{e.role}</h3>
              <span className="rounded-full border border-line px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-soft">
                {e.tag}
              </span>
            </div>
            <p className="mt-1 font-medium text-cyanic">{e.org}</p>
            <p className="mt-0.5 font-mono text-xs uppercase tracking-widest text-soft">{e.period}</p>
            <ul className="mt-4 space-y-2">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-3 leading-relaxed text-soft">
                  <span className="mt-2.5 h-1 w-4 shrink-0 bg-volt" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
