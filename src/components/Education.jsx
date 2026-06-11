import { GraduationCap, Sparkle } from "lucide-react"
import { SectionHeading, SpotlightCard, Reveal } from "./ui"
import { education } from "../data"

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 md:px-10">
      <SectionHeading index="05" title="Education" accent="text-volt" />

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((ed, i) => (
          <Reveal key={ed.school} delay={i * 0.1}>
            <SpotlightCard glow={i === 0 ? "59, 130, 246" : "56, 189, 248"} className="h-full p-8 md:p-10">
              <GraduationCap className={`mb-5 h-8 w-8 ${i === 0 ? "text-volt" : "text-cyanic"}`} aria-hidden="true" />
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-mist">
                {ed.school}
              </h3>
              <p className="mt-1 text-sm text-soft">{ed.sub}</p>
              <p className="mt-4 font-medium text-mist">{ed.degree}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-soft">{ed.period}</p>
              <ul className="mt-6 space-y-2.5">
                {ed.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm leading-relaxed text-soft">
                    <Sparkle className={`mt-0.5 h-4 w-4 shrink-0 ${i === 0 ? "text-volt" : "text-cyanic"}`} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              {ed.clubs && (
                <div className="mt-7 border-t border-line pt-6">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-soft">
                    Campus Involvement
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ed.clubs.map((c) => (
                      <span key={c} className="rounded-full border border-line bg-void px-3 py-1.5 text-xs font-medium text-mist">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
