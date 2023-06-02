import { useState } from "react";
import styles from "./ContactSection.module.css";
import Phone from "../../../public/icons/phone.svg";
import Plane from "../../../public/icons/plane.svg";
import FB from "../../../public/icons/facebook.svg";
import IG from "../../../public/icons/instagram.svg";
import LI from "../../../public/icons/linkedin.svg";
import YT from "../../../public/icons/youtube.svg";
import Check from '../../../public/icons/checked.svg'
import SectionHeader from "../utils/sectionHeader/SectionHeader";

function ContactSection() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputs.name && inputs.email && inputs.phone && inputs.message) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }

        setForm({
          state: "success",
          message: "Your message was sent successfully.",
        });
        setInputs({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        setForm({
          state: "error",
          message: "Something went wrong",
        });
      }
    }
  };

  return (
    <>
      <SectionHeader
        text="Contact Us"
        side="right"
        outlineText="outlineTextRight"
      />
      <section className={styles.contactSectionContainer}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Drop Us <br />
              <span>A Line</span>
            </h2>
            <p className={styles.copy}>If you can dream it, we can drone it!</p>
            <div className={styles.iconBox}>
              <p>
                <Phone className={styles.icon} />
                480-808-2054
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
              <form
                className={styles.formBox}
                onSubmit={(e) => onSubmitForm(e)}
              >
                <div className={styles.inputBox50}>
                  <input
                    id="name"
                    value={inputs.name}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className={styles.inputBox50}>
                  <input
                    id="email"
                    value={inputs.email}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className={styles.inputBox50}>
                  <input
                    id="phone"
                    value={inputs.phone}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                  <label htmlFor="phone">Phone #</label>
                </div>
                <div className={styles.inputBox100}>
                  <textarea
                    id="message"
                    value={inputs.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label htmlFor="message">
                    Your message here...
                  </label>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.btn} text="Send Message" color="tertiary">Send Message</button>
                </div>
                {form.state === "loading" ? (
              <div className={styles.msg}>Sending....</div>
            ) : form.state === "error" ? (
              <div className={styles.msg}>{form.message}</div>
            ) : (
              form.state === "success" && (
                <div className={styles.msg}>
                  <Check className={styles.icon2} />
                  Sent successfully! We'll be in touch soon.
                </div>
              )
            )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
