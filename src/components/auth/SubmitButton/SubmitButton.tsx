import CustomButton from "@/components/ui/CustomButton/CustomButton";
import style from "./SubmitButtom.module.css";
import React from "react";
import clsx from "clsx";

interface SubmitButtonProps {
  label: string;
}

const SubmitButton = ({ label }: SubmitButtonProps) => {
  return <CustomButton className={clsx(style["submit-button"], "button")} text={label} type="submit" />;
};

export default SubmitButton;
