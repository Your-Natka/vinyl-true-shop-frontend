import React, { useState } from "react";
import style from "./FilterRange.module.css";
import { Range } from "@/types/filters";

interface FilterRangeProps {
  placeholder: Range;
  fromValue: number;
  toValue: number;
  min?: number;
  max?: number;
  onChange: (state: Range) => void;
}

const FilterRange = ({ placeholder, fromValue, toValue, min, max, onChange }: FilterRangeProps) => {
  const [rangeState, setRangeState] = useState<Range>({
    from: fromValue,
    to: toValue,
  });

  const handleChange = (key: string, val: number) => {
    const newRange = {
      ...rangeState,
      [key]: val,
    };
    setRangeState(newRange);
    onChange(newRange);
  };

  return (
    <div className={style.rangeInputs}>
      <label className={style.rangeLabel}>
        <span>від</span>
        <input
          type="number"
          className={style.filterInputSmall}
          min={min || 0}
          max={max}
          value={fromValue || placeholder.from}
          onChange={(e) => handleChange("from", +e.target.value)}
        />
      </label>
      <label className={style.rangeLabel}>
        <span>до</span>
        <input
          type="number"
          className={style.filterInputSmall}
          min={min}
          max={max}
          value={toValue || placeholder.to}
          onChange={(e) => handleChange("to", +e.target.value)}
        />
      </label>
    </div>
  );
};

export default FilterRange;
