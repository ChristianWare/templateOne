import styles from './Features.module.css'
import Plane from '../../../public/icons/plane.svg'

function Features() {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h2 className={styles.heading}>FEATURES</h2>
          <div className={styles.copy} lang='en'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae possimus quis, rem exercitationem saepe aliquam alias soluta dolorem odio nihil iure provident ducimus dolor voluptatem ipsa iusto sequi blanditiis illum corporis est cumque a quos. Eligendi dicta facilis at illum, consequuntur quo libero laboriosam nesciunt tempora vero molestias magni!
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bxOne}>
            <hr className={styles.divide} />
            <h3 className={styles.feature} lang='en'>
              <span>
                <Plane className={styles.icon} />
              </span>
              RESPONSIVE
            </h3>
            <div className={styles.learnMoreBox}>
              <p lang='en'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quae? Perferendis accusantium, sed harum eligendi tempore quia, ad facere consectetur tenetur odio commodi modi perspiciatis iste at exercitationem cupiditate hic.
              </p>
            </div>
          </div>
          <div className={styles.bxOne}>
            <hr className={styles.divide} />
            <h3 className={styles.feature} lang='en'>
              <span>
                <Plane className={styles.icon} />
              </span>
              ACCESSIBLE
            </h3>
            <div className={styles.learnMoreBox}>
              <p lang='en'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, obcaecati pariatur ab suscipit commodi aspernatur, accusantium ea minus molestiae beatae exercitationem vel velit consequatur perferendis quasi impedit laudantium nemo? Corporis?
              </p>
            </div>
          </div>
          <div className={styles.bxOne}>
            <hr className={styles.divide} />
            <h3 className={styles.feature} lang='en'>
              <span>
                <Plane className={styles.icon} />
              </span>
              SEARCH ENGINE OPTIMIZED
            </h3>
            <div className={styles.learnMoreBox}>
              <p lang='en'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, vel debitis. Facere accusantium, ipsam voluptatum iusto nulla quaerat dolore eius repellat nesciunt, rerum esse perferendis voluptas soluta, nobis at architecto.
              </p>
            </div>
          </div>
          <div className={styles.bxOne}>
            <hr className={styles.divide} />
            <h3 className={styles.feature} lang='en'>
              <span>
                <Plane className={styles.icon} />
              </span>
              PAGE SPEED OPTIMIZED
            </h3>
            <div className={styles.learnMoreBox}>
              <p lang='en'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat aliquid labore excepturi nesciunt nemo libero, facere amet non fugiat natus magni animi. Harum debitis modi nulla deleniti, perspiciatis nesciunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
