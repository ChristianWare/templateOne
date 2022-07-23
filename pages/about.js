import styles from "../styles/about.module.css";
import PageIntro from "../src/comps/utils/pageIntro/PageIntro";
import BG from "../public/images/bg8.jpg";
import p1 from "../public/images/p1.jpg";
import p2 from "../public/images/p2.jpg";
import p3 from "../public/images/p3.jpg";
import p4 from "../public/images/p4.jpg";
import p5 from "../public/images/p5.jpg";
import IndvService from "../src/comps/utils/indvService/IndvService";
import SectionHeader from "../src/comps/utils/sectionHeader/SectionHeader";
import Image from "next/image";
import FAQsection from "../src/comps/faqs/FAQs";

function about() {
  return (
    <section>
      <PageIntro
        src={BG}
        heading="About Our Company"
        copy="Want to learn more about who we are? Our About page will introduce you to our leader and our wonderful team. Call us today!"
      />
      <div className={styles.content}>
        <IndvService text="our Mission" heading="Deliver Greatness" />
        <SectionHeader
          text="Our Leader"
          side="right"
          outlineText="outlineTextRight"
        />
        <div className={styles.leaderContainer}>
          <div className={styles.leaderInfo}>
            <div className={styles.top}>
              <h2 className={styles.heading}>Doug &quot;The Pug&quot; De La Vega</h2>
              <p className={styles.copy} lang="en">
                Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth
                Mittens grooming vaccine walk swimming nest good boy furry
                tongue heel furry treats fish. Cage run fast kitten dinnertime
                ball run foot park fleas throw house train licks stick
                dinnertime window. Yawn litter fish yawn toy pet gate throw
                Buddy kitty wag tail ball groom crate ferret heel wet nose Rover
                toys pet supplies.
              </p>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={p1}
                layout="fill"
                objectFit="cover"
                className={styles.img}
              />
            </div>
          </div>
        </div>
        <SectionHeader text="Our Team" side="center" />
        <div className={styles.team}>
          <div className={styles.ee}>
            <div className={styles.eeImageContainer}>
              <Image
                src={p2}
                layout="fill"
                objectFit="cover"
                className={styles.img}
              />
            </div>
            <h3>Robby</h3>
            <p>
              Puppy kitty ipsum dolor sit good dog throw wet nose paws barky
              dragging tuxedo running nest cockatiel tongue.
            </p>
          </div>
          <div className={styles.ee}>
            <div className={styles.eeImageContainer}>
              <Image
                src={p3}
                layout="fill"
                objectFit="cover"
                className={styles.img}
              />
            </div>
            <h3>Devon</h3>
            <p>
              Harness slobbery birds pet supplies dragging paws cockatiel bird
              commands treats scratch left paw food chew stay grooming crate
              cage park paws.
            </p>
          </div>
          <div className={styles.ee}>
            <div className={styles.eeImageContainer}>
              <Image
                src={p4}
                layout="fill"
                objectFit="cover"
                className={styles.img}
              />
            </div>
            <h3> Brinzley</h3>
            <p>
              Water leash critters cage gimme five slobber. Bird Food kisses run
              fast wet nose purr slobbery run cage chew bedding food scratch
              leash dog house dinnertime roll over slobbery right paw.
            </p>
          </div>
          <div className={styles.ee}>
            <div className={styles.eeImageContainer}>
              <Image
                src={p5}
                layout="fill"
                objectFit="cover"
                className={styles.img}
              />
            </div>
            <h3>King</h3>
            <p>
              Cage Fido yawn chow swimming Rover bark Scooby snacks house train
              hamster. Food small animals slobbery smooshy running sit. Throw
              bedding parrot Scooby snacks biscuit bark Spike furry.
            </p>
          </div>
        </div>
        <FAQsection />
      </div>
    </section>
  );
}

export default about;

/* <IndvService text='our Mission' heading='Deliver Greatness' direction='reverse' side='right' /> */
