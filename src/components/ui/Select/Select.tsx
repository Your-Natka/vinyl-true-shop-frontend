import React from "react";
import style from "./Select.module.css";
import { BaseFilterProps, BaseOnFilterChange, FilterOption } from "@/types/filters";
import clsx from "clsx";

interface SelectProps extends BaseFilterProps {
  className: string;
  value?: string;
  options: FilterOption[];
  onChange: BaseOnFilterChange;
}

const Select = ({ name, className, options, value, placeholder, onChange }: SelectProps) => {
  return (
    <select
      className={clsx(style.select, className)}
      value={value || ""}
      name={name}
      onChange={(e) => onChange(+e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
