import styles from '../styles/contact.module.css'
import PageIntro from "../src/comps/utils/pageIntro/PageIntro";
import BG from "../public/images/bg.jpg";

function contact() {
    return (
      <section>
        <PageIntro
          src={BG}
          heading='the 411'
          copy='Ready to level up your business? Here are the best ways to get in touch with us. Call us today!'
        />
      </section>
    );
}

export default contact
