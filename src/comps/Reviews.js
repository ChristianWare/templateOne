import styles from "./Reviews.module.css";
import SectionHeader from "./SectionHeader";
import img1 from "../../public/images/bg.jpg";
import Image from "next/image";
import Star from "./utils/Star";

function Reviews() {
  return (
    <div className={styles.reviewsContainer}>
      <SectionHeader text='Reviews' side='right' />
      <div className={styles.content}>
        <div className={styles.reviewBoxes}>
          <div className={styles.review}>
            <Image src={img1} width='100' height='100' className={styles.img} />
            <h3>Review 1</h3>
            <Star />
            <p>
              "We are a visulal production company, specializing in ariel drone
              videography and photography."
            </p>
          </div>
          <div className={styles.review}>
            <Image src={img1} width='100' height='100' className={styles.img} />
            <h3>Review 2</h3>
            <Star />
            <p>
              "We are a visulal production company, specializing in ariel drone
              videography and photography."
            </p>
          </div>
          <div className={styles.review}>
            <Image src={img1} width='100' height='100' className={styles.img} />
            <h3>Review 3</h3>
            <Star />
            <p>
              "We are a visulal production company, specializing in ariel drone
              videography and photography."
            </p>
          </div>
          <div className={styles.review}>
            <Image src={img1} width='100' height='100' className={styles.img} />
            <h3>Review 4</h3>
            <Star />
            <p>
              "We are a visulal production company, specializing in ariel drone
              videography and photography."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;