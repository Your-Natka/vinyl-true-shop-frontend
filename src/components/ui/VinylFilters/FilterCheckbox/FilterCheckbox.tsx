import React from "react";
import style from "./FilterCheckbox.module.css";

interface FilterCheckboxProps {
  value: string;
  isChecked?: boolean;
  onChange: (val: string) => void;
}

const FilterCheckbox = ({ value, isChecked, onChange }: FilterCheckboxProps) => {
  return (
    <label className={style.checkboxLabel}>
      <input
        type="checkbox"
        className={style.filterCheckbox}
        checked={isChecked}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className={style.filterLabelText}>{value}</span>
    </label>
  );
};

export default FilterCheckbox;
