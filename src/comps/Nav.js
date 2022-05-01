import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Nav.module.css";
import Phone from "../../public/icons/phone.svg";
import Plane from "../../public/icons/plane.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  const router = useRouter();

  useEffect(() => {
    const body = document.querySelector("body");
    if (window.innerWidth <= 953 && isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Link href='/' passHref>
          <div className={styles.navLeft}>
            <span className={styles.navbarLogo}>
              <a title='Company Name'>COMPANY NAME</a>
            </span>
          </div>
        </Link>
        <div className={styles.navRight}>
          <ul
            onClick={openMenu}
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li
              className={`${styles.navItem} ${
                router.pathname === "/" ? styles.activeRouter : ""
              }`}
            >
              <Link href='/' passHref>
                <a title='Home Page' onClick={openMenu}>
                  Home
                </a>
              </Link>
            </li>
            <li
              className={`${styles.navItem} ${
                router.pathname === "/services" ? styles.activeRouter : ""
              }`}
            >
              <Link href='/services' passHref>
                <a title='Services Page' onClick={openMenu}>
                  Services
                </a>
              </Link>
            </li>
            <li
              className={`${styles.navItem} ${
                router.pathname === "/about" ? styles.activeRouter : ""
              }`}
            >
              <Link href='/about' passHref>
                <a title='About Page' onClick={openMenu}>
                  About
                </a>
              </Link>
            </li>
            <li
              className={`${styles.navItem} ${
                router.pathname === "/pricing" ? styles.activeRouter : ""
              }`}
            >
              <Link href='/pricing' passHref>
                <a title='Pricing Page' onClick={openMenu}>
                  Pricing
                </a>
              </Link>
            </li>
            <li
              className={`${styles.navItem} ${
                router.pathname === "/contact" ? styles.activeRouter : ""
              }`}
            >
              <Link href='/contact' passHref>
                <a title='Contact Page' onClick={openMenu}>
                  Contact
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Phone className={styles.phone1} />
              <div className={styles.phoneContainer}>
                <p className={styles.phoneNumber}>
                  <Phone className={styles.phone} />
                  623-448-8997
                </p>
              </div>
            </li>
            <li className={styles.navItem}>
              <Plane className={styles.phone1} />
              <div className={styles.phoneContainer}>
                <p className={styles.phoneNumber}>
                  <Plane className={styles.phone} /> email@company.com
                </p>
              </div>
            </li>
          </ul>

          <span
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Nav;
