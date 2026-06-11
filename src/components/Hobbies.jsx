import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plane, Dumbbell, Trophy, Camera, Clapperboard } from "lucide-react"
import { SectionHeading, Reveal } from "./ui"
import { hobbies } from "../data"

const icons = { plane: Plane, dumbbell: Dumbbell, trophy: Trophy, camera: Camera, clapperboard: Clapperboard }

export default function Hobbies() {
  const [active, setActive] = useState(0)

  return (
    <section id="hobbies" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 md:px-10">
      <SectionHeading index="07" title="Interests" accent="text-cyanic" />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Accordion list */}
        <div role="tablist" aria-label="Hobbies">
          {hobbies.map((h, i) => {
            const Icon = icons[h.icon]
            const isActive = active === i
            return (
              <Reveal key={h.name} delay={i * 0.05}>
                <button
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`group flex w-full cursor-pointer items-center gap-5 border-b border-line px-2 py-6 text-left transition-colors duration-200 ${isActive ? "" : "opacity-50 hover:opacity-80"}`}
                >
                  <Icon className={`h-7 w-7 shrink-0 transition-colors duration-200 ${isActive ? "text-cyanic" : "text-soft"}`} aria-hidden="true" />
                  <div className="flex-1">
                    <span className={`font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl ${isActive ? "text-mist" : "text-soft"}`}>
                      {h.name}
                    </span>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden text-sm leading-relaxed text-soft"
                        >
                          {h.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className="font-mono text-xs text-soft" aria-hidden="true">0{i + 1}</span>
                </button>
              </Reveal>
            )
          })}
        </div>

        {/* Visual panel */}
        <Reveal delay={0.15} className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="sticky top-28 h-[480px]"
            >
              <img
                src={hobbies[active].image}
                alt={hobbies[active].name}
                loading="lazy"
                className="h-full w-full rounded-3xl border border-line object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
