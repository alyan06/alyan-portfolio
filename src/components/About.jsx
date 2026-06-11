import { GraduationCap, MapPin, Languages, User, Award, TrendingUp } from "lucide-react"
import { SectionHeading, SpotlightCard, Reveal } from "./ui"
import { profile } from "../data"

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 md:px-10">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-4 md:grid-cols-6">
        {/* Big intro card */}
        <Reveal className="md:col-span-4">
          <SpotlightCard className="h-full p-8 md:p-10">
            <User className="mb-5 h-8 w-8 text-volt" aria-hidden="true" />
            <h3 className="font-display text-2xl font-bold text-mist md:text-3xl">
              Engineering student. Builder at heart.
            </h3>
            <p className="mt-4 leading-relaxed text-soft">
              I'm a Computer Science (AI) student at Arizona State University with a Data Science
              minor and a 4.0 GPA. Before ASU, I directed national-scale events in Pakistan, led
              academic societies, helped run a family retail business, and built an audience of
              19,000+ documenting the international student experience.
            </p>
            <p className="mt-4 leading-relaxed text-soft">
              Today I'm focused on software development and data science, while serving in
              leadership roles across the Fulton Schools of Engineering and ASU's international
              student community.
            </p>
          </SpotlightCard>
        </Reveal>

        {/* Portrait */}
        <Reveal delay={0.1} className="md:col-span-2">
          <img
            src="/images/portrait.jpeg"
            alt="Muhammad Alyan"
            loading="lazy"
            className="h-full min-h-64 w-full rounded-2xl border border-line object-cover"
          />
        </Reveal>

        {/* GPA card */}
        <Reveal delay={0.05} className="md:col-span-2">
          <SpotlightCard glow="99, 102, 241" className="h-full p-7">
            <GraduationCap className="mb-4 h-7 w-7 text-pulse" aria-hidden="true" />
            <p className="font-display text-5xl font-black text-mist">4.00</p>
            <p className="mt-2 text-sm text-soft">Cumulative GPA at ASU — Dean's List Fall '25 <span className="text-mist">and</span> Spring '26.</p>
          </SpotlightCard>
        </Reveal>

        {/* Scholarship card */}
        <Reveal delay={0.1} className="md:col-span-2">
          <SpotlightCard glow="56, 189, 248" className="h-full p-7">
            <Award className="mb-4 h-7 w-7 text-cyanic" aria-hidden="true" />
            <p className="font-display text-5xl font-black text-mist">100%</p>
            <p className="mt-2 text-sm text-soft">Merit scholarship — earned and maintained throughout A-Levels at LGS Paragon.</p>
          </SpotlightCard>
        </Reveal>

        {/* Sales card */}
        <Reveal delay={0.15} className="md:col-span-2">
          <SpotlightCard glow="129, 140, 248" className="h-full p-7">
            <TrendingUp className="mb-4 h-7 w-7 text-flare" aria-hidden="true" />
            <p className="font-display text-5xl font-black text-mist">+15%</p>
            <p className="mt-2 text-sm text-soft">Monthly sales growth achieved at the Nishat clothing franchise in Lahore.</p>
          </SpotlightCard>
        </Reveal>

        {/* Location strip */}
        <Reveal delay={0.1} className="md:col-span-3">
          <SpotlightCard className="flex h-full items-center gap-5 p-7">
            <MapPin className="h-8 w-8 shrink-0 text-volt" aria-hidden="true" />
            <div>
              <p className="font-display text-xl font-bold text-mist">{profile.location}</p>
              <p className="mt-1 text-sm text-soft">Based in Tempe, Arizona — originally from Lahore, Pakistan.</p>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Languages strip */}
        <Reveal delay={0.15} className="md:col-span-3">
          <SpotlightCard className="flex h-full items-center gap-5 p-7">
            <Languages className="h-8 w-8 shrink-0 text-cyanic" aria-hidden="true" />
            <div>
              <p className="font-display text-xl font-bold text-mist">{profile.languages.join(" · ")}</p>
              <p className="mt-1 text-sm text-soft">Fluent across four languages.</p>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  )
}
