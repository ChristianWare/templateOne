import styles from './FinalCTA.module.css'

function FinalCTA() {
    return (
        <div className={styles.container}>
          <div className={styles.content}>
              <h2 className={styles.heading}>Ready to do business with us?</h2>
              <p className={styles.copy} lang='en'>
                Call us today so that we can get started on your next dream project. WE are open 24 hours a day, so feel free to call us whenever you would like! We are looking forward to your call. 
              </p>
          </div>
        </div>
    );
}

export default FinalCTA
