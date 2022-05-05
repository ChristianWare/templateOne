import styles from '../styles/contact.module.css'
import ContactSection from '../src/comps/ContactSection'
import PageIntro from "../src/comps/PageIntro";
import BG from "../public/images/bg.jpg";

function contact() {
    return (
      <section>
        <PageIntro
          src={BG}
          heading='Contact Us'
          copy='Ready to level up your business? Here are the best ways to get in touch with us. Call us today!'
        />
        <ContactSection />
      </section>
    );
}

export default contact
