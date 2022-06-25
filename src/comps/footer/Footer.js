import styles from "./Footer.module.css";
import SectionHeader from "../utils/sectionHeader/SectionHeader";
import NavBarElement from "../utils/navbarElement/NavBarElement";
import Link from "next/link";
import ContactSection from '../contactSection/ContactSection'

function Footer() {
  return (
    <>
    {/* <ContactSection /> */}
      <div className={styles.sectionHeaderContaqiner}>
        <SectionHeader text='call now!' />
      </div>
      <footer className={styles.footerContainer}>
        <div className={styles.footerBottom}>
          <NavBarElement />
          <div className={styles.copyRightContainer}>
            <small>
              Company Name {new Date().getFullYear()} &copy; - All Rights
              Reserved || Designed and Developed by{" "}
              <Link href='https://www.fontsandfooters.com/' passHref>
                <a target='_blank'>Fonts & Footers</a>
              </Link>{" "}
              ||{" "}
              <Link
                href='https://www.fontsandfooters.com/sitemap-0.xml'
                passHref
              >
                <a target='_blank'>Sitemap</a>
              </Link>
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
