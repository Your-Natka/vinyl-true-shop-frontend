"use client";
import styles from '../Footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Навігація */}
        <div className={styles.column}>
          <a href="#" className={styles.link}>Політика конфіденційності</a>
          <a href="#" className={styles.link}>Контакти</a>
          <a href="#" className={styles.link}>Повернення</a>
          <a href="#" className={styles.link}>Доставка і оплата</a>
        </div>

        <div className={styles.column}>
          <a href="#" className={styles.link}>Платівки</a>
          <a href="#" className={styles.link}>Про нас</a>
          <a href="#" className={styles.link}>Відгуки</a>
          <a href="#" className={styles.link}>Сертифікати</a>
        </div>

        {/* Контакти */}
        <div className={styles.columns}>
          <p className={styles.title}>Newsletter</p>
          <p className={styles.link}>Sign up for our newsletter to get the latest updates.</p>
          <div className={styles.subscribe}>
            <input
            type="email"
            placeholder="example@gmail.com"
            className={styles.input}
          />
            <button className={styles.button}>Підписатись</button>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
