import { Crown } from "lucide-react"
import { SectionHeading, SpotlightCard, Reveal } from "./ui"
import { leadership } from "../data"

export default function Leadership() {
  return (
    <section id="leadership" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 md:px-10">
      <SectionHeading index="06" title="Leadership" accent="text-flare" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((l, i) => (
          <Reveal key={l.title} delay={(i % 3) * 0.07}>
            <SpotlightCard glow="255, 77, 0" className="h-full p-6">
              <Crown className="mb-4 h-5 w-5 text-flare" aria-hidden="true" />
              <h3 className="font-display text-base font-bold leading-snug text-mist">{l.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-soft">{l.desc}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
