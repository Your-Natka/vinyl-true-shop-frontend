"use client";

import { useEffect, useState } from "react";
import styles from "./Account.module.css";
import Link from "next/link";
import Image from "next/image";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function AccountPage() {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("userData");
    if (saved) {
      setUserData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Дані збережено!");
  };

  const handleDelete = () => {
    localStorage.removeItem("userData");
    setUserData({ firstName: "", lastName: "", email: "", phone: "" });
    alert("Акаунт видалено!");
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h3 className={styles.sectionTitle}>Редагувати мої дані</h3>
        <ul className={styles.linkList}>
          <li><Link href="#">Мої дані</Link></li>
          <li><Link href="#">Моя адреса</Link></li>
          <li><Link href="#">Методи оплати</Link></li>
        </ul>

        <h3 className={styles.sectionTitle}>Мої замовлення</h3>
        <ul className={styles.linkList}>
          <li><Link href="#">В процесі</Link></li>
          <li><Link href="#">Виконані</Link></li>
          <li><Link href="#">Всі</Link></li>
        </ul>

        <ul className={styles.linkList}>
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

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Мій акаунт</h1>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Прізвище</label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Ім’я</label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Номер телефону</label>
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </form>

        <div className={styles.buttonContainer}>
          <button onClick={handleSave} className={styles.saveButton}>
            Зберегти зміни
          </button>
        </div>
      </main>
    </div>
  );
}