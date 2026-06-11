import { motion } from "framer-motion"
import { Mail, ArrowUpRight } from "lucide-react"
import { Reveal, MagneticButton } from "./ui"
import { InstagramIcon, GitHubIcon, LinkedInIcon } from "./brands"
import { profile } from "../data"

const socials = [
  { icon: InstagramIcon, label: "@AlyanKiReelLife", href: profile.instagram },
  { icon: GitHubIcon, label: "alyan06", href: profile.github },
  { icon: LinkedInIcon, label: "LinkedIn", href: profile.linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden px-6 py-32 md:px-10">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-volt/10 blur-[160px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.4em] text-soft">Got an idea? A role? A net session?</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-6xl font-black uppercase leading-[0.9] tracking-tighter text-mist md:text-9xl">
            Let's <span className="gradient-text">Build</span>
            <br />
            Something
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="bg-volt px-10 py-5 text-base text-black hover:bg-lime-300"
          >
            <Mail className="h-5 w-5" /> {profile.email}
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.3} className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-line bg-panel px-5 py-3 text-sm font-medium text-soft transition-colors duration-200 hover:border-zinc-500 hover:text-mist"
              >
                <Icon className="h-4 w-4" aria-hidden="true" /> {label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="relative mx-auto mt-28 max-w-6xl border-t border-line pt-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-soft md:flex-row">
          <p>© {new Date().getFullYear()} Muhammad Alyan. Built with caffeine in Tempe, AZ.</p>
          <p className="font-mono text-xs uppercase tracking-widest">Lahore → Tempe → Everywhere</p>
        </div>
      </footer>
    </section>
  )
}
