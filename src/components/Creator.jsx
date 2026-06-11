import { motion } from "framer-motion"
import { Play, Eye, Users, Zap } from "lucide-react"
import { SectionHeading, Reveal, Counter, MagneticButton, ImagePlaceholder } from "./ui"
import { InstagramIcon } from "./brands"
import { profile } from "../data"

const reels = ["Reel — Dorm Tour", "Reel — Desi Food in AZ", "Reel — Finals Week", "Reel — Lahore vs Tempe"]

export default function Creator() {
  return (
    <section id="creator" className="relative scroll-mt-28 overflow-hidden py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pulse/15 blur-[180px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading index="04" title="@AlyanKiReelLife" accent="text-pulse" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-soft">
                Launched in <span className="font-semibold text-mist">August 2024</span> to document
                life as a Pakistani student in America, the page has grown into an independent
                content brand — produced, edited and published entirely solo.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { icon: Users, value: 19, suffix: "K+", label: "Followers" },
                { icon: Eye, value: 5, suffix: "M", label: "Views / month" },
                { icon: Zap, value: 0, suffix: "→1", label: "Person team", literal: "1" },
              ].map(({ icon: Icon, value, suffix, label, literal }, i) => (
                <Reveal key={label} delay={i * 0.08}>
                  <div className="rounded-2xl border border-line bg-ink p-5 text-center">
                    <Icon className="mx-auto mb-2 h-5 w-5 text-pulse" aria-hidden="true" />
                    {literal ? (
                      <span className="font-display text-3xl font-black text-mist">{literal}</span>
                    ) : (
                      <Counter value={value} suffix={suffix} className="font-display text-3xl font-black text-mist" />
                    )}
                    <p className="mt-1 text-xs uppercase tracking-widest text-soft">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-10">
              <MagneticButton
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pulse to-flare px-8 py-4 text-sm text-white hover:opacity-90"
              >
                <InstagramIcon className="h-4 w-4" /> View on Instagram
              </MagneticButton>
            </Reveal>
          </div>

          {/* Phone-style reel placeholders */}
          <div className="grid grid-cols-2 gap-4">
            {reels.map((r, i) => (
              <Reveal key={r} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`relative cursor-pointer overflow-hidden rounded-3xl ${i % 2 === 1 ? "mt-8" : ""}`}
                >
                  <ImagePlaceholder label={r} className="aspect-9/16 rounded-3xl" />
                  <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 font-mono text-xs text-mist backdrop-blur-sm">
                    <Play className="h-3 w-3 text-volt" aria-hidden="true" /> reel
                  </span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
