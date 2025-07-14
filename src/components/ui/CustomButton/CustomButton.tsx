import { Button } from "@mui/material";
import styles from "@/components/ui/CustomButton/CustomButton.module.css";
import clsx from "clsx";
import React from "react";

interface CustomButtonProps {
  text: string;
  className?: string;
  variant?: "contained" | "outlined" | "text";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const CustomButton = ({
  text,
  className,
  variant,
  startIcon,
  endIcon,
  onClick,
  type = "button",
}: CustomButtonProps) => {
  return (
    <Button
      className={clsx(styles.button, variant, className)}
      variant={variant ? variant : "contained"}
      onClick={onClick}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
