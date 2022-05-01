import styles from "./Services.module.css";
function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.servicesBoxes}>
        <div className={styles.bx1}>
          <h3>Service One</h3>
          <p>
            Services details description filler text will go her in this very
            spot.
          </p>
          <h4>READ MORE</h4>
        </div>
        <div className={styles.bx1}>
          <h3>Service One</h3>
          <p>
            Services details description filler text will go her in this very
            spot.
          </p>
          <h4>READ MORE</h4>
        </div>
        <div className={styles.bx1}>
          <h3>Service One</h3>
          <p>
            Services details description filler text will go her in this very
            spot.
          </p>
          <h4>READ MORE</h4>
        </div>
      </div>
    </div>
  );
}

export default Services;
