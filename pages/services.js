import PageIntro from "../src/comps/PageIntro";
import styles from "../styles/servicesPage.module.css";
import BG from '../public/images/bg.jpg'

function services() {
  return (
    <section>
      <PageIntro
        src={BG}
        heading='Services Page'
        copy='Here are a list of the services that we provide. You will also find information on the features that come with each service. If you have any questions feel free to reach out to us at any time.'
      />
    </section>
  );
}

export default services;
