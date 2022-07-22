import styles from "./WhyChooseUs.module.css";
import Plane from "../../../public/icons/plane.svg";
import Hat from "../../../public/icons/hat.svg";
import Glasses from "../../../public/icons/glasses.svg";
import Camera from "../../../public/icons/camera.svg";
import Arrows from "../../../public/icons/arrows.svg";
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
            <Hat className={styles.icon} />
            <h3>Professional</h3> 
            <p lang="en">
              We are professional. period. We know what it takes to navugate these waters. 
            </p>
          </div>
          <div className={styles.reason}>
            <Glasses className={styles.icon} />
            <h3>Experienced</h3>
            <p lang="en">
              We have been doing this for a long time. You will be glad you chose us. 
            </p>
          </div>
          <div className={styles.reason}>
            <Camera className={styles.icon} />
            <h3>Punctual</h3>
            <p lang="en">
              We deliver all work on time, for every project. We pride ourselves on providing you what you need in a timley manner. 
            </p>
          </div>
          <div className={styles.reason}>
            <Arrows className={styles.icon} />
            <h3>Passionate</h3>
            <p lang="en">
              Our passion can clearly be seen in the work we put out. We won't fininsh a project unless u it is picture perfect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
