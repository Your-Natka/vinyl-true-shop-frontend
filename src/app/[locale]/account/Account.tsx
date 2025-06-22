"use client";

import { useEffect, useState } from "react";
import styles from "./Account.module.css";
import Link from "next/link";

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
    <div className={styles.accountPage}>
      <aside className={styles.sidebar}>
        <h2>Редагувати мої дані</h2>
        <ul>
          <li><strong>Мої дані</strong></li>
          <li><Link href="#">Моя адреса</Link></li>
          <li><Link href="#">Методи оплати</Link></li>
        </ul>

        <h2>Мої замовлення</h2>
        <ul>
          <li><Link href="#">В процесі</Link></li>
          <li><Link href="#">Виконані</Link></li>
          <li><Link href="#">Всі</Link></li>
        </ul>

        <ul>
          <li><Link href="#">Обране</Link></li>
          <li><Link href="#">Порівняння</Link></li>
          <li><Link href="#">Вийти</Link></li>
          <li>
            <button className={styles.deleteBtn} onClick={handleDelete}>
              Видалити акаунт
            </button>
          </li>
        </ul>
      </aside>

      <main className={styles.formSection}>
        <h1>Мій акаунт</h1>
        <div className={styles.formGroup}>
          <label>Прізвище</label>
          <input type="text" name="lastName" className={styles.input} 
          value={userData.lastName} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Ім’я</label>
          <input type="text" name="firstName" className={styles.input} 
          value={userData.firstName} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Номер телефону</label>
          <input type="tel" name="phone" className={styles.input} 
          value={userData.phone} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input type="email" name="email" className={styles.input} 
          value={userData.email} onChange={handleChange} />
        </div>
        <button className={styles.saveBtn} onClick={handleSave}>
          Зберегти зміни
        </button>
      </main>
    </div>
  );
}