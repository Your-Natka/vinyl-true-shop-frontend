"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./AccountDropdown.module.css";
import { useRouter } from "next/navigation";

export default function AccountDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    router.push("/");
  };

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <button onClick={() => setOpen(!open)} className={styles.iconButton}>
        <img src="/icons/user.svg" alt="User icon" />
      </button>

      {open && (
        <div className={styles.dropdown}>
          <Link href="/account" className={styles.item}>
            <img src="/icons/user.svg" alt="" /> Мій акаунт
          </Link>
          <Link href="/account/orders" className={styles.item}>
            <img src="/icons/box.svg" alt="" /> Мої замовлення
          </Link>
          <Link href="/account/favorites" className={styles.item}>
            <img src="/icons/heart_white, stroke=1.svg" alt="" /> Обране
          </Link>
          <button onClick={handleLogout} className={styles.item}>
            <img src="/icons/exit.svg" alt="" /> Вийти з акаунту
          </button>
        </div>
      )}
    </div>
  );
}
