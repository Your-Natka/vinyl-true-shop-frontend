"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Sale.module.css";

interface Product {
  id: number;
  title: string;
  artist: string;
  category: string;
  oldPrice: number;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Midnight Wave",
    artist: "Nightowl",
    category: "Синтвейв",
    oldPrice: 980,
    price: 860,
    image: "/albums/6.jpg",
  },
  {
    id: 2,
    title: "Soul Escape",
    artist: "Vibra",
    category: "Соул",
    oldPrice: 920,
    price: 790,
    image: "/albums/7.jpg",
  },
  {
    id: 3,
    title: "Acid Jazz",
    artist: "Jazzen",
    category: "Джаз",
    oldPrice: 1050,
    price: 890,
    image: "/albums/8.jpg",
  },
  {
    id: 4,
    title: "Deep Indie",
    artist: "Moodhouse",
    category: "Інді",
    oldPrice: 880,
    price: 720,
    image: "/albums/1.jpg",
  },
  {
    id: 5,
    title: "Echoes",
    artist: "Reverie",
    category: "Альтернатива",
    oldPrice: 950,
    price: 810,
    image: "/albums/2.jpg",
  },
  {
    id: 6,
    title: "Fusion Lab",
    artist: "JazzRoot",
    category: "Ф'южн",
    oldPrice: 990,
    price: 850,
    image: "/albums/3.jpg",
  },
];

const PAGE_SIZE = 5;

export default function Sale() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const visibleProducts = products.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <section className={styles.sale}>
      <h2 className={styles.title}>Розпродаж</h2>

      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          {visibleProducts.map((p) => (
            <div key={p.id} className={styles.card}>
              <Image src={p.image} alt={p.title} width={160} height={160} className={styles.image} />
              <div className={styles.heartIcon}>
                <Image className={styles.heart} 
                src="/icons/heart_white, stroke=1.svg" 
                alt="heart" width={24} height={24} />
                <Image className={styles.heart} 
                src="/icons/scales_white, stroke=1.svg" 
                alt="heart" width={24} height={24} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.album}>{p.title}</h3>
                <p className={styles.artist}>{p.artist}</p>
                <span className={styles.category}>{p.category}</span>
                <div className={styles.priceBlock}>
                  <span className={styles.oldPrice}>{p.oldPrice} грн</span>
                  <span className={styles.price}>{p.price} грн</span>
                </div>
              </div>
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
          <span key={i} className={`${styles.dot} ${i === page ? styles.dotActive : ""}`} />
        ))}
      </div>
    </section>
  );
}
