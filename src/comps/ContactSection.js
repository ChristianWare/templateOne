import styles from "./ContactSection.module.css";

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
            <div className={styles.contactTop}>
              <div className={styles.inputBox}>
                <input type='text' id='name' required />
                <label htmlFor='name'>Name</label>
              </div>
              <div className={styles.inputBox}>
                <input type='text' id='Company' required />
                <label htmlFor='company'>Company</label>
              </div>
              <div className={styles.inputBox}>
                <input type='text' id='Phone' required />
                <label htmlFor='phone'>Phone #</label>
              </div>
              <div className={styles.inputBox}>
                <input type='text' id='Email' required />
                <label htmlFor='email'>Email</label>
              </div>
              <div className={styles.inputBox}>
                <input type='text' id='message' required />
                <label htmlFor='message'>A Brief description here...</label>
              </div>
            </div>
            <div className={styles.contactBottom}>
              <h3>Services</h3>
              <div className={styles.checkBoxes}>
                <div className={styles.check}>
                  <input type='checkbox' id='option1' name='option1' />
                  <label htmlFor='option1'>Option1</label>
                </div>
                <div className={styles.check}>
                  <input type='checkbox' id='option1' name='option1' />
                  <label htmlFor='option1'>Option1</label>
                </div>
                <div className={styles.check}>
                  <input type='checkbox' id='option1' name='option1' />
                  <label htmlFor='option1'>Option1</label>
                </div>
                <div className={styles.check}>
                  <input type='checkbox' id='option1' name='option1' />
                  <label htmlFor='option1'>Option1</label>
                </div>
                <div className={styles.check}>
                  <input type='checkbox' id='option1' name='option1' />
                  <label htmlFor='option1'>Option1</label>
                </div>
                <div className={styles.check}>
                  <input type='checkbox' id='option1' name='option1' />
                  <label htmlFor='option1'>Option1</label>
                </div>
                <div className={styles.check}>
                  <input type='checkbox' id='option1' name='option1' />
                  <label htmlFor='option1'>Option1</label>
                </div>
                <div className={styles.check}>
                  <input type='checkbox' id='option1' name='option1' />
                  <label htmlFor='option1'>Option1</label>
                </div>
                <div className={styles.check}>
                  <input type='checkbox' id='option1' name='option1' />
                  <label htmlFor='option1'>Option1</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
