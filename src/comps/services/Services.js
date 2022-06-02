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
          <h4>READ MORE</h4>
        </div>
        <div className={styles.bx1}>
          <h3>Service 2</h3>
          <p>
            Services details description filler text will go her in this very
            spot.Services details description filler text will go her in this
            very spot.
          </p>
          <h4>READ MORE</h4>
        </div>
        <div className={styles.bx1}>
          <h3>Service 3</h3>
          <p>
            Services details description filler text will go her in this very
            spot.Services details description filler text will go her in this
            very spot.
          </p>
          <h4>READ MORE</h4>
        </div>
      </div>
    </div>
  );
}

export default Services;
