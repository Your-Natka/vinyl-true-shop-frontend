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
            <p>
              Бери участь у розіграші програвача серед покупців, які здійснили замовлення на суму
              від 1500 грн у червні. Переможця оголосимо 1 липня.
            </p>
          </p>
          <p className={styles.paragraph_two}>
            Анонси та самі розіграші відбуваються в Instagram, а переможця обираємо за допомогою рандомайзера. 
            Слідкуйте за новинами Vinyl True на нашій сторінці &nbsp;
            <a
              href="https://www.instagram.com/vinyl_true"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              <Image
                src="/icons/instagram_b.svg"
                alt="Instagram"
                width={16}
                height={16}
                className={styles.icon}
              />
              <span className={styles.hashtag}>Vinyl_true</span>
            </a>
          </p>
        
        </div>

        {/* Right Block */}
        <div className={styles.right}>
          <div className={styles.caption}>[Минулі розіграші]</div>
          <div className={styles.box}>
            <div className={styles.description}>[Для душі]</div>
            <div className={styles.images}>
              {images.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`Розіграш ${idx + 1}`}
                  width={400}
                  height={300}
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
