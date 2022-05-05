import styles from '../styles/about.module.css'
import PageIntro from '../src/comps/PageIntro';
import BG from "../public/images/bg.jpg";

function about() {
  return (
    <section>
      <PageIntro
        src={BG}
        heading='About Page'
        copy='Want to learn more about who we are? Our About page will introduce you to our leader and our wonderful team. Call us today!'
      />
    </section>
  );
}

export default about;
