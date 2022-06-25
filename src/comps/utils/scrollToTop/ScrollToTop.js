import React, { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {visible && (
        <div className={styles.scrollToTop} onClick={scrollToTop}>
        <div className={styles.icon}>
            △
        </div>
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
