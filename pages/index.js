import Hero from "../src/comps/Hero";
import Services from "../src/comps/services";
import AboutSection from "../src/comps/AboutSection";
import Misc from "../src/comps/Misc";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutSection />
      <Misc />
    </div>
  );
}
