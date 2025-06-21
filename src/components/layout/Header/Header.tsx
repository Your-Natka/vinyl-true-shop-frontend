"use client";

import css from "@/components/layout/Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import profile from "@/../public/icons/profile.svg";
import scales from "@/../public/icons/scales.svg";
import search from "@/../public/icons/search.svg";
import mobileMenu from "@/../public/icons/mobileMenu.svg";
import logo from "@/../public/icons/logo.svg";
import { useTranslations } from "next-intl";
import CartIcon from "@/components/CartIcon/CartIcon";


const sections = ["hero", "products", "reviews", "about"];

const Header = () => {
  const t = useTranslations("Header");
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={css.headerContainer}>
      {/* Ліві кнопки */}
      <div className={css.leftButtons}>
        <button className="btn">
          <Image src={mobileMenu} alt="mobile menu icon" width={24} height={24} />
        </button>
        <button className="btn">
          <Image src={search} alt="search icon" width={24} height={24} />
        </button>
      </div>

      {/* Логотип */}
      <div className={css.logoContainer}>
        <Image src={logo} alt="logo" />
      </div>

      {/* Навігація */}
      <nav className={css.navLinks}>
        <Link href="#hero" className={active === "hero" ? css.activeLink : ""}>
          Головна
        </Link>
        <Link href="#products" className={active === "products" ? css.activeLink : ""}>
          Популярне
        </Link>
        <Link href="#reviews" className={active === "reviews" ? css.activeLink : ""}>
          Відгуки
        </Link>
        <Link href="#about" className={active === "about" ? css.activeLink : ""}>
          Про нас
        </Link>
      </nav>

      {/* Пошук */}
      <div className={css.searchContainer}>
        <input type="text" placeholder={t("search-text")} className={css.searchInput} />
        <div className={css.searchIcon}>
          <Image src={search} alt="search icon" width={20} height={20} priority />
        </div>
      </div>

      {/* Праві кнопки */}
      <div className={css.rightButtons}>
        <Link href="#" className={`btn ${css.scalesButton}`}>
          <Image src={scales} alt="scales icon" width={24} height={24} />
        </Link>
        <div className="btn">
          <CartIcon />
        </div>
        <Link href="/auth" className="btn">
          <Image src={profile} alt="profile icon" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
