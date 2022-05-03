import styles from "./Portfolio.module.css";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/images/bg.jpg";

function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <SectionHeader text='Our Work' />
      <div className={styles.content}>
        <div className={styles.boxContainer}>
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
          <Link href='/services/#beards' passHref>
            <div className={styles.box3}>
              <h5>Beards</h5>

              <a></a>
            </div>
          </Link>
          <Link href='/services/#haircuts' passHref>
            <div className={styles.box4}>
              <h5>Hair Cuts</h5>
              <a></a>
            </div>
          </Link>
          <div className={styles.box5}>
            <Image
              src={img1}
              alt='barber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div9 className={styles.boxContainer2}>
          <div className={styles.box1B}>
            <Image
              src={img1}
              alt='barber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <Link href='/services/#children' passHref>
            <div className={styles.box2B}>
              <h5>Children</h5>

              <a></a>
            </div>
          </Link>
          <div className={styles.box3B}>
            <Image
              src={img1}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <Link href='/services/#haircuts' passHref>
            <div className={styles.box4B}>
              <h5>Hair Cuts</h5>
              <a></a>
            </div>
          </Link>
          <div className={styles.box5B}>
            <Image
              src={img1}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div9>
      </div>
    </div>
  );
}

export default Portfolio;
