import React from 'react';
import styles from '../Lottery/Lottery.module.css';

const LotterySection = () => {
  return (
    <section className={styles.lotteryWrapper}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <p className={styles.subheading}>[ далі ]</p>
        <h2 className={styles.title}>Поринь у світ вінілу</h2>
        <p className={styles.description}>
          Дізнавайся більше про наші новинки, ексклюзиви та обмежені видання.
        </p>
        <a href="/collection" className={styles.link}>
          Переглянути колекцію
        </a>
      </div>
    </section>
  );
};

export default LotterySection;
