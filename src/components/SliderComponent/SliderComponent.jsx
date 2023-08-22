import React from "react";
import Slider from "react-slick";

import { Image } from "antd";

import classNames from "classnames/bind";
import styles from "./SliderComponent.module.scss";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {arrImages.map((image) => {
        return (
          <Image
            key={image}
            src={image}
            alt="slider"
            preview={false}
            width="100%"
            height="274px"
          />
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
