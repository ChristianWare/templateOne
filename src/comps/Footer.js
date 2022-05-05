import styles from "./Footer.module.css";
import SectionHeader from "./SectionHeader";
import Nav from './Nav'
import NavBarElement from "./NavBarElement";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.sectionHeaderContaqiner}>
        <SectionHeader text='call us today!' />
      </div>
      <div className={styles.footerBottom}>
          <NavBarElement />
      </div>
    </footer>
  );
}

export default Footer;
