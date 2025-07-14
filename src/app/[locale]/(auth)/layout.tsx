import React from "react";
import style from "./layout.module.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.bg}>{children}</div>;
};

export default AuthLayout;
