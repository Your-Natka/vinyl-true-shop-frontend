"use client";

import { useState, useEffect } from "react";
import styles from "./AddressForm.module.css";

export default function AddressForm() {
  const [address, setAddress] = useState({
    city: "",
    street: "",
    building: "",
    apartment: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("userAddress");
    if (saved) setAddress(JSON.parse(saved));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("userAddress", JSON.stringify(address));
    alert("Адресу збережено!");
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.pageTitle}>Моя адреса</h1>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Місто</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Вулиця</label>
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Будинок</label>
          <input
            type="text"
            name="building"
            value={address.building}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Квартира</label>
          <input
            type="text"
            name="apartment"
            value={address.apartment}
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
