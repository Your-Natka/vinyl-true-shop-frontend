"use client";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const Hero = ({}) => {
  return (
    <div>
      <CustomButton text="Каталог" onClick={() => console.log("Clicked!")} />
    </div>
  );
};

export default Hero;
