import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Slider() {
  const dataImg = [];

  for (let i = 1; i <= 7; i++) {
    dataImg.push({
      id: i,
      image: `/img/images/car${i}.jpg`,
    });
  }

  return (
    <div className="container-swiper-slider mt-4">
      <div className="bg-swiper-slider">
        <h2>نمونه کارهای ما</h2>

        <div className="swiper-slider p-5">
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            loop={true}
            slidesPerView={"auto"}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            className="d-flex "
            pagination={{
              el: ".pagination-controller",
              clickable: true,
            }}
          >
            {dataImg.map((img) => (
              <SwiperSlide
                className="w-auto d-flex justify-content-center "
                key={img.id}
              >
                <img src={img.image} alt={img.image} width={"700px"} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pagination-controller text-center p-4"></div>

          <Link to={"/gallery"}>از گالری ما دیدن فرمایید</Link>
        </div>
      </div>
    </div>
  );
}
