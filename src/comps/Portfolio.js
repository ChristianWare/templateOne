import styles from './Portfolio.module.css'
import SectionHeader from './SectionHeader'

function Portfolio() {
    return (
        <div className={styles.portfolioContainer}>
           <SectionHeader text="Our Work" />
        </div>
    )
}

export default Portfolio
