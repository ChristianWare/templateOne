import styles from "./AboutSection.module.css";
import Button from "./utils/Button";
import Image from "next/image";
import img1 from "../../public/images/bg.jpg";

function AboutSection() {
  return (
    <section className={styles.aboutSectionContainer}>
      <div className={styles.top}>
        <h2 className={styles.sectionHeading}>About Us</h2>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <h3>Our philosophy & mission</h3>
          <p lang='en'>
            We are a visulal production company, specializing in ariel drone
            videography and photography. We are a visulal production company,
            specializing in ariel drone videography and photography.
          </p>
          <div className={styles.btnContainer}>
            <Button text='request a quote' color='tertiary' />
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.imgOverlay}></div>
          <h4>
            We are a visulal production company, specializing in ariel drone
            videography.
          </h4>
          <div className={styles.imgContainer}>
            <Image
              src={img1}
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
