import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Creator from "./components/Creator"
import Education from "./components/Education"
import Leadership from "./components/Leadership"
import Hobbies from "./components/Hobbies"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="grain min-h-screen bg-void">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Creator />
        <Education />
        <Leadership />
        <Hobbies />
        <Contact />
      </main>
    </div>
  )
}
