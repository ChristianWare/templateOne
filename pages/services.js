import PageIntro from "../src/comps/utils/pageIntro/PageIntro";
import styles from "../styles/servicesPage.module.css";
import BG from "../public/images/bg1.jpg";
import img1 from "../public/images/bg2.jpg";
import img2 from "../public/images/bg3.jpg";
import img3 from "../public/images/bg4.jpg";
import Features from "../src/comps/features/Features";
import SingleService from "../src/comps/utils/singleService/SingleService";

function services() {
  return (
    <section>
      <PageIntro
        src={BG}
        heading="what we do"
        copy="Here are a list of the services that we provide. You will also find information on the features that come with each service. If you have any questions feel free to reach out to us at any time."
      />
      <div id="service1">
        <SingleService
          header="Service One"
          price="$100"
          src={img1}
          angle="left"
          outlineText="outlineTextLeft"
          jc="flexEnd"
          btnDirection="btnRight"
        />
      </div>
      <div id="service2">
        <SingleService
          header="Service Two"
          price="$200"
          src={img2}
          angle="right"
          outlineText="outlineTextRight"
        />
      </div>
      <div id="service3">
        <SingleService
          header="Service Three"
          price="$300"
          src={img3}
          angle="left"
          outlineText="outlineTextLeft"
          jc="flexEnd"
          btnDirection="btnRight"
        />
      </div>
      <Features />
    </section>
  );
}

export default services;
