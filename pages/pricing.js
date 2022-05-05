import styles from "../styles/pricing.module.css";
import PageIntro from "../src/comps/PageIntro";
import BG from "../public/images/bg.jpg";

function pricing() {
  return (
    <section>
      <PageIntro
        src={BG}
        heading='Pricing Page'
        copy='Our pricies are the most affordable in the business. You can pay on a monthly basis, or annually to save 30%. Feel free to call us if you have any questions.'
      />
    </section>
  );
}

export default pricing;
