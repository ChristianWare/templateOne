import styles from "./ContactSection.module.css";
import Button from "./utils/Button";

function ContactSection() {
  return (
    <section className={styles.contactSectionContainer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Drop Us <br />
            <span>A Line</span>
          </h2>
          <p className={styles.copy}>
            Here are the best ways to contact us. Feel free to reach out at any
            time that is good for you.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.contactForm}>
            <form className={styles.formBox}>
              <div className={styles.inputBox50}>
                <input id='name' type='text' required />
                <label htmlFor='name'>Name</label>
              </div>
              <div className={styles.inputBox50}>
                <input id='email' type='text' required />
                <label htmlFor='email'>Email Address</label>
              </div>
              <div className={styles.inputBox50}>
                <input id='phone' type='text' required />
                <label htmlFor='phone'>Phone #</label>
              </div>
              <div className={styles.inputBox100}>
                <textarea id='message' required></textarea>
                <label htmlFor='message'>Tell Me About Your Business...</label>
              </div>
              <div className={styles.btnContainer}>
                <div className={styles.containerBtn}>
                  <Button text="Send Message" color='tertiary' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
