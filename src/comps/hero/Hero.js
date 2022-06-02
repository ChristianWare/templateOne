import styles from "./Hero.module.css";
import Button from "../utils/button/Button";
import Image from "next/image";
import BG from "../../../public/images/bg.jpg";
import Services from "../services/Services";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.imgOverlay}></div>
      <Image src={BG} layout='fill' objectFit='cover' />
      <div className={styles.content}>
        <h1 className={styles.heading}>
          From Eye Level <br /> to <span>Sky Level</span>
        </h1>
        <h2 className={styles.copy}>
          We are a visulal production company, specializing in ariel drone
          videography and photography.
        </h2>
        <div className={styles.btnContainer}>
          <Button text='Contact Us' />
          <Button text='See Pricing' color='primaryOutline2' />
        </div>
        <Services />
      </div>
    </section>
  );
}

export default Hero;
