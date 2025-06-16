'use client';

import ProductCard from '@/components/home/Products/ProductCart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './Popular.module.css';

const mockProducts = Array(6).fill({
  id: '1',
  title: 'Greatest Hits',
  artist: 'Deep Purple',
  year: 1987,
  genre: 'Grunge',
  price: 200,
  image: '/albums/1.jpg',
});

const PopularSection = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Популярні</h2>
    <Swiper modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
      {mockProducts.map((product, index) => (
        <SwiperSlide key={index} className={styles.slider}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <ProductCard {...product} />
             
            </div>
            <p className={styles.text}>{product.title}</p>
            <p className={styles.artist}>{product.artist}</p>
            <p className={styles.year}>{product.year}</p>
            <p className={styles.genre}>{product.genre}</p>
            <p className={styles.price}>{product.price} грн</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default PopularSection;

