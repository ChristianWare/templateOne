import styles from './IndvService.module.css'
import SectionHeader from '../../utils/sectionHeader/SectionHeader';
import Button from '../button/Button';
import Image from 'next/image'
import img1 from '../../public/images/bg.jpg'

function IndvService({ text, side, direction='normal', heading }) {
    return (
      <section className={styles.aboutSectionContainer}>
        <SectionHeader text={text} side={side} />
        <div className={styles[direction]}>
          <div className={styles.bottomLeft}>
            <h3>{heading}</h3>
            <p lang='en'>
              We are a visulal production company, specializing in ariel drone
              videography and photography. We are a visulal production company,
              specializing in ariel drone videography and photography.
            </p>
            <div className={styles.btnContainer}>
              <Button text='request a quote' color='tertiary' />
            </div>
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.imgOverlay}></div>
            <h4>
              We are a visulal production company, specializing in ariel drone
              videography.
            </h4>
            <div className={styles.imgContainer}>
              <Image
                src={img1}
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default IndvService
