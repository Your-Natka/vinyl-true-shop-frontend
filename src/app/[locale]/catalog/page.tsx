"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import * as XLSX from "xlsx";
import Link from "next/link";
import Image from "next/image";
import styles from "../catalog/Catalog.module.css";

interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
  genre: string;
}

const PAGE_SIZE = 20;

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const csvUrl =
  "https://docs.google.com/spreadsheets/d/1wj7ojCMFZ1V1L4Zhfm2Ppy3rdGayI4mhYRmYCFokZdU/" +
  "export?format=csv&gid=879596002";

        const response = await fetch(csvUrl);
        const csvData = await response.text();

        const workbook = XLSX.read(csvData, { type: "string" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json: Product[] = XLSX.utils.sheet_to_json(sheet, { raw: true });

        setProducts(json);
      } catch (error) {
        console.error("Помилка завантаження:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const currentProducts = products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className={styles.catalog}>
      <p className={styles.text}>головна / каталог / обране</p>
      <h1 className={styles.heading}>Вінілові платівки</h1>

      <div className={styles.line}>
        <p className={styles.text_second}>всі / в наявності</p>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <p className={styles.text_third}>сортувати за замовчуванням</p>
          <Image
            src="/icons/down.svg"
            alt="Sort Icon"
            width={24}
            height={24}
            className={styles.icon}
          />
        </div>
      </div>

      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <>
          <div className={styles.grid}>
            {currentProducts.map((product) => (
              <div key={product.id} className={styles.card}>
                <Image
                  src={product.image || "/fallback.jpg"}
                  alt={product.title}
                  width={300} // або інша ширина
                  height={300} // відповідна висота
                  className={styles.image}
                />
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.artist}>{product.artist}</p>
                <p className={styles.genre}>{product.genre}</p>
                <p className={styles.price}>{product.price} ₴</p>
              </div>
            ))}
          </div>

          {/* Пагінація */}
          <div className={styles.pagination}>
            <p className={styles.paginationText}>
              {(page - 1) * PAGE_SIZE + 1} – {Math.min(page * PAGE_SIZE, products.length)} of {products.length}
            </p>

            <div className={styles.paginationButtons}>
              {page > 1 && (
                <Link href={`/catalog?page=${page - 1}`} className={styles.pageButton}>
                  <span className={styles.arrow}>&#x276E;</span> {/* Юнікод ← */}
                  <span>Prev</span>
                </Link>
              )}
              {page < totalPages && (
                <Link href={`/catalog?page=${page + 1}`} className={`${styles.pageButton} ${styles.next}`}>
                  <span>Next</span>
                  <span className={styles.arrow}>&#x276F;</span> {/* Юнікод → */}
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

