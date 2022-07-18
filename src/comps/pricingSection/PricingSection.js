import styles from "./PricingSection.module.css";
import SectionHeader from "../utils/sectionHeader/SectionHeader";

function PricingSection() {
  return (
    <section id='pricing'>
      <SectionHeader text='Our plans' />
      <div className={styles.content}>
        <div className={styles.prices}>
          <div className={styles.plan}>
            <h2 className={styles.planHeading}>Plan 1</h2>
            <h3 className={styles.planPrice}>$100</h3>
            <ul>
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
              <li>feature 4</li>
              <li>feature 5</li>
            </ul>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planHeading}>Plan 2</h2>
            <h3 className={styles.planPrice}>$200</h3>
            <ul>
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
              <li>feature 4</li>
              <li>feature 5</li>
            </ul>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planHeading}>Plan 3</h2>
            <h3 className={styles.planPrice}>$300</h3>
            <ul>
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
              <li>feature 4</li>
              <li>feature 5</li>
            </ul>
          </div>
        </div>
        <div className={styles.leaderContainer}>
          <div className={styles.leaderInfo}>
            <div className={styles.top}>
              <h2 className={styles.heading}>Every Plan Comes With...</h2>
              <p className={styles.copy} lang='en'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                natus ipsum commodi ut, itaque ipsa dicta autem aut expedita eos
                totam ratione consectetur porro ullam ex vero animi nulla?
                Obcaecati quasi architecto fugit. Accusantium hic facilis
                dolores soluta exercitationem qui quidem asperiores quod quae
                voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
