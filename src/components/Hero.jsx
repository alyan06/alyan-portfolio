import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowDown, Mail } from "lucide-react"
import { profile, stats } from "../data"
import { Counter, MagneticButton } from "./ui"
import { InstagramIcon, GitHubIcon } from "./brands"

const letterContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.3 } },
}
const letter = {
  hidden: { y: "110%", rotate: 6, opacity: 0 },
  show: { y: 0, rotate: 0, opacity: 1, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
}

function KineticWord({ word, className }) {
  return (
    <motion.span variants={letterContainer} initial="hidden" animate="show" className={`flex overflow-hidden ${className}`} aria-label={word}>
      {word.split("").map((ch, i) => (
        <motion.span key={i} variants={letter} className="inline-block" aria-hidden="true">
          {ch}
        </motion.span>
      ))}
    </motion.span>
  )
}

function RoleRotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % profile.roles.length), 2400)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative inline-flex h-8 items-center overflow-hidden align-middle md:h-10">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="whitespace-nowrap font-display font-bold text-volt"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const yBlob1 = useTransform(scrollY, [0, 800], [0, 180])
  const yBlob2 = useTransform(scrollY, [0, 800], [0, -120])
  const heroFade = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 md:px-10">
      {/* Parallax gradient blobs */}
      <motion.div style={{ y: yBlob1 }} className="pointer-events-none absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full bg-pulse/20 blur-[140px]" aria-hidden="true" />
      <motion.div style={{ y: yBlob2 }} className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-flare/15 blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[26rem] w-[26rem] rounded-full bg-cyanic/10 blur-[160px]" aria-hidden="true" />

      {/* Grid lines backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "72px 72px" }}
        aria-hidden="true"
      />

      <motion.div style={{ opacity: heroFade }} className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-5 font-mono text-sm uppercase tracking-[0.4em] text-soft"
        >
          {profile.location}
        </motion.p>

        <h1 className="font-display font-black uppercase leading-[0.85] tracking-tighter">
          <KineticWord word="MUHAMMAD" className="text-[13vw] text-mist md:text-[9rem]" />
          <KineticWord word="ALYAN" className="gradient-text text-[19vw] md:text-[13rem]" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-soft md:text-xl"
        >
          <RoleRotator /> — building software, growing audiences,
          and leading teams from Lahore to Arizona.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects" className="bg-volt px-8 py-4 text-sm text-black hover:bg-lime-300">
            View Projects <ArrowDown className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href={profile.instagram} target="_blank" rel="noopener noreferrer" className="border border-line px-8 py-4 text-sm text-mist hover:border-zinc-500 hover:bg-panel">
            <InstagramIcon className="h-4 w-4" /> @AlyanKiReelLife
          </MagneticButton>
          <div className="flex gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-pointer rounded-full border border-line p-3.5 text-soft transition-colors duration-200 hover:border-zinc-500 hover:text-mist">
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="cursor-pointer rounded-full border border-line p-3.5 text-soft transition-colors duration-200 hover:border-zinc-500 hover:text-mist">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink px-6 py-6">
              <Counter
                value={s.value}
                decimals={s.decimals}
                suffix={s.suffix}
                className="font-display text-3xl font-extrabold text-mist md:text-4xl"
              />
              <p className="mt-1 text-xs uppercase tracking-widest text-soft">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-soft"
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  )
}
