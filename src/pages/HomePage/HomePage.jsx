import React, { Fragment } from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponent from "../../components/SliderComponent/SliderComponent";

import Slider1 from "../../assets/images/Slider1.webp";
import Slider2 from "../../assets/images/Slider2.webp";
import Slider3 from "../../assets/images/Slider3.webp";
import Slider4 from "../../assets/images/Slider4.webp";
import Slider5 from "../../assets/images/Slider5.webp";
import Slider6 from "../../assets/images/Slider6.webp";

import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarLayout from "../../components/Layout/NavbarLayout/NavbarLayout";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const cx = classNames.bind(styles);

const HomePage = () => {
  const items = ["TV", "Tu lanh", "LAPTOP"];
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("type-product")}>
          {items.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </div>
        <div className={cx("slider")}>
          <SliderComponent
            arrImages={[Slider1, Slider2, Slider3, Slider4, Slider5, Slider6]}
          />
          <div className={cx("card-product")}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <div className={cx("button-paginition")}>
            <ButtonComponent
              className={cx("button-more")}
              textbutton="Xem Thêm"
              type="outline"
            />
          </div>
          {/* <NavbarLayout /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
