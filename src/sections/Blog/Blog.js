import React, { useRef, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Blog1 from '../../assets/images/blog/blog-1.jpg';
import Blog2 from '../../assets/images/blog/blog-2.jpg';
import Blog3 from '../../assets/images/blog/blog-3.jpg';
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTiltle/SectionTitle";
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Blog.module.css';

const Blog = () => {


  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const swiperContent = [
    { img: Blog1, text: "لورم ایپسوم ...", numberComment: 3, author: "مدیر" },
    { img: Blog2, text: "لورم ایپسوم ...", numberComment: 4, author: "مدیر" },
    { img: Blog3, text: "لورم ایپسوم ...", numberComment: 5, author: "مدیر" },
    { img: Blog1, text: "لورم ایپسوم ...", numberComment: 6, author: "مدیر" },
    { img: Blog2, text: "لورم ایپسوم ...", numberComment: 7, author: "مدیر" },
    { img: Blog1, text: "لورم ایپسوم ...", numberComment: 8, author: "مدیر" },
  ];

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  

  return (
    <section className={styles.section} id="blog">
      <SectionTitle title="وبلاگ" />
      <Container>
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            onSlideChange={handleSlideChange}
            className={styles.slider}
            breakpoints={{
              750: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {swiperContent.map((content, index) => (
              <SwiperSlide className={styles.swiperSlider} key={index}>
                <BlogCard
                  img={content.img}
                  text={content.text}
                  numberComment={content.numberComment}
                  author={content.author}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button ref={nextRef} disabled={isEnd} className={styles.customNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

          <button ref={prevRef} disabled={isBeginning} className={styles.customPrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
