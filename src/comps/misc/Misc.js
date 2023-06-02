import styles from "./Misc.module.css";
import Image from "next/image";
import img1 from "../../../public/images/bg.jpg";

function Misc() {
  return (
    <>
      <svg
        styles='visibility: hidden; position: absolute;'
        width='0'
        height='0'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='8' result='blur' />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
              result='goo'
            />
            <feComposite in='SourceGraphic' in2='goo' operator='atop' />
          </filter>
        </defs>
      </svg>
      <div className={styles.miscContainer}>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src={img1}
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
          <div className={styles.infoBoxContainer}>
            <div className={styles.infoBox}>
              <h3>Misc Content Here</h3>
              <p lang='en'>
                We are a visulal production company, specializing in ariel drone
                videography and photography. We are a visulal production
                company, specializing in ariel drone videography and
                photography.We are a visulal production company, specializing in
                ariel drone videography and photography.We are a visulal
                production company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Misc;
