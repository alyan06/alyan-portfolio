import { useRef, useState, useEffect } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  useMotionTemplate,
} from "framer-motion"

/* ---------- Scroll reveal wrapper ---------- */
export function Reveal({ children, delay = 0, y = 40, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Section heading with oversized index ---------- */
export function SectionHeading({ index, title, accent = "text-volt" }) {
  return (
    <Reveal className="mb-14 flex items-end gap-5">
      <span className="font-display text-7xl font-black leading-none text-stroke select-none md:text-8xl" aria-hidden="true">
        {index}
      </span>
      <div>
        <span className={`mb-1 block font-mono text-xs uppercase tracking-[0.35em] ${accent}`}>
          section
        </span>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-mist md:text-5xl">
          {title}
        </h2>
      </div>
    </Reveal>
  )
}

/* ---------- Spotlight card (cursor-tracking radial glow) ---------- */
export function SpotlightCard({ children, className = "", glow = "59, 130, 246" }) {
  const ref = useRef(null)
  const mx = useMotionValue(-400)
  const my = useMotionValue(-400)
  const background = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(${glow}, 0.12), transparent 70%)`

  function onMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { mx.set(-400); my.set(-400) }}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-300 hover:border-zinc-600 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background }}
        aria-hidden="true"
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

/* ---------- Magnetic button ---------- */
export function MagneticButton({ children, className = "", href, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 16 })
  const sy = useSpring(y, { stiffness: 200, damping: 16 })

  function onMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25)
  }

  const Tag = href ? motion.a : motion.button
  return (
    <Tag
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-full font-display font-bold uppercase tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-volt focus-visible:ring-offset-2 focus-visible:ring-offset-void ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

/* ---------- Animated counter ---------- */
export function Counter({ value, decimals = 0, suffix = "", duration = 1.6, className = "" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}{suffix}
    </span>
  )
}

/* ---------- Tilt card (3D perspective on hover) ---------- */
export function TiltCard({ children, className = "" }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 180, damping: 18 })
  const sry = useSpring(ry, { stiffness: 180, damping: 18 })

  function onMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ry.set(px * 10)
    rx.set(-py * 10)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { rx.set(0); ry.set(0) }}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d", perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Image placeholder ---------- */
export function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-zinc-700 bg-ink text-center ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <div className="px-4 py-8">
        <svg className="mx-auto mb-2 h-8 w-8 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 19.5h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z" />
        </svg>
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">{label}</p>
      </div>
    </div>
  )
}
