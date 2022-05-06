import styles from "./WhyChooseUs.module.css";
import Plane from "../../public/icons/plane.svg";
import SectionHeader from "./SectionHeader";

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
            <h3>Reason 1</h3>
            <p>
              We are a visulal production company, specializing in ariel drone
              videography and photography.
            </p>
          </div>
          <div className={styles.reason}>
            <Plane className={styles.icon} />
            <h3>Reason 2</h3>
            <p>
              We are a visulal production company, specializing in ariel drone
              videography and photography.
            </p>
          </div>
          <div className={styles.reason}>
            <Plane className={styles.icon} />
            <h3>Reason 3</h3>
            <p>
              We are a visulal production company, specializing in ariel drone
              videography and photography.
            </p>
          </div>
          <div className={styles.reason}>
            <Plane className={styles.icon} />
            <h3>Reason 4</h3>
            <p>
              We are a visulal production company, specializing in ariel drone
              videography and photography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
