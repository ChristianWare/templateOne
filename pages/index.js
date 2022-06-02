import Hero from "../src/comps/hero/Hero";
import AboutSection from "../src/comps/aboutSection/AboutSection";
import Misc from "../src/misc/Misc";
import WhyChooseUs from "../src/why/WhyChooseUs";
import Portfolio from "../src/comps/portfolio/Portfolio";
import Reviews from "../src/comps/reviews/Reviews";

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
