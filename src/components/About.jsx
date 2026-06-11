import { GraduationCap, MapPin, Languages, Flame, Award, TrendingUp } from "lucide-react"
import { SectionHeading, SpotlightCard, Reveal, ImagePlaceholder } from "./ui"
import { profile } from "../data"

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 md:px-10">
      <SectionHeading index="01" title="The Operator" />

      <div className="grid gap-4 md:grid-cols-6">
        {/* Big intro card */}
        <Reveal className="md:col-span-4">
          <SpotlightCard className="h-full p-8 md:p-10">
            <Flame className="mb-5 h-8 w-8 text-flare" aria-hidden="true" />
            <h3 className="font-display text-2xl font-bold text-mist md:text-3xl">
              One person. Five full-time personalities.
            </h3>
            <p className="mt-4 leading-relaxed text-soft">
              I'm a Computer Science (AI) student at Arizona State University with a Data Science minor,
              a perfect 4.0, and a habit of saying yes to too many things — then delivering all of them.
              Before ASU, I directed national-scale events in Pakistan, coached Olympiad teams,
              ran a clothing franchise I own, and built an audience of 19,000+ documenting the
              international student life. Discipline is the engine; curiosity is the steering wheel.
            </p>
            <p className="mt-4 leading-relaxed text-soft">
              Long game: a serious CS career, and one day Pakistan's CSS exam — because
              writing code and writing policy don't have to be different lives.
            </p>
          </SpotlightCard>
        </Reveal>

        {/* Portrait placeholder */}
        <Reveal delay={0.1} className="md:col-span-2">
          <ImagePlaceholder label="Portrait — Alyan" className="h-full min-h-64 rounded-2xl" />
        </Reveal>

        {/* GPA card */}
        <Reveal delay={0.05} className="md:col-span-2">
          <SpotlightCard glow="124, 58, 237" className="h-full p-7">
            <GraduationCap className="mb-4 h-7 w-7 text-pulse" aria-hidden="true" />
            <p className="font-display text-5xl font-black text-mist">4.00</p>
            <p className="mt-2 text-sm text-soft">Cumulative GPA at ASU — Dean's List Fall '25 <span className="text-mist">and</span> Spring '26.</p>
          </SpotlightCard>
        </Reveal>

        {/* Scholarship card */}
        <Reveal delay={0.1} className="md:col-span-2">
          <SpotlightCard glow="34, 211, 238" className="h-full p-7">
            <Award className="mb-4 h-7 w-7 text-cyanic" aria-hidden="true" />
            <p className="font-display text-5xl font-black text-mist">100%</p>
            <p className="mt-2 text-sm text-soft">Merit scholarship — earned and maintained throughout A-Levels at LGS Paragon.</p>
          </SpotlightCard>
        </Reveal>

        {/* Sales card */}
        <Reveal delay={0.15} className="md:col-span-2">
          <SpotlightCard glow="255, 77, 0" className="h-full p-7">
            <TrendingUp className="mb-4 h-7 w-7 text-flare" aria-hidden="true" />
            <p className="font-display text-5xl font-black text-mist">+15%</p>
            <p className="mt-2 text-sm text-soft">Monthly sales growth at the Nishat franchise I own and operated in Lahore.</p>
          </SpotlightCard>
        </Reveal>

        {/* Location strip */}
        <Reveal delay={0.1} className="md:col-span-3">
          <SpotlightCard className="flex h-full items-center gap-5 p-7">
            <MapPin className="h-8 w-8 shrink-0 text-volt" aria-hidden="true" />
            <div>
              <p className="font-display text-xl font-bold text-mist">{profile.location}</p>
              <p className="mt-1 text-sm text-soft">Tooker House, Tempe — repping Lahore in the desert.</p>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Languages strip */}
        <Reveal delay={0.15} className="md:col-span-3">
          <SpotlightCard className="flex h-full items-center gap-5 p-7">
            <Languages className="h-8 w-8 shrink-0 text-cyanic" aria-hidden="true" />
            <div>
              <p className="font-display text-xl font-bold text-mist">{profile.languages.join(" · ")}</p>
              <p className="mt-1 text-sm text-soft">Four languages, one accent that confuses everyone.</p>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  )
}
