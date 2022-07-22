import styles from "./WhyChooseUs.module.css";
import Plane from "../../../public/icons/plane.svg";
import SectionHeader from "../utils/sectionHeader/SectionHeader";

function WhyChooseUs() {
  return (
    <div className={styles.wcuContainer}>
      <SectionHeader
        text='why us?'
        side='right'
        outlineText='outlineTextRight'
      />
      <div className={styles.bottom}>
        <div className={styles.reasonBoxes}>
          <div className={styles.reason}>
            <Plane className={styles.icon} />
            <h3>Professional</h3> 
            <p>
              We are professional. period. We know what it takes to navugate these waters. 
            </p>
          </div>
          <div className={styles.reason}>
            <Plane className={styles.icon} />
            <h3>Experienced</h3>
            <p>
              We have been doing this for a long time. You will be glad you chose us. 
            </p>
          </div>
          <div className={styles.reason}>
            <Plane className={styles.icon} />
            <h3>Punctual</h3>
            <p>
              We deliver all work on time, for every project. We pride ourselves on providing you what you need in a timley manner. 
            </p>
          </div>
          <div className={styles.reason}>
            <Plane className={styles.icon} />
            <h3>Passionate</h3>
            <p>
              Our passion can clearly be seen in the work we put out. We won't fininsh a project unless u it is picture perfect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
