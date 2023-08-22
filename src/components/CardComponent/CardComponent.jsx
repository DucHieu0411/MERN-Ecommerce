import { Card, Image } from "antd";
import React from "react";

import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";

import classNames from "classnames/bind";
import styles from "./CardComponent.module.scss";

const cx = classNames.bind(styles);

const CardComponent = () => {
  return (
    <Card
      className={cx("wrapper")}
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img className={cx("logo-product")} src={logo} alt="logo" />
      <div className={cx("product-item")}>Iphone</div>
      <div className={cx("product-review")}>
        <span className={cx("inner-product-review")}>
          4.5
          <StarFilled className={cx("star-icon")} />
        </span>

        <span>| Đã bán 100+</span>
      </div>
      <div className={cx("price-product")}>
        1.000.000đ
        <span className={cx("discount-price-product")}>-5%</span>
      </div>
    </Card>
  );
};

export default CardComponent;
