"use client";

import { useState } from "react";
import styles from "./GiftCards.module.css";
import Image from "next/image";

const giftcards = [
  { id: 1, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 200 грн." },
  { id: 2, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 300 грн." },
  { id: 3, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 500 грн." },
  { id: 4, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 800 грн." },
  { id: 5, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 1000 грн." },
  { id: 6, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 1500 грн." },
  { id: 7, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 2000 грн." },
  { id: 8, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 3000 грн." },
  { id: 9, image: "/images/vinyl+bag.jpg", label: "Подарунковий сертифікат 5000 грн." },
];

const CARDS_PER_PAGE = 5;

export default function GiftCards() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(giftcards.length / CARDS_PER_PAGE);

  const start = page * CARDS_PER_PAGE;
  const visibleCards = giftcards.slice(start, start + CARDS_PER_PAGE);

  return (
    <section className={styles.giftCardsSection}>
      <h2 className={styles.title}>Подарункові сертифікати</h2>

      <div className={styles.grid}>
        <div className={styles.slider}>
          {visibleCards.map(({ id, image, label }) => (
            <div key={id} className={styles.card}>
              <img src={image} alt={label} className={styles.image} />
              <div className={styles.heartIcon}>
                <Image src="/icons/heart.svg" alt="heart" width={47} height={47} />
              </div>
              <div className={styles.label}>{label}</div>
            </div>
          ))}
        </div>

        <div className={styles.navRight}>
          <button
            className={`${styles.arrow} ${page === 0 ? styles.disabled : styles.active}`}
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
          >
            &lt;
          </button>
          <button
            className={`${styles.arrow} ${page === totalPages - 1 ? styles.disabled : styles.active}`}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className={styles.dotsWrapper}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === page ? styles.dotActive : ""}`}
            onClick={() => setPage(i)}
          />
        ))}
      </div>
    </section>
  );
}
