import { Button } from "@mui/material";
import styles from "@/components/ui/CustomButton/CustomButton.module.css";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const CustomButton = ({
  text,
  onClick,
  type = "button",
}: CustomButtonProps) => {
  return (
    <Button
      className={styles.button}
      variant="contained"
      onClick={onClick}
      type={type}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
