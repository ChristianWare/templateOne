import PageIntro from "../src/comps/PageIntro";
import styles from "../styles/servicesPage.module.css";
import BG from "../public/images/bg.jpg";
import Image from "next/image";
import Features from "../src/features/Features";
import SectionHeader from "../src/comps/SectionHeader";

function services() {
  return (
    <section>
      <PageIntro
        src={BG}
        heading='Services Page'
        copy='Here are a list of the services that we provide. You will also find information on the features that come with each service. If you have any questions feel free to reach out to us at any time.'
      />
      <SectionHeader text='Service 0ne' />
      <article className={styles.content}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={BG}
          layout='fill'
          objectFit='cover'
          className={styles.img}
        />
        <div className={styles.left}>
          <h2>Service #1</h2>
          <p>
            We are a visulal production company, specializing in ariel drone
            videography and photography. We are a visulal production company, 0
            specializing in ariel drone videography and photography.
          </p>
          <h3>
            We are a visulal production company, specializing in ariel drone
            videography.
          </h3>
        </div>
      </article>

      <SectionHeader
        text='Service Two'
        outlineText='outlineTextRight'
        side='right'
      />
      <div className={styles.content}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={BG}
          layout='fill'
          objectFit='cover'
          className={styles.img}
        />
        <div className={styles.right}></div>
        <div className={styles.left}>
          <h2>Service #2</h2>
          <p>
            We are a visulal production company, specializing in ariel drone
            videography and photography. We are a visulal production company,
            specializing in ariel drone videography and photography.
          </p>
          <h3>
            We are a visulal production company, specializing in ariel drone
            videography.
          </h3>
        </div>
      </div>
      <SectionHeader text='Service Three' />
      <div className={styles.content}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={BG}
          layout='fill'
          objectFit='cover'
          className={styles.img}
        />
        <div className={styles.left}>
          <h2>Service #3</h2>
          <p>
            We are a visulal production company, specializing in ariel drone
            videography and photography. We are a visulal production company,
            specializing in ariel drone videography and photography.
          </p>
          <h3>
            We are a visulal production company, specializing in ariel drone
            videography.
          </h3>
        </div>
        <div className={styles.right}></div>
      </div>
      <Features />
    </section>
  );
}

export default services;
