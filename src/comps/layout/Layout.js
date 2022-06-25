import styles from "./Layout.module.css";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import ScrollIndicator from "../utils/ScrollIndicator/ScrollIndicator";
import ScrollToTop from '../utils/scrollToTop/ScrollToTop'
import FinalCTA from "../finalCTA/FinalCTA";
import ContactSection from "../contactSection/ContactSection";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.layout}>
          <ScrollIndicator />
          <ScrollToTop />
          <Nav />
          {children}
          <ContactSection />
          <FinalCTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
