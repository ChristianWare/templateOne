import styles from "../styles/about.module.css";
import PageIntro from "../src/comps/utils/pageIntro/PageIntro";
import BG from "../public/images/bg.jpg";
import IndvService from "../src/comps/utils/indvService/IndvService";
import SectionHeader from "../src/comps/utils/sectionHeader/SectionHeader";
import Image from "next/image";
import FAQsection from "../src/comps/faqs/FAQs";

function about() {
  return (
    <section>
      <PageIntro
        src={BG}
        heading='Who We Are'
        copy='Want to learn more about who we are? Our About page will introduce you to our leader and our wonderful team. Call us today!'
      />
      <div className={styles.content}>
        <IndvService text='our Mission' heading='Deliver Greatness' />
        <SectionHeader
          text='Our Leader'
          side='right'
          outlineText='outlineTextRight'
        />
        <div className={styles.leaderContainer}>
          <div className={styles.leaderInfo}>
            <div className={styles.top}>
              <h2 className={styles.heading}>Rojelio DeLavega</h2>
              <p className={styles.copy} lang='en'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                natus ipsum commodi ut, itaque ipsa dicta autem aut expedita eos
                totam ratione consectetur porro ullam ex vero animi nulla?
                Obcaecati quasi architecto fugit. Accusantium hic facilis
                dolores soluta exercitationem qui quidem asperiores quod quae
                voluptas.
              </p>
            </div>
            <div className={styles.imgContainer}>
              <Image src={BG} layout='fill' objectFit='cover' className={styles.img} />
            </div>
          </div>
        </div>
        <SectionHeader text='Our Team' side='center' />
        <div className={styles.team}>
          <div className={styles.ee}>
            <div className={styles.eeImageContainer}>
              <Image src={BG} width='100' height='100' className={styles.img} />
            </div>
            <h3>John Smith</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              adipisci porro, maiores dolorem voluptates dignissimos ipsam
              mollitia.
            </p>
          </div>
          <div className={styles.ee}>
            <div className={styles.eeImageContainer}>
              <Image src={BG} width='100' height='100' className={styles.img} />
            </div>
            <h3>John Smith</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              adipisci porro, maiores dolorem voluptates dignissimos ipsam
              mollitia.
            </p>
          </div>
          <div className={styles.ee}>
            <div className={styles.eeImageContainer}>
              <Image src={BG} width='100' height='100' className={styles.img} />
            </div>
            <h3>John Smith</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              adipisci porro, maiores dolorem voluptates dignissimos ipsam
              mollitia.
            </p>
          </div>
          <div className={styles.ee}>
            <div className={styles.eeImageContainer}>
              <Image src={BG} width='100' height='100' className={styles.img} />
            </div>
            <h3>John Smith</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              adipisci porro, maiores dolorem voluptates dignissimos ipsam
              mollitia.
            </p>
          </div>
        </div>
        <FAQsection />
      </div>
    </section>
  );
}

export default about;

/* <IndvService text='our Mission' heading='Deliver Greatness' direction='reverse' side='right' /> */
