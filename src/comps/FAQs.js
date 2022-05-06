import React, { useState } from "react";
import Image from "next/image";
import styles from "./FAQsection.module.css";
import data from './data'
import SingleQuestion from "./SingleQuestion";
import BG from '../../public/images/bg.jpg'


function FAQsection() {
  const [questions, setQuestions] = useState(data);

  return (
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
  );
}

export default FAQsection;