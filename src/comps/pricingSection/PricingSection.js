import styles from "./PricingSection.module.css";
import SectionHeader from "../utils/sectionHeader/SectionHeader";

function PricingSection() {
  return (
    <section id="pricing">
      <SectionHeader text="Our plans" />
      <div className={styles.content}>
        <div className={styles.prices}>
          <div className={styles.plan}>
            <h2 className={styles.planHeading}>Plan 1</h2>
            <h3 className={styles.planPrice}>$100</h3>
            <ul>
              <li>15 HDR Images</li>
              <li>4 Orbital video clips</li>
              <li>1-2 min Branded Video</li>
              <li>Clould Storage</li>
              <li>1 Revision</li>
            </ul>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planHeading}>Plan 2</h2>
            <h3 className={styles.planPrice}>$200</h3>
            <ul>
              <li>20 HDR Images</li>
              <li>7 Orbital video clips</li>
              <li>2-3 min Branded Video</li>
              <li>Clould Storage</li>
              <li>3 Revisions</li>
            </ul>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planHeading}>Plan 3</h2>
            <h3 className={styles.planPrice}>$300</h3>
            <ul>
              <li>25 HDR Images</li>
              <li>9 Orbital video clips</li>
              <li>3-4 min Branded Video</li>
              <li>Clould Storage</li>
              <li>5 Revisions</li>
            </ul>
          </div>
        </div>
        <div className={styles.leaderContainer}>
          <div className={styles.leaderInfo}>
            <div className={styles.top}>
              <h2 className={styles.heading}>Every Plan Comes With...</h2>
              <p className={styles.copy} lang="en">
                Standard shot list: Photos will be taken at 100' and 350' from
                the cardinal directions, depending on FAA height limits - N, NE,
                E, SE, E, SW, W. Panoramas will be shot from a height of 100
                feet, subject to FAA limits on height. Videos are taken from a
                number of viewpoints and altitudes to provide a variety of views
                of the ground.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
