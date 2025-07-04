"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import { mainNavLinks } from "@/config/navigation";
import Contacts from "@/components/ui/Contacts/Contacts";
import VinylFilters, { FilterValues } from "@/components/ui/VinylFilters/VinylFilters";
import ellipseSidebar from "@/../public/icons/ellipseSidebar.svg";
import arrowIcon from "@/../public/icons/arrowIcon.svg";
import LocaleSwitcher from "@/components/layout/Sidebar/LocaleSwitcher";
import { useTranslations } from "next-intl";

const Sidebar = () => {
  const t = useTranslations("Sidebar");
  const pathname = usePathname();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const isActive = (path: string): boolean => {
    if (path === "/catalog") {
      return pathname.startsWith("/catalog");
    }

    // Для якорів у маршрутах
    if (path.includes("#")) {
      const [anchor] = path.split("#");
      if (typeof window !== "undefined") {
        return pathname === "/" && window.location.hash === `#${anchor}`;
      }
      return false;
    }

    return pathname === path;
  };
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  if (typeof window !== "undefined") {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  }
};

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleApplyFilters = (filters: FilterValues) => {
    console.log("Applied filters:", filters);

    // Тут можна додати логіку для фактичного застосування фільтрів
    // Наприклад, перенаправлення на URL з параметрами фільтрів або оновлення стану каталогу
  };

  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.topSection}>
          <div className={styles.topPanel}>
            <LocaleSwitcher />
          </div>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>Vinyl True</div>
          </Link>
          <nav>
            <ul className={styles.navList}>
              {mainNavLinks.map((link, index) => (
                <li key={index} className={isActive(link.path) ? styles.navItemActive : styles.navItem}>
                  {link.path === "/catalog" ? (
                    <>
                      <div className={styles.catalogItem}>
                        {link.path.includes("#") ? (
                          <a
                            href={link.path}
                            onClick={(e) => handleAnchorClick(e, link.path.split("#")[1])}
                            className={styles.navLink}
                          >
                            <span className={isActive(link.path) ? styles.navTextActive : styles.navText}>
                              {t(`navigation.${link.labelKey}`)}
                            </span>
                          </a>
                        ) : (
                          <Link href={link.path} className={styles.navLink}>
                            <span className={isActive(link.path) ? styles.navTextActive : styles.navText}>
                              {t(`navigation.${link.labelKey}`)}
                            </span>
                          </Link>
                        )}
                        <button
                          onClick={toggleFilter}
                          className={`${styles.arrowButton} ${isFilterOpen ? styles.arrowRotated : ""}`}
                          aria-expanded={isFilterOpen}
                          aria-label="Фільтри для платівок"
                        >
                          <Image
                            src={arrowIcon}
                            alt="Показати фільтри"
                            width={7}
                            height={12}
                            className={styles.arrowIcon}
                          />
                        </button>
                      </div>

                      {/* Винесений окремий компонент для фільтрів */}
                      <VinylFilters onApplyFilters={handleApplyFilters} isOpen={isFilterOpen} />
                    </>
                  ) : (
                    <Link href={link.path} className={styles.navLink}>
                      <span className={isActive(link.path) ? styles.navTextActive : styles.navText}>
                        {t(`navigation.${link.labelKey}`)}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottomSection}>
          <Contacts />
        </div>
      </div>

      <div className={styles.ellipseWrapper}>
        <Image src={ellipseSidebar} alt="ellipse" priority quality={100} />
      </div>
    </aside>
  );
};

export default Sidebar;
