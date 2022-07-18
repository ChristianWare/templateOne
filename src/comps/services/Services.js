import Link from "next/link";
import styles from "./Services.module.css";
function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesBoxes}>
        <div className={styles.bx1}>
          <h3>Service 1</h3>
          <p>
            Services details description filler text will go her in this very
            spot.Services details description filler text will go her in this
            very spot.
          </p>
          <Link href="/services/#service1">
            <h4>READ MORE</h4>
          </Link>
        </div>
        <div className={styles.bx1}>
          <h3>Service 2</h3>
          <p>
            Services details description filler text will go her in this very
            spot.Services details description filler text will go her in this
            very spot.
          </p>
          <Link href="/services/#service2">
            <h4>READ MORE</h4>
          </Link>
        </div>
        <div className={styles.bx1}>
          <h3>Service 3</h3>
          <p>
            Services details description filler text will go her in this very
            spot.Services details description filler text will go her in this
            very spot.
          </p>
          <Link href="/services/#service3">
            <h4>READ MORE</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
