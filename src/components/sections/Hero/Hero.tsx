import Image from "next/image";
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
  return (
    <section className={styles.heroSection}>
      <div className={styles.logoText}>
        <div className={styles.overlay}>
          <h1 className={styles.logoTitle}>
            <span className={styles.wordTop}>Vinyl</span>
            <span className={styles.logoImage}>
              <Image
                src="/images/vinyl-disk.png"
                alt="Vinyl icon"
                width={344}
                height={344}
                priority
              />
            </span>
            <span className={styles.wordBottom}>True</span>
          </h1>
        </div>

        <p className={styles.slogan}>[ Для насолоди ]</p>

        <button className={styles.ctaButton}>Каталог</button>
      </div>

      <div className={styles.albumGallery}>
        <div className={styles.albumRow}>
          {albumCovers.map((src, idx) => (
            <div key={idx} className={styles.albumItem}>
              <Image
                src={src}
                alt={`album-${idx}`}
                width={133}
                height={133}
                className={styles.albumImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
