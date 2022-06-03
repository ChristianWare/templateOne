import styles from "./Portfolio.module.css";
import SectionHeader from "../utils/sectionHeader/SectionHeader";
import Image from "next/image";
import img1 from "../../../public/images/bg.jpg";
import Button from "../utils/button/Button";

function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <SectionHeader text='Our Work' />
      <div className={styles.content}>
        <div9 className={styles.boxContainer}>
          <div className={styles.box1}>
            <Image
              src={img1}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.box2}>
            <Image
              src={img1}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.box3}>
            <h5>Key Word</h5>
          </div>

          <div className={styles.box4}>
            <h5>Key Word</h5>
            <a></a>
          </div>

          <div className={styles.box5}>
            <Image
              src={img1}
              alt='barber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div9>
        <div className={styles.boxContainer2}>
          <div className={styles.box1B}>
            <Image
              src={img1}
              alt='barber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.box2B}>
            <h5>Key Word</h5>
          </div>
          <div className={styles.box3B}>
            <Image
              src={img1}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.box4B}>
            <h5>Key Word</h5>
          </div>
          <div className={styles.box5B}>
            <Image
              src={img1}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button text='See All Photos' color='tertiary' />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
