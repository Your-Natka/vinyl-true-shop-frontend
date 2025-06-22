export interface Product {
  id: number;
  title: string;
  artist: string;
  year: number;
  price: number;
  image: string;
  genre: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Channel Orange",
    artist: "Frank Ocean",
    year: 1980,
    price: 1099,
    image: "/images/channel-orange.jpg",
    genre: "R&B",
  },
  // Додай інші товари тут
];
