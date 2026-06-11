import { useState } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Creator", href: "#creator" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-volt via-cyanic to-flare"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="fixed left-4 right-4 top-4 z-40"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-line bg-void/70 px-5 py-3 backdrop-blur-xl">
          <a href="#top" className="font-display text-lg font-black tracking-tight text-mist">
            ALYAN<span className="text-volt">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-soft transition-colors duration-200 hover:bg-panel hover:text-mist"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden cursor-pointer rounded-full bg-volt px-5 py-2 font-display text-sm font-bold uppercase tracking-wide text-black transition-colors duration-200 hover:bg-lime-300 md:block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer rounded-full p-2 text-mist transition-colors hover:bg-panel md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-void/95 p-3 backdrop-blur-xl md:hidden"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium text-soft transition-colors hover:bg-panel hover:text-mist"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
