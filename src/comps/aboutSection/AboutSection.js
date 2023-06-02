import styles from "./AboutSection.module.css";
import Button from "../utils/button/Button";
import Image from "next/image";
import img1 from "../../../public/images/d1.jpg";
import SectionHeader from "../utils/sectionHeader/SectionHeader";

function AboutSection() {
  return (
    <section className={styles.aboutSectionContainer}>
      <SectionHeader text='About Us' />
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <h3>Our philosophy & mission</h3>
          <p lang='en'>
          We are passionate about capturing the perfect shot. From taking drone footage for a simple building survey to creating an aerial video that captures an epic action shot for TV or film, our focus is on telling the most captivating story. 
          </p>
          <div className={styles.btnContainer}>
            <Button text='request a quote' color='tertiary' />
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.imgOverlay}></div>
          <h4>
          We are passionate about capturing the perfect shot. Our focus is on telling you the most captivating story vwith our videos.
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
