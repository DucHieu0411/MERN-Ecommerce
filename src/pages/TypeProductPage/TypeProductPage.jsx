import React from "react";
import NavbarLayout from "../../components/Layout/NavbarLayout/NavbarLayout";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";

import classNames from "classnames/bind";
import styles from "./TypeProductPage.module.scss";

const cx = classNames.bind(styles);

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div className={cx("wrapper")}>
      <Row className={cx("row")}>
        <Col span={4} className={cx("col-1")}>
          <NavbarLayout />
        </Col>
        <Col span={20}>
          <div className={cx("col-2")}>
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
          <Pagination
            className={cx("pagination")}
            showQuickJumper
            defaultCurrent={1}
            total={100}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
