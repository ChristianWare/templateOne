import Hero from "../src/comps/Hero";
import AboutSection from "../src/comps/AboutSection";
import Misc from "../src/comps/Misc";
import WhyChooseUs from "../src/comps/WhyChooseUs";
import Portfolio from "../src/comps/Portfolio";
import Reviews from "../src/comps/Reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Misc />
      <WhyChooseUs />
      <Portfolio />
      <Reviews />
    </div>
  );
}
