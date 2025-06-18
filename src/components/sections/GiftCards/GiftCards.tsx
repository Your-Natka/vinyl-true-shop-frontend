"use client";

import styles from "./GiftCards.module.css";
import Image from "next/image";

const giftcards = [
  { id: 1, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 200₴" },
  { id: 2, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 300₴" },
  { id: 3, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 500₴" },
  { id: 4, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 800₴" },
  { id: 5, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 1000₴" },
];

export default function GiftCards() {
  return (
    <section className={styles.giftCardsSection}>
      <h2 className={styles.title}>Подарункові сертифікати</h2>
      <div className={styles.grid}>
        {giftcards.map(({ id, image, label }) => (
          <div key={id} className={styles.card}>
            <img src={image} alt={label} className={styles.image} />
            <div className={styles.heartIcon}>
            <Image src="/icons/heart.svg" alt="heart" width={47} height={47} />
            </div>
            <div className={styles.label}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
