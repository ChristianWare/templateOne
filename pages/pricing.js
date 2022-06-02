import styles from "../styles/pricing.module.css";
import PageIntro from "../src/comps/utils/pageIntro/PageIntro";
import BG from "../public/images/bg.jpg";
import SectionHeader from "../src/comps/utils/sectionHeader/SectionHeader";
import FAQs from '../src/comps/faqs/FAQs'

function pricing() {
  return (
    <section>
      <PageIntro
        src={BG}
        heading='Pricing Page'
        copy='Our pricies are the most affordable in the business. You can pay on a monthly basis, or annually to save 30%. Feel free to call us if you have any questions.'
      />
      <SectionHeader text='Our plans' />
      <div className={styles.content}>
        <div className={styles.prices}>
          <div className={styles.plan}>
            <h2 className={styles.planHeading}>Plan 1</h2>
            <h3 className={styles.planPrice}>$100</h3>
            <ul>
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
              <li>feature 4</li>
              <li>feature 5</li>
            </ul>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planHeading}>Plan 2</h2>
            <h3 className={styles.planPrice}>$200</h3>
            <ul>
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
              <li>feature 4</li>
              <li>feature 5</li>
            </ul>
          </div>
          <div className={styles.plan}>
            <h2 className={styles.planHeading}>Plan 3</h2>
            <h3 className={styles.planPrice}>$300</h3>
            <ul>
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
              <li>feature 4</li>
              <li>feature 5</li>
            </ul>
          </div>
        </div>
        <div className={styles.leaderContainer}>
          <div className={styles.leaderInfo}>
            <div className={styles.top}>
              <h2 className={styles.heading}>Every Plan Comes With...</h2>
              <p className={styles.copy} lang='en'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                natus ipsum commodi ut, itaque ipsa dicta autem aut expedita eos
                totam ratione consectetur porro ullam ex vero animi nulla?
                Obcaecati quasi architecto fugit. Accusantium hic facilis
                dolores soluta exercitationem qui quidem asperiores quod quae
                voluptas.
              </p>
            </div>
          </div>
        </div>
        <SectionHeader text="Questions?" side='right' outlineText='outlineTextRight' />
        <FAQs />
      </div>
    </section>
  );
}

export default pricing;
