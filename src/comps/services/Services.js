import Link from "next/link";
import styles from "./Services.module.css";
function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesBoxes}>
        <div className={styles.bx1}>
          <h3>Automotive</h3>
          <p>
            Put your customers in the driver's seat! We create personalized
            packages for car dealerships to increase sales.
          </p>
          <Link href="/services/#service1">
            <h4>READ MORE</h4>
          </Link>
        </div>
        <div className={styles.bx1}>
          <h3>Real Estate</h3>
          <p>
            Give potential buyers a bird’s eye view of your entire property
            using our high quality drone photographs and videos.
          </p>
          <Link href="/services/#service2">
            <h4>READ MORE</h4>
          </Link>
        </div>
        <div className={styles.bx1}>
          <h3>360 VR</h3>
          <p>
            Extreme Aerial Productions uses the most advanced drone technology
            to create 360 panoramic videos.
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
