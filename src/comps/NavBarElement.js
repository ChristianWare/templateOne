import styles from "./NavbarElement.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Phone from "../../public/icons/phone.svg";
import Plane from "../../public/icons/plane.svg";

function NavBarElement() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Link href='/' passHref>
          <div className={styles.navLeft}>
            <span className={styles.navbarLogo}>
              <a title='Company Name'>LOGO</a>
            </span>
          </div>
        </Link>
        <div className={styles.navRight}>
          <ul className={styles.navmenu}>
            <li
              className={`${styles.navItem} ${
                router.pathname === "/" ? styles.activeRouter : ""
              }`}
            >
              <Link href='/' passHref>
                <a title='Home Page'>Home</a>
              </Link>
            </li>
            <li
              className={`${styles.navItem} ${
                router.pathname === "/services" ? styles.activeRouter : ""
              }`}
            >
              <Link href='/services' passHref>
                <a title='Services Page'>Services</a>
              </Link>
            </li>
            <li
              className={`${styles.navItem} ${
                router.pathname === "/about" ? styles.activeRouter : ""
              }`}
            >
              <Link href='/about' passHref>
                <a title='About Page'>About</a>
              </Link>
            </li>
            <li
              className={`${styles.navItem} ${
                router.pathname === "/pricing" ? styles.activeRouter : ""
              }`}
            >
              <Link href='/pricing' passHref>
                <a title='Pricing Page'>Pricing</a>
              </Link>
            </li>
            <li
              className={`${styles.navItem} ${
                router.pathname === "/contact" ? styles.activeRouter : ""
              }`}
            >
              <Link href='/contact' passHref>
                <a title='Contact Page'>Contact</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Phone className={styles.phone} />
            </li>
            <li className={styles.navItem}>
              <Plane className={styles.phone} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBarElement;
