import { BaseFilterProps, BaseOnFilterChange } from "@/types/filters";
import style from "./FilterTextInput.module.css";
import React from "react";

interface FilterTextInputProps extends BaseFilterProps {
  value?: string;
  onChange: BaseOnFilterChange;
}

const FilterTextInput = ({ name, placeholder, value, onChange }: FilterTextInputProps) => {
  return (
    <input
      type="text"
      className={style.filterInput}
      value={value || ""}
      onChange={(e) => onChange(name, e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default FilterTextInput;
