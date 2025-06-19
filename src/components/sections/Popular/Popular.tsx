"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Popular.module.css";

interface Product {
  id: number;
  title: string;
  artist: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Greatest Hits",
    artist: "Grace Purple",
    category: "Поп",
    price: 860,
    image: "/albums/1.jpg",
  },
  {
    id: 2,
    title: "The Vinyl Era",
    artist: "RetroWave",
    category: "Ретро",
    price: 790,
    image: "/albums/2.jpg",
  },
  {
    id: 3,
    title: "Classic Vibes",
    artist: "Jazzman",
    category: "Джаз",
    price: 950,
    image: "/albums/3.jpg",
  },
  {
    id: 4,
    title: "Electro Soul",
    artist: "SynthMuse",
    category: "Електроніка",
    price: 720,
    image: "/albums/4.jpg",
  },
  {
    id: 5,
    title: "Melody Drive",
    artist: "IndieLight",
    category: "Інді",
    price: 880,
    image: "/albums/5.jpg",
  },
  {
    id: 6,
    title: "Lo-Fi Sessions",
    artist: "LoRider",
    category: "Lo-fi",
    price: 810,
    image: "/albums/6.jpg",
  },
  {
    id: 7,
    title: "Underground Hits",
    artist: "BasementCrew",
    category: "Хіп-хоп",
    price: 870,
    image: "/albums/7.jpg",
  },
];

const PAGE_SIZE = 5;

export default function Popular() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const visibleProducts = products.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <section className={styles.popular}>
      <h2 className={styles.title}>Популярні</h2>

      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          {visibleProducts.map((p) => (
            <div key={p.id} className={styles.card}>
              <Image src={p.image} alt={p.title} width={160} height={160} className={styles.image} />
              <div className={styles.heartIcon}>
                <Image className={styles.heart} src="/icons/heart_white, stroke=1.svg" alt="heart" width={24} height={24} />
                <Image className={styles.heart} src="/icons/scales_white, stroke=1.svg" alt="heart" width={24} height={24} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.album}>{p.title}</h3>
                <p className={styles.artist}>{p.artist}</p>
                <span className={styles.category}>{p.category}</span>
                <p className={styles.price}>{p.price} грн</p>
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
