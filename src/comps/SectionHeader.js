import styles from "./SectionHeader.module.css";

function SectionHeader({ text, side="left" }) {
  return (
    <div className={styles.sectionHeaderContainer}>
      <div className={`${styles[side]}`}>
        <h2 className={styles.sectionHeading}>{text}</h2>
      </div>
    </div>
  );
}

export default SectionHeader;
