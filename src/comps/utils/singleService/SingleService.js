import styles from "./SingleService.module.css";
import SectionHeader from "../sectionHeader/SectionHeader";
import Image from "next/image";
import Button from "../button/Button";

function SingleService({
  header,
  src,
  price,
  angle = "",
  outlineText = "",
  jc = "",
  btnDirection = "",
}) {
  return (
    <article>
      <SectionHeader text={header} side={angle} outlineText={outlineText} />
      <div className={`${styles.content} ${styles[jc]}`}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={src}
          layout='fill'
          objectFit='cover'
          className={styles.img}
        />
        <div className={`${styles.headingCopyContainer} ${styles[angle]}`}>
          <h2 className={styles.heading}>{header}{" "} : {price}</h2>
          <p className={styles.copy} lang='en'>
            We are a visulal production company, specializing in ariel drone
            videography and photography. We are a visulal production company,
            specializing in ariel drone videography and photography. We are a
            visulal production company, specializing in ariel drone videography
            and photography.
          </p>
        </div>
        <div className={`${styles.btnContainer} ${styles[btnDirection]}`}>
          <Button text='call us' color='primary' />
          <Button text='contact' color='primaryOutline2' />
        </div>
      </div>
    </article>
  );
}

export default SingleService;
