import styles from "../styles/contact.module.css";
import PageIntro from "../src/comps/utils/pageIntro/PageIntro";
import BG from "../public/images/bg9.jpg";

function contact() {
  return (
    <section>
      <PageIntro
        src={BG}
        heading='the 411'
        copy='Ready to level up your business? Here are the best ways to get in tou with us. Call us today!'
      />
      <iframe
        className={styles.test}
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.3134166996715!2d-112.36213599999999!3d33.467189999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b3898959f89b5%3A0x73df44b466b2b7d2!2sResidence%20Inn%20by%20Marriott%20Phoenix%20Goodyear!5e0!3m2!1sen!2sus!4v1655857796884!5m2!1sen!2sus'
        width='100%'
        height='450'
        styles='border:0;'
        allowFullScreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6654.22006162332!2d-112.39180454130859!3d33.4985143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b47a690ae4b97%3A0xd6790e451739dcd4!2s15315%20W%20Turney%20Ave%2C%20Goodyear%2C%20AZ%2085395!5e0!3m2!1sen!2sus!4v1672513693343!5m2!1sen!2sus'
        width='100%'
        height='450'
        styles='border:0;'
        allowFullScreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
      ;
    </section>
  );
}

export default contact;

