import React from "react";
import style from "./ValidationAlert.module.css";

interface ValidationAlertProps {
  title: string;
  messages: string[];
}

const ValidationAlert = ({ title, messages }: ValidationAlertProps) => {
  return (
    <div className={style.alert}>
      <p>{title}</p>
      <ul></ul>
    </div>
  );
};

export default ValidationAlert;
