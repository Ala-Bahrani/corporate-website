import BlogCard from "../../components/BlogCard/BlogCard";
import Blog1 from '../../assets/images/blog/blog-1.jpg';
import Blog2 from '../../assets/images/blog/blog-2.jpg';
import Blog3 from '../../assets/images/blog/blog-3.jpg';
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTiltle/SectionTitle";
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Blog.module.css'
import { useState } from "react";

const Blog = () => {

    const swiperContent = [
        {
            img: Blog1,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            numberComment: 3,
            author: "مدیر"
        },
        {
            img: Blog2,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            numberComment: 4,
            author: "مدیر"
        },
        {
            img: Blog3,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            numberComment: 5,
            author: "مدیر"
        },
        {
            img: Blog1,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            numberComment: 6,
            author: "مدیر"
        },
        {
            img: Blog2,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            numberComment: 7,
            author: "مدیر"
        },
        {
            img: Blog1,
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
            numberComment: 8,
            author: "مدیر"
        }
    ]
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
                            nextEl: `.${styles.customNext}`,
                            prevEl: `.${styles.customPrev}`,
                        }}
                        onSlideChange={handleSlideChange}
                        className={styles.slider}
                        breakpoints={{
                            750: {
                                slidesPerView: 2
                            },
                            1200: {
                                slidesPerView: 3
                            }
                        }}

                    >
                        {
                            swiperContent.map((content, index) => (
                                <SwiperSlide className={styles.swiperSlider} key={index}>
                                    <BlogCard img={content.img} text={content.text}
                                        numberComment={content.numberComment}
                                        author={content.author}
                                    />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                    <button className={styles.customNext} disabled={isEnd}>
                        <FontAwesomeIcon icon={faArrowRight} />

                    </button>
                    <button className={styles.customPrev} disabled={isBeginning}>
                        <FontAwesomeIcon icon={faArrowLeft} />

                    </button>
                </div>

            </Container>
        </section>
    )
}


export default Blog;