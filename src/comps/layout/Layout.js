import styles from "./Layout.module.css";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import ScrollIndicator from "../utils/ScrollIndicator/ScrollIndicator";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.layout}>
          <ScrollIndicator />
          {/* <ScrollToTop /> */}
          <Nav />
          {children}
          {/* <PreFooter /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout; 
