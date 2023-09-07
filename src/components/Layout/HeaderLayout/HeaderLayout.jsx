import React from "react";

import classNames from "classnames/bind";
import styles from "./HeaderLayout.module.scss";

import { Badge, Col } from "antd";
import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../../ButtonInputSearch/ButtonInputSearch";

const cx = classNames.bind(styles);

const HeaderLayout = () => {
  return (
    <div className={cx("wrapper")}>
      <Col span={5}>
        <span className={cx("text-header")}>Ecommerce</span>
      </Col>
      <Col span={13}>
        <ButtonInputSearch
          size="large"
          placeholder="Input search text"
          textButton="Tìm kiếm"
        />
      </Col>
      <Col span={6} className={cx("header-items")}>
        <div className={cx("header-account")}>
          <UserOutlined style={{ fontSize: "30px" }} />
          <div>
            <span className={cx("text-header-small")}>Đăng nhập / Đăng ký</span>
            <div>
              <span className={cx("text-header-small")}>
                Tài khoản
                <CaretDownOutlined />
              </span>
            </div>
          </div>
        </div>
        <div>
          <Badge count={4} size="small">
            <ShoppingCartOutlined className={cx("cart-icon")} />
          </Badge>
          <span className={cx("text-header-small")}>Giỏ hàng</span>
        </div>
      </Col>
    </div>
  );
};

export default HeaderLayout;
