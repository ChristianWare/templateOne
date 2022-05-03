import Hero from "../src/comps/Hero";
import Services from "../src/comps/services";
import AboutSection from "../src/comps/AboutSection";
import Misc from "../src/comps/Misc";
import WhyChooseUs from "../src/comps/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutSection />
      <Misc />
      <WhyChooseUs />
    </div>
  );
}
