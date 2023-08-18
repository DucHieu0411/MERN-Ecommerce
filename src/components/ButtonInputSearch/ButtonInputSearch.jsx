import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import classNames from "classnames/bind";
import styles from "./ButtonInputSearch.module.scss";

const cx = classNames.bind(styles);

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton } = props;

  return (
    <div className={cx("wrapper")}>
      <Input
        className={cx("input-type")}
        size={size}
        placeholder={placeholder}
      />
      <Button
        className={cx("button-type")}
        size={size}
        icon={<SearchOutlined />}
      >
        {textButton}
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
