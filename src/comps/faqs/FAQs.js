import React, { useState } from "react";
import styles from "./FAQsection.module.css";
import data from '../utils/data'
import SingleQuestion from "../utils/singleQuestion/SingleQuestion";
import SectionHeader from '../utils/sectionHeader/SectionHeader'


function FAQsection() {
  const [questions, setQuestions] = useState(data);

  return (
    <>
      <SectionHeader
        text='Questions?'
        side='left'
        outlineText='outlineTextLeft'
      />
      <section className={styles.sectionContainer}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <div className={styles.leftRightContainer}>
            <div className={styles.right}>
              <div className={styles.info}>
                {questions.map((question) => {
                  return <SingleQuestion key={question.id} {...question} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQsection;
