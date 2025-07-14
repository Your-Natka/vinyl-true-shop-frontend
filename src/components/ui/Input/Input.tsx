import React from "react";

interface InputProps {
  value: string;
  type: "text" | "email" | "tel";
  onChange: (val: string) => void;
}

const Input = ({ value, type, onChange }: InputProps) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return <input value={value} type={type} onChange={handleChange} />;
};

export default Input;
