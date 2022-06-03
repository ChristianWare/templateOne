import styles from './PhotoGroup.module.css'
import Image from 'next/image'
import BG from '../../../../public/images/bg.jpg'

function PhotoGroup() {
    return (
      <div className={styles.gallery}>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.vStretch}`}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.hStretch}`}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.vStretch}`}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.bigStretch}`}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.hStretch}`}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.vStretch}`}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.bigStretch}`}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.hStretch}`}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={`${styles.imgContainer} ${styles.bigStretch}`}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imgContainer}>
          <Image src={BG} layout='fill' objectFit='cover' />
        </div>
      </div>
    );
}

export default PhotoGroup
