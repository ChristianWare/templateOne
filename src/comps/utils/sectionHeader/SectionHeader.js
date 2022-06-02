import styles from "./SectionHeader.module.css";

function SectionHeader({ text, side = "left", outlineText = "outlineTextLeft" }) {
  return (
    <div className={styles.sectionHeaderContainer}>
      <div className={`${styles[side]}`}>
        <p className={`${styles[outlineText]}`}>{text}</p>
      </div>
    </div>
  );
}

export default SectionHeader;
