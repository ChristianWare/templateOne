import styles from './Star.module.css'
import StarIcon from '../../../public/icons/star.svg'

function Star() {
    return (
      <div className={styles.starContainer}>
        <StarIcon className={styles.star} />
        <StarIcon className={styles.star} />
        <StarIcon className={styles.star} />
        <StarIcon className={styles.star} />
        <StarIcon className={styles.star} />
      </div>
    );
}

export default Star
