import React from "react";
import "./Testamonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { TestimonialsData } from "../../const/Testamonial";


const Testamonial = () => {
  return (
    <div className="testamonial">
      <div className="reviewTesta">
        <h3 className="price-container-h3">Testamonial</h3>
      </div>
      <div className="carousol">
        <Swiper
          className="test_carsoul"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerGroup: 1,
              slidesPerView: 1,
            },
            768: {
              slidesPerGroup: 1,
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testa, i) => (
            <SwiperSlide>
              <div className="testamonial_review">
                <p>{testa.comment}</p>
                <img src={testa.image} />

                <span className="testamonial_review-span">{testa.name}</span>
                <span>{testa.job}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testamonial;
