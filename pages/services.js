import PageIntro from "../src/comps/utils/pageIntro/PageIntro";
import styles from "../styles/servicesPage.module.css";
import BG from "../public/images/bg.jpg";
import Image from "next/image";
import Features from "../src/comps/features/Features";
import SectionHeader from "../src/comps/utils/sectionHeader/SectionHeader";
import SingleService from "../src/comps/utils/singleService/SingleService";

function services() {
  return (
    <section>
      <PageIntro
        src={BG}
        heading='Services Page'
        copy='Here are a list of the services that we provide. You will also find information on the features that come with each service. If you have any questions feel free to reach out to us at any time.'
      />
      <SingleService
        header='Service One'
        src={BG}
        angle='left'
        outlineText='outlineTextLeft'
        jc='flexEnd'
        btnDirection='btnRight'
      />
      <SingleService
        header='Service Two'
        src={BG}
        angle='right'
        outlineText='outlineTextRight'
      />
      <SingleService
        header='Service Three'
        src={BG}
        angle='left'
        outlineText='outlineTextLeft'
        jc='flexEnd'
        btnDirection='btnRight'
      />

      {/* <SectionHeader
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
      </div> */}
      <Features />
    </section>
  );
}

export default services;
