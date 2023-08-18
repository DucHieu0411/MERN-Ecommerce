import React from "react";
import HeaderLayout from "../HeaderLayout/HeaderLayout";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <HeaderLayout />
      {children}
    </div>
  );
};

export default DefaultLayout;
