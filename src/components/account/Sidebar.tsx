"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const handleDelete = () => {
    localStorage.removeItem("userData");
    alert("Акаунт видалено!");
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h3 className={styles.sectionTitle}>Редагувати мої дані</h3>
        <ul className={styles.linkList}>
          <li>
            <Link
              href="/account/personal"
              className={isActive("/account/personal") ? styles.active : ""}
            >
              Мої дані
            </Link>
          </li>
          <li>
            <Link
              href="/account/addresses"
              className={isActive("/account/addresses") ? styles.active : ""}
            >
              Моя адреса
            </Link>
          </li>
          <li>
            <Link
              href="/account/payment"
              className={isActive("/account/payment") ? styles.active : ""}
            >
              Методи оплати
            </Link>
          </li>
        </ul>

        <h3 className={styles.sectionTitle}>Мої замовлення</h3>
        <ul className={styles.linkList}>
          <li><Link href="#">В процесі</Link></li>
          <li><Link href="#">Виконані</Link></li>
          <li><Link href="#">Всі</Link></li>
        </ul>
        <ul className={styles.linkList}>
          <li>
            <Link href="/account/favorites">
              <span className={styles.sectionTitle}>Обране</span>
            </Link>
          </li>
          <li>
            <Link href="/account/compare">
              <span className={styles.sectionTitle}>Порівняння</span>
            </Link>
          </li>
          <li className={styles.iconItem}>
            <Image src="/icons/exit.svg" alt="exit" width={20} height={20} />
            <span>Вийти</span>
          </li>
          <li className={styles.deleteItem} onClick={handleDelete}>
            <Image src="/icons/bin.svg" alt="bin" width={20} height={20} />
            <span>Видалити акаунт</span>
          </li>
        </ul>
      </aside>
    </div>
  );
}
