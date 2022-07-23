import PageIntro from "../src/comps/utils/pageIntro/PageIntro";
import BG from "../public/images/bg1.jpg";
import threed from "../public/images/3d.jpg";
import img3 from "../public/images/bg4.jpg";
import car from "../public/images/carbg.jpg";
import house from "../public/images/house.jpg";
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
          header="Automotive"
          price="$100"
          src={car}
          angle="left"
          outlineText="outlineTextLeft"
          jc="flexEnd"
          btnDirection="btnRight"
          desc="Put your customers in the driver's seat! We create personalized packages for car dealerships that are proven to increase sales. Digitize anything—basic exterior shots, new inventory releases, tent sales and more. It's a quick, efficient and simple way to encourage customers to choose YOUR dealership."
        />
      </div>
      <div id="service2">
        <SingleService
          header="Real Estate"
          price="$200"
          src={house}
          angle="right"
          outlineText="outlineTextRight"
          desc="Give potential buyers a bird’s eye view of your entire property using our high quality drone photographs and videos. Real estate professionals understand the power of offering an impressive visual experience. Increasingly, they’re turning to drone photography, and homeowners can do it too! Aerial real estate photography is one of the most innovative and effective ways to attract buyers."
        />
      </div>
      <div id="service3">
        <SingleService
          header="360 VR"
          price="$300"
          src={threed}
          angle="left"
          outlineText="outlineTextLeft"
          jc="flexEnd"
          btnDirection="btnRight"
          desc="Extreme Aerial Productions uses the most advanced drone technology to create 360 panoramic videos. Our 360 VR drone video service is ideal for creating virtual tours, 3D maps and immersive VR video experiences."
        />
      </div>
      <Features />
    </section>
  );
}

export default services;
