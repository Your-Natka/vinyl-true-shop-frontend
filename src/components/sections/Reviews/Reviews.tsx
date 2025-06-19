"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";

const reviews = [
  {
    id: 1,
    image: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Все супер! Уже друге замовлення — і знову топ.",
    author: "Lyandra Cromwell",
    rating: 5,
  },
  {
    id: 2,
    image: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Платівки якісні, доставили швидко.",
    author: "Mark Benson",
    rating: 4,
  },
  {
    id: 3,
    image: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Дякую за рідкісний реліз! Дуже задоволений.",
    author: "Anna Kostina",
    rating: 5,
  },
  {
    id: 4,
    image: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Професіонали своєї справи!",
    author: "Ivan Petrenko",
    rating: 5,
  },
  {
    id: 5,
    image: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Найкращий сервіс для меломанів!",
    author: "Olga Melnyk",
    rating: 5,
  },
  {
    id: 6,
    image: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Замовляв вперше, все сподобалось.",
    author: "Oleg Ivanov",
    rating: 5,
  },
];

const PAGE_SIZE = 5;

export default function Reviews() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / PAGE_SIZE);
  const visible = reviews.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>Відгуки</h2>

      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          {visible.map((r) => (
            <div key={r.id} className={styles.card}>
              <Image
                src={r.image}
                alt="review"
                width={183}
                height={183}
                className={styles.image}
              />
              <div className={styles.info}>
                <p className={styles.text}>{r.text}</p>

                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < r.rating ? styles.starActive : styles.star}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <div className={styles.authorBlock}>
                  <Image
                    src={r.avatar}
                    alt={r.author}
                    width={24}
                    height={24}
                    className={styles.avatar}
                  />
                  <span className={styles.author}>{r.author}</span>
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
