import styles from './PageIntro.module.css'
import Image from "next/image";
import BG from "../../public/images/bg.jpg";
import Services from "./services";

function PageIntro({ src = "/public/images/bg.jpg", heading, copy }) {
  return (
    <section className={styles.pageIntroContainer}>
      <div className={styles.imgContainer}></div>
      <Image src={src} layout='fill' objectFit='cover' className={styles.img} />
      <div className={styles.content}>
        <h1 className={styles.heading}>
          {heading}
        </h1>
        <h2 className={styles.copy}>
          {copy}
        </h2>
      </div>
    </section>
  );
}

export default PageIntro