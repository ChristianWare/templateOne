import Hero from "../src/comps/Hero";
import Services from "../src/comps/services";
import AboutSection from "../src/comps/AboutSection";
import Misc from "../src/comps/Misc";
import WhyChooseUs from "../src/comps/WhyChooseUs";
import Portfolio from "../src/comps/Portfolio";
import Reviews from "../src/comps/Reviews";
import ContactSection from "../src/comps/ContactSection";
import IndvService from "../src/comps/IndvService";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Services /> */}
      <AboutSection />
      {/* <IndvService text='Our Mission' side='right' /> */}
      <Misc />
      <WhyChooseUs />
      <Portfolio />
      <Reviews />
      <ContactSection />
    </div>
  );
}
