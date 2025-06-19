'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./Hero.module.css";

const albumCovers = [
  "/albums/1.jpg",
  "/albums/2.jpg",
  "/albums/3.jpg",
  "/albums/4.jpg",
  "/albums/5.jpg",
  "/albums/6.jpg",
  "/albums/7.jpg",
  "/albums/8.jpg",
];

export default function Hero() {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const handleShowCatalog = () => {
    router.push("/catalog");
  };

  return (
    <section className={styles.heroSection}>
      {/* Лівий контейнер */}
      <div className={styles.boxLeft}>
        <p className={styles.text}>[ {t("left-box-text")} ]</p>
      </div>

      {/* Правий контейнер */}
      <div className={styles.boxRight}>
        <p className={styles.text}>[ {t("right-box-text")} ]</p>
      </div>

      {/* Центральний контейнер */}
      <div className={styles.heroContent}>
        <div className={styles.heroVisual}>
          <div className={styles.diskBackground}></div>
          <h1 className={styles.logoTitle}>
            <span className={styles.topTitle}>{t("title-1")}</span>
            {t("title-2")}
          </h1>
          <div className={styles.ctaWrapper}>
            <button className={styles.ctaButton} onClick={handleShowCatalog}>
              {t("button-show-catalog")}
            </button>
          </div>
        </div>
      </div>

      {/* Галерея альбомів */}
      <div className={styles.albumGallery}>
        <div className={styles.albumRow}>
          {albumCovers.map((src, idx) => (
            <div key={idx} className={styles.albumItem}>
              <Image
                src={src}
                alt={`album-${idx}`}
                width={130}
                height={130}
                className={styles.albumImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
