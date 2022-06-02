import styles from "./ContactSection.module.css";
import Button from "../utils/button/Button";
import Phone from '../../../public/icons/phone.svg'
import Plane from '../../../public/icons/plane.svg'
import FB from '../../../public/icons/facebook.svg'
import IG from '../../../public/icons/instagram.svg'
import LI from '../../../public/icons/linkedin.svg'
import YT from '../../../public/icons/youtube.svg'
import SectionHeader from "../utils/sectionHeader/SectionHeader";

function ContactSection() {
  return (
    <>
      <SectionHeader text='Contact Us' />
      <section className={styles.contactSectionContainer}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Drop Us <br />
              <span>A Line</span>
            </h2>
            <p className={styles.copy}>
              We are a visulal production company, specializing in ariel drone
              videography and photography.
            </p>
            <div className={styles.iconBox}>
              <p>
                <Phone className={styles.icon} />
                623-665-6555
              </p>
              <p>
                <Plane className={styles.icon} />
                hello@email.com
              </p>
              <div className={styles.socials}>
                <FB className={styles.socialIcon} />
                <IG className={styles.socialIcon} />
                <LI className={styles.socialIcon} />
                <YT className={styles.socialIcon} />
              </div>
            </div>
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
                  <label htmlFor='message'>
                    Tell Me About Your Business...
                  </label>
                </div>
                <div className={styles.btnContainer}>
                  <div className={styles.containerBtn}>
                    <Button text='Send Message' color='tertiary' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
