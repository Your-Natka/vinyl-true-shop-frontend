import * as XLSX from "xlsx";
import styles from "../catalog/Catalog.module.css";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
  genre: string;
}

const PAGE_SIZE = 20;

async function getProducts(): Promise<Product[]> {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/1wj7ojCMFZ1V1L4Zhfm2Ppy3rdGayI4mhYRmYCFokZdU/export?format=csv&gid=879596002";

  const response = await fetch(csvUrl);
  if (!response.ok) {
    throw new Error("Не вдалося отримати CSV з Google Sheets");
  }

  const csvData = await response.text();
  const workbook = XLSX.read(csvData, { type: "string" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const json: Product[] = XLSX.utils.sheet_to_json(sheet, { raw: true });

  return json;
}

export default async function CatalogPage({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Number(searchParams?.page || 1);
  const allProducts = await getProducts();
  const totalPages = Math.ceil(allProducts.length / PAGE_SIZE);
  const currentProducts = allProducts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className={styles.catalog}>
      <p className={styles.text}> головна/каталог/обране</p>
      <h1 className={styles.heading}>Вінілові платівки</h1>

      <div className={styles.grid}>
        {currentProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image || "/fallback.jpg"}
              alt={product.title}
              className={styles.image}
            />
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.artist}>{product.artist}</p>
            <p className={styles.price}>{product.price} ₴</p>
          </div>
        ))}
      </div>

      {/* Пагінація внизу зліва */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            key={i}
            href={`/catalog?page=${i + 1}`}
            className={`${styles.pageLink} ${i + 1 === page ? styles.active : ""}`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
