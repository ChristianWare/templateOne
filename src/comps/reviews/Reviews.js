import styles from "./Reviews.module.css";
import SectionHeader from "../utils/sectionHeader/SectionHeader";
import img1 from "../../../public/images/r1.jpg";
import img2 from "../../../public/images/r2.jpg";
import img3 from "../../../public/images/r3.jpg";
import img4 from "../../../public/images/r4.jpg";
import Image from "next/image";
import Star from "../utils/star/Star";

function Reviews() {
  return (
    <div className={styles.reviewsContainer}>
      <SectionHeader
        text='Reviews'
        side='right'
        outlineText='outlineTextRight'
      />
      <div className={styles.content}>
        <div className={styles.reviewBoxes}>
          <div className={styles.review}>
            <div className={styles.imgContainer}>
              <Image
                src={img1}
                layout='fill'
                objectFit="cover"
                className={styles.img}
              />
            </div>
            <h3>Review 1</h3>
            <Star />
            <p>
              "Minions ipsum jiji bananaaaa uuuhhh gelatooo."
            </p>
          </div>
          <div className={styles.review}>
            <div className={styles.imgContainer}>
              <Image
                src={img2}
                layout='fill'
                objectFit="cover"
                className={styles.img}
              />
            </div>
            <h3>Review 2</h3>
            <Star />
            <p>
              "Listen to your inner voice."
            </p>
          </div>
          <div className={styles.review}>
            <div className={styles.imgContainer}>
              <Image
                src={img3}
                layout='fill'
                objectFit="cover"
                className={styles.img}
              />
            </div>
            <h3>Review 3</h3>
            <Star />
            <p>
              "I'm not wearing hockey pads."
            </p>
          </div>
          <div className={styles.review}>
            <div className={styles.imgContainer}>
              <Image
                src={img4}
                layout='fill'
                objectFit="cover"
                className={styles.img}
              />
            </div>
            <h3>Review 4</h3>
            <Star />
            <p>
              "The key is to drink coconut, fresh coconut, trust me."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
