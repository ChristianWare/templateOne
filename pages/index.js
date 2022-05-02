import Hero from '../src/comps/Hero'
import Services from '../src/comps/services'
import AboutSection from '../src/comps/AboutSection'
import Mics from '../src/comps/Mics'


export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutSection />
      <Mics />
    </div>
  )
}
