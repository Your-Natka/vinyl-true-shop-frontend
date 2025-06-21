"use client";

import styles from "./CartPage.module.css";
import { useCart } from "@/store/cart";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, incrementItem, decrementItem, totalPrice } = useCart();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Кошик</h1>

      {items.length === 0 ? (
        <p className={styles.empty}>Кошик порожній</p>
      ) : (
        <div className={styles.table}>
          {items.map(item => (
            <div key={item.id} className={styles.row}>
              <Image src={item.imageUrl} alt={item.title} width={60} height={60} className={styles.image} />
              <div className={styles.details}>
                <h4>{item.title}</h4>
                <p>{item.artist}</p>
              </div>

              <div className={styles.counter}>
                <button onClick={() => decrementItem(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementItem(item.id)}>+</button>
              </div>

              <div className={styles.price}>
                {item.price * item.quantity} грн
              </div>

              <button onClick={() => removeItem(item.id)} className={styles.remove}>×</button>
            </div>
          ))}

          <div className={styles.total}>
            Разом: <strong>{totalPrice} грн</strong>
          </div>

          <div className={styles.actions}>
            <Link href="/" className={styles.back}>Продовжити покупки</Link>
            <Link href="/checkout" className={styles.order}>Перейти до замовлення</Link>
          </div>
        </div>
      )}
    </div>
  );
}
