import styles from "../Products/ProductCart.module.css";


interface Product {
  id: string;
  title: string;
  artist: string;
  year: number;
  genre: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, artist, year, genre, price, image }: Product) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>{artist}</p>
        <p>{year}</p>
        <p>{genre}</p>
        <p className={styles.price}>Від {price} грн</p>
      </div>
    </div>
  );
};

export default ProductCard;
