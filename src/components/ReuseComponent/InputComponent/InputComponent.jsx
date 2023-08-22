import { Input } from "antd";
import React from "react";

const InputComponent = (size, placeholder, ...rests) => {
  return <Input size={size} placeholder={placeholder} {...rests} />;
};

export default InputComponent;
