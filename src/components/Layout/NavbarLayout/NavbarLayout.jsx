import React from "react";

import classNames from "classnames/bind";
import styles from "./NavbarLayout.module.scss";
import { Checkbox, Rate } from "antd";

const cx = classNames.bind(styles);

const NavbarLayout = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "TEXT":
        return options.map((option) => {
          return <h1 className={cx("name-product")}>{option}</h1>;
        });

      case "CHECKBOX":
        return (
          <Checkbox.Group className={cx("checkbox-group")}>
            {options.map((option) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "RATING":
        return options.map((option) => {
          return (
            <div className={cx("rating")}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span className={cx("rating-star")}>{`từ ${option} sao`}</span>
            </div>
          );
        });
      case "PRICE":
        return options.map((option) => {
          return <div className={cx("price-product")}>{option}</div>;
        });
      default:
        return {};
    }
  };

  const onChange = () => {};

  return (
    <div>
      <h4 className={cx("list-product")}>Label</h4>
      <div className={cx("list-name-product")}>
        {renderContent("TEXT", ["TV", "Tu Lanh", "May Giat"])}
      </div>
      <div className={cx("list-name-product")}>
        {renderContent("CHECKBOX", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </div>
      <div className={cx("list-name-product")}>
        {renderContent("RATING", [3, 4, 5])}
      </div>
      <div className={cx("list-name-product")}>
        {renderContent("PRICE", [
          "< 40.000đ",
          "40.000đ -> 120.000đ",
          "120.000đ -> 400.000đ",
          "> 400.000đ",
        ])}
      </div>
    </div>
  );
};

export default NavbarLayout;
