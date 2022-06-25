import styles from "./PageIntro.module.css";
import Image from "next/image";

function PageIntro({ src = "/public/images/bg.jpg", heading, copy }) {
  return (
    <section className={styles.pageIntroContainer}>
      <div className={styles.imgContainer}></div>
      <Image src={src} layout='fill' objectFit='cover' className={styles.img} />
      <div className={styles.content}>
        <div className={styles.headingCopy}>
          <h1 className={styles.heading}>{heading}</h1>
          <h2 className={styles.copy}>{copy}</h2>
        </div>
      </div>
    </section>
  );
}

export default PageIntro;
