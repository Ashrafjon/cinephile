import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import noImage from "../../images/noImage.png";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.scss";
import styles from './carousel.module.scss'
import { useState } from 'react';
import InfoBox from '../infoBox';

const image_url = process.env.REACT_APP_API_IMAGE
function Carousel({ data, title, all, top }) {
  const [dataId, setDataId] = useState(null)
  // console.log(top);
  return (
    <div className={styles.carousel}>
      {title !== 'top'
        ? <h2 className={styles.carousel__title}>{title} <FiChevronRight /></h2>
        : <h2 className={styles.carousel__top_title}>Top <span>10</span></h2>
      }
      {
        top ? (
          <div className={styles.carousel__top}>
            <Swiper
              slidesPerView={3}
              spaceBetween={25}
              navigation={true}
              modules={[Navigation]}
              className={styles.carousel__swiper}
            >
              {top?.map((slide, i) => (
                <SwiperSlide key={slide.id} className={styles.carousel__top_slide} onClick={() => setDataId(slide.id)}>
                  <h3 className={styles.carousel__top_num}>{i + 1}</h3>
                  <img
                    src={slide.backdrop_path
                      ? `${image_url}/original/${slide.backdrop_path}`
                      : noImage} alt={slide.title}
                    className={styles.carousel__top_image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <Swiper
            slidesPerView={5}
            spaceBetween={25}
            navigation={true}
            modules={[Navigation]}
            className={styles.carousel__swiper}
          >
            {data?.results?.map((slide) => (
              <SwiperSlide key={slide.id} className={styles.carousel__slide} onClick={() => setDataId(slide.id)}>
                <img src={slide.backdrop_path ? `${image_url}/original/${slide.backdrop_path}` : noImage} alt={slide.title} className={styles.carousel__image} />
              </SwiperSlide>
            ))}
            <SwiperSlide className={styles.carousel__last_slide}>
              <FiChevronRight />
              <h2>{all}</h2>
            </SwiperSlide>
          </Swiper>
        )
      }


      <InfoBox dataId={dataId} setDataId={setDataId} />
    </div>
  )
}

export default Carousel