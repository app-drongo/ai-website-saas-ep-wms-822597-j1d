import Hero from '@/components/sections/home/Hero'
import Contact from '@/components/sections/home/Contact'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}