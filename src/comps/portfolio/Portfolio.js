import styles from "./Portfolio.module.css";
import SectionHeader from "../utils/sectionHeader/SectionHeader";
import Image from "next/image";
import img1 from "../../../public/images/d7.jpg";
import img2 from "../../../public/images/d2.jpg";
import img3 from "../../../public/images/d3.jpg";
import img4 from "../../../public/images/d4.jpg";
import img5 from "../../../public/images/d5.jpg";
import img6 from "../../../public/images/d6.jpg";
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
              src={img2}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.box3}>
            <h5>Skydio 2+</h5>
          </div>

          <div className={styles.box4}>
            <h5>DJI Mini SE</h5>
            <a></a>
          </div>

          <div className={styles.box5}>
            <Image
              src={img3}
              alt='barber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div9>
        <div className={styles.boxContainer2}>
          <div className={styles.box1B}>
            <Image
              src={img4}
              alt='barber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.box2B}>
            <h5>EXO Cinemaster 2</h5>
          </div>
          <div className={styles.box3B}>
            <Image
              src={img5}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.box4B}>
            <h5>Matrice 300</h5>
          </div>
          <div className={styles.box5B}>
            <Image
              src={img6}
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
