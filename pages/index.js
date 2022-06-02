import Hero from "../src/comps/hero/Hero";
import AboutSection from "../src/comps/aboutSection/AboutSection";
import Misc from "../src/comps/misc/Misc";
import WhyChooseUs from "../src/comps/why/WhyChooseUs";
import Portfolio from "../src/comps/portfolio/Portfolio";
import Reviews from "../src/comps/reviews/Reviews";
import PricingSection from "../src/comps/pricingSection/PricingSection";
import FAQsection from "../src/comps/faqs/FAQs";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Misc />
      <WhyChooseUs />
      <Portfolio />
      <PricingSection />
      <Reviews />
      <FAQsection />
    </div>
  );
}
