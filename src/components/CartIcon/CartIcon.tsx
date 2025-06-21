"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cart";
import styles from "./CartIcon.module.css";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link href="/shop/basket" className={styles.iconWrapper}>
      <ShoppingCart className={styles.icon} />
      {totalItems > 0 && (
        <span className={styles.badge}>{totalItems}</span>
      )}
    </Link>
  );
}

