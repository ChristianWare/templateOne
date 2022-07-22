import styles from './PhotoGroup.module.css'
import Image from 'next/image'
import BG from '../../../../public/images/bg.jpg'
import BG1 from '../../../../public/images/bg1.jpg'
import BG2 from '../../../../public/images/bg2.jpg'
import BG3 from '../../../../public/images/bg3.jpg'
import BG4 from '../../../../public/images/bg4.jpg'
import BG5 from '../../../../public/images/bg5.jpg'
import BG6 from '../../../../public/images/bg6.jpg'
import BG7 from '../../../../public/images/bg7.jpg'
import BG8 from '../../../../public/images/bg8.jpg'
import BG9 from '../../../../public/images/d1.jpg'
import BG10 from '../../../../public/images/d2.jpg'
import BG11 from '../../../../public/images/d3.jpg'
import BG12 from '../../../../public/images/d4.jpg'
import BG13 from '../../../../public/images/d5.jpg'
import BG14 from '../../../../public/images/d6.jpg'
import BG15 from '../../../../public/images/d7.jpg'
import BG16 from '../../../../public/images/d8.jpg'
import BG17 from '../../../../public/images/d9.jpg'
import BG18 from '../../../../public/images/d10.jpg'
import BG19 from '../../../../public/images/d13.jpg'
import BG20 from '../../../../public/images/d16.jpg'

function PhotoGroup() {
    return (
      <div className={styles.gallery}>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.vStretch}`}>
          <Image src={BG1} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.hStretch}`}>
          <Image src={BG2} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG3} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG20} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.vStretch}`}>
          <Image src={BG4} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.bigStretch}`}>
          <Image src={BG5} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG6} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.hStretch}`}>
          <Image src={BG7} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG8} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG9} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG10} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.vStretch}`}>
          <Image src={BG11} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG12} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.bigStretch}`}>
          <Image src={BG13} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG14} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.hStretch}`}>
          <Image src={BG15} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG16} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.bigStretch}`}>
          <Image src={BG17} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG18} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG19} layout='fill' objectFit='cover' />
        </div>
      </div>
    );
}

export default PhotoGroup
