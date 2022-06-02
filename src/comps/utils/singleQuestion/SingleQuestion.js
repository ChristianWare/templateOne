import React, { useState } from "react";
import styles from "./SingleQuestion.module.css";

function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  const closeHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article
      className={`${styles.questionContainer} ${showInfo ? styles.active : ""}`}
      onClick={closeHandler}
    >
      <div className={styles.header}>
        <h3 className={styles.question}>{title}</h3>
        <p className={styles.btn}>{!showInfo ? "+" : "-"}</p>
      </div>
      {showInfo && (
        <p className={styles.answer} lang='en'>
          {info}
        </p>
      )}
    </article>
  );
}

export default SingleQuestion;
