"use client";

import styles from "./About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Ліва частина */}
        <div className={styles.leftSide}>
          <h2 className={styles.title}>Про нас</h2>

          <div className={styles.textColumns}>
            <p className={`${styles.textFirst} ${styles.alignRight}`}>
              Роки колекціонування та дігінгу, дозволили зібрати таку кількість платівок, 
              якої для однієї людини буде забагато, саме тому вирішили, що час не тільки 
              збирати але й продавати! 
            </p>
            <p className={`${styles.textSecond} ${styles.alignLeft}`}>
              Ми маємо багато нових та старих релізів, вінтажних, таких яких дуже багато, 
              і таких які трапляються дуже рідко. Від початку 20 сторіччя до сьогодення!
            </p>
            <p className={`${styles.textThird} ${styles.alignRight}`}>
              З радістю пропонуємо вам великий асортимент, який як і наш всесвіт постійно 
              розширюється. А якщо чогось не знайшли, можливе передзамовлення.
            </p>
          </div>

          <div className={styles.starIcon}>
            <Image src="/icons/star.svg" alt="Star" width={47} height={47} />
          </div>
        </div>

        {/* Права частина */}
        <div className={styles.rightSide}>
          <div className={styles.imagesWrapper}>
   
            <div className={styles.alexanderPhoto}>
              <Image
                src="/images/owner-photo-1x.jpg"
                alt="Олександр Тимко"
                width={463}
                height={437}
                className={styles.mainPhoto}
              />
              <p className={styles.photoCaption}>Авторський проєкт<br />Олександр Тимко</p>
            </div>

            <div className={styles.diskImage}>
              <Image 
                src="/images/vinyl-disk.png" 
                alt="Вініловий диск" 
                width={442} 
                height={447}
              />
            </div>

            <div className={styles.hashtag}>
              <span className={styles.underline}>#</span>VinylTrue
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

