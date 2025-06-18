"use client";

import styles from "./Lottery.module.css";

const images = [
  "/album/lottery/1.jpg",
  "/album/lottery/2.jpg",
  "/album/lottery/3.jpg",
  "/album/lottery/4.jpg",
  "/album/lottery/5.jpg",
];

export default function Lottery() {
  return (
    <section className={styles.lottery}>
      <div className={styles.container}>
        {/* Left Block */}
        <div className={styles.left}>
          <h2 className={styles.title}>Лотерея</h2>
          <p className={styles.paragraph}>
            Мрієш поповнити свою колекцію вінілом або зробити перший крок у світ аналогового звучання? Ми даруємо тобі таку можливість!
          </p>
          <p className={styles.paragraph}>
            Анонси та самі розіграші відбуваються в Instagram, а переможця обираємо за допомогою рандомайзера. Слідкуйте за новинами Vinyl True на нашій сторінці
          </p>
          <div className={styles.hashtag}>#Vinyl_true</div>
        </div>

        {/* Right Block */}
        <div className={styles.right}>
          <div className={styles.caption}>Минулі розіграші</div>
          <div className={styles.grid}>
            {/* Основні 3 видимі */}
            <img src={images[0]} alt="disc-1" className={styles.disc + " " + styles.disc1} />
            <img src={images[1]} alt="disc-2" className={styles.disc + " " + styles.disc2} />
            <img src={images[2]} alt="disc-3" className={styles.disc + " " + styles.disc3} />

            {/* Центральний диск з написом */}
            <div className={styles.centerDisc}>[Для душі]</div>

            {/* Декоративні бликові диски */}
            <img src={images[3]} alt="blur-1" className={styles.blur + " " + styles.blur1} />
            <img src={images[4]} alt="blur-2" className={styles.blur + " " + styles.blur2} />
          </div>
          <div className={styles.handle}>@Vinyl_true</div>
        </div>
      </div>
    </section>
  );
}
