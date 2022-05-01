import styles from "./Hero.module.css";
import Button from "./utils/Button";
import Image from "next/image";
import BG from "../../public/images/bg.jpg";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.imgContainer}></div>
      <Image src={BG} layout='fill' objectFit='cover' className={styles.img} />
      <div className={styles.content}>
        <h1 className={styles.heading}>
          From Eye Level <br /> to <span>Sky Level</span>
        </h1>
        <p className={styles.copy}>
          We are a visulal production company, specializing in ariel drone
          videography and photography. We are a visulal production company.
        </p>
        <div className={styles.btnContainer}>
          <Button text='Contact Us' />
          <Button text='See Pricing' color='primaryOutline2' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
