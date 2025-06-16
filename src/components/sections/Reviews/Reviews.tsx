"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import style from "./Reviews.module.css";

const reviews = [
  {
    img: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Все супер! Уже друге замовлення — і знову топ.",
    author: "Lyandra Cromwell",
  },
  {
    img: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Платівки якісні, доставили швидко.",
    author: "Mark Benson",
  },
  {
    img: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Дякую за рідкісний реліз! Дуже задоволений.",
    author: "Anna Kostina",
  },
  {
    img: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Професіонали своєї справи!",
    author: "Ivan Petrenko",
  },
  {
    img: "/reviews/1.jpg",
    avatar: "/avatars/1.jpg",
    text: "Найкращий сервіс для меломанів!",
    author: "Olga Melnyk",
  },
];
const Reviews = () => {
  return (
    <section id="reviews" className={style.section}>
      <h2 className={style.heading}>Відгуки</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
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
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className={style.card}>
              <div className={style.imageContainer}>
                <Image
                  src={review.img}
                  alt={review.author}
                  fill
                  className={style.image}
                />
              </div>
              <p className={style.text}>{review.text}</p>
              <div className={style.authorBlock}>
                <div className={style.avatar}>
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    width={24}
                    height={24}
                    className={style.avatarImage}
                  />
                </div>
                <p className={style.author}>{review.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
