import { marqueeItems } from "../data"
import { Sparkles } from "lucide-react"

function Strip({ reverse = false, className = "" }) {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`flex shrink-0 items-center gap-8 pr-8 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
            {item}
            <Sparkles className="h-5 w-5 shrink-0 text-volt" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="relative -mx-2 my-4 -rotate-1 border-y border-line bg-ink py-6" aria-label="Highlights ticker">
      <Strip className="text-mist" />
      <Strip reverse className="mt-4 text-stroke" />
    </section>
  )
}
