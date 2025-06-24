"use client";
import { useState, useEffect } from "react";
import styles from "./AccountForm.module.css";

export default function AccountForm() {
  const [userData, setUserData] = useState({ firstName: "", lastName: "", phone: "", email: "" });

  useEffect(() => {
    const saved = localStorage.getItem("userData");
    if (saved) setUserData(JSON.parse(saved));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Дані збережено!");
  };

  return (
    <div className={styles.main}>
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
    </div>
  );
}
