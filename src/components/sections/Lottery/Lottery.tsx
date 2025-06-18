"use client";

import styles from "./Lottery.module.css";
import Image from "next/image";

const images = [
  "/albums/lottery-1.jpg",
  "/albums/lottery-2.jpg",
  "/albums/lottery-3.jpg",
  "/albums/lottery-4.jpg",
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
          <p className={styles.paragraph_two}>
            Анонси та самі розіграші відбуваються в Instagram, а переможця обираємо за допомогою рандомайзера. Слідкуйте за новинами Vinyl True на нашій сторінці
          </p>
          <div className={styles.hashtag}>#Vinyl_true</div>
        </div>

        {/* Right Block */}
        <div className={styles.right}>
          <div className={styles.caption}>[Минулі розіграші]</div>
          <div className={styles.box}>
            <div className={styles.description}>[Для душі]</div>
            <div className={styles.images}>
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`lottery-${idx}`}
                  className={styles.image}
                />
              ))}
            </div>
          </div>
          <div className={styles.starIcon}>
            <Image src="/icons/star.svg" alt="Star" width={47} height={47} />
          </div>
        </div>
      </div>
    </section>
  );
}
