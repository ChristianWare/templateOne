import styles from "./Misc.module.css";
import Button from "./utils/Button";
import Image from "next/image";
import img1 from "../../public/images/bg.jpg";

function Misc() {
  return (
    <div className={styles.miscContainer}>
      <div className={styles.content}>
        <div className={styles.imgOverlay}></div>
        <div className={styles.imgContainer}>
          <Image
            src={img1}
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.infoBoxContainer}>
          <div className={styles.infoBox}>
            <h3>Misc Content Here</h3>
            <p lang='en'>
              We are a visulal production company, specializing in ariel drone
              videography and photography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Misc;
