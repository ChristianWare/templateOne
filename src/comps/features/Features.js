import styles from "./Features.module.css";
import Plane from "../../../public/icons/plane.svg";

function Features() {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h2 className={styles.heading}>FEATURES</h2>
          <div className={styles.copy} lang="en">
            Here are just some of the features that come with everyservice we
            provide. Feel free to reach out to us with more questions. Drone
            Photogrpahy doesn't have to be difficlut. We make it as easy for you
            as possible. In fact, leave the technical stuff to us. Sit back,
            relax, and enjoy your new drone video.
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bxOne}>
            <hr className={styles.divide} />
            <h3 className={styles.feature} lang="en">
              <span>
                <Plane className={styles.icon} />
              </span>
              LIVE STREAM
            </h3>
            <div className={styles.learnMoreBox}>
              <p lang="en">
                Early drone cameras captured video exclusively on an SD card,
                and you downloaded the images at the end of the flight. Many
                newer drones, including the DJI Mavic, Phantom, and Inspire
                series, feature a combination of high-definition video and live
                streaming. That is, the video will stream to your smartphone as
                it is being captured. This real-time or almost real-time imaging
                offers increased flexibility. Some systems will live stream from
                as far as four miles away.
              </p>
            </div>
          </div>
          <div className={styles.bxOne}>
            <hr className={styles.divide} />
            <h3 className={styles.feature} lang="en">
              <span>
                <Plane className={styles.icon} />
              </span>
              LONG BATTERY LIFE
            </h3>
            <div className={styles.learnMoreBox}>
              <p lang="en">
                Some drones offer only half the capacity of others in terms of
                flight time. For example, a value-priced drone may operate off
                of a lithium-ion battery which offers perhaps 7-10 minutes of
                flight time. On the other hand, if you want to keep your drone
                aloft for as long as 20 to 25 minutes or more, a more elaborate
                system with LiPo battery power is important.
              </p>
            </div>
          </div>
          <div className={styles.bxOne}>
            <hr className={styles.divide} />
            <h3 className={styles.feature} lang="en">
              <span>
                <Plane className={styles.icon} />
              </span>
              HDR
            </h3>
            <div className={styles.learnMoreBox}>
              <p lang="en">
                HDR stands for High Dynamic Range. The dynamic range is the
                difference between the lightest highlight and the darkest shadow
                in a photo. In certain lighting scenarios, usually during
                sunrise or sunset or shooting directly into the sun, no matter
                what your camera settings are, it is impossible to avoid having
                blown out highlights or completely black shadows.
              </p>
            </div>
          </div>
          <div className={styles.bxOne}>
            <hr className={styles.divide} />
            <h3 className={styles.feature} lang="en">
              <span>
                <Plane className={styles.icon} />
              </span>
              TRIPOD MODE
            </h3>
            <div className={styles.learnMoreBox}>
              <p lang="en">
                Tripod Mode is an extremely versatile intelligent flight mode
                available on the DJI Spark, Mavic Pro, Mavic Air, Phantom 4,
                Phantom 4 Pro, and Phantom 4 Advanced. It enables fine control
                of your drone by limiting the maximum speed and reducing the
                braking distance. By giving you more control of your drone,
                Tripod Mode makes it easy to record smooth footage and cinematic
                shots for a variety of projects and applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
