'use client';

import ProductCard from '@/components/home/Products/ProductCart';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Sale.module.css';

const mockProducts = Array(6).fill({
  id: '2',
  title: 'Greatest Hits',
  artist: 'Deep Purple',
  year: 1987,
  genre: 'Grunge',
  price: 200,
  image: '/albums/1.jpg',
});

const SaleSection = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Розпродаж</h2>
    <Swiper spaceBetween={20} slidesPerView={5} className={styles.slider}>
      {mockProducts.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCard {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default SaleSection;