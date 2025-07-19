"use client";

import React, { useEffect, useState } from "react";
import style from "./VinylFilters.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { Filters, Range, RangePlaceholder } from "@/types/filters";
import { useLocale } from "next-intl";
import { Locale } from "@/types/locale";
import FilterTextInput from "./FilterTextInput/FilterTextInput";
import Select from "../Select/Select";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import FilterRange from "./FilterRange/FilterRange";

interface VinylFiltersProps {
  onApplyFilters: (filters: FilterValues) => void;
  isOpen: boolean;
}

export interface FilterValues {
  genreId?: number;
  artist?: string;
  album?: string;
  price?: {
    from: number;
    to: number;
  };
  year?: {
    from: number;
    to: number;
  };
  // priceFrom?: number;
  // priceTo?: number;
  // yearFrom?: number;
  // yearTo?: number;
  releaseTypes?: string[];
  [key: string]: any;
}

const VinylFilters: React.FC<VinylFiltersProps> = ({ onApplyFilters, isOpen }) => {
  const locale = useLocale() as Locale;
  // Стани для фільтрів
  const [selectedFilters, setSelectedFilters] = useState<FilterValues>({});

  const [filters, setFilters] = useState<Filters>();

  useEffect(() => {
    fetch("/public/data/filter.json")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data: Filters) => setFilters(data));
  });

  const handleChange = (key: string, val: string | number | string[] | Range) => {
    setSelectedFilters((prev: FilterValues | undefined): FilterValues => {
      if (prev) {
        if (Array.isArray(prev[key])) {
          val = [...prev[key], val];
        }
        return {
          ...prev,
          [key]: val,
        };
      }
      return {
        [key]: val,
      };
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(selectedFilters);
  };

  if (!isOpen) return null;

  return (
    <div className={style.filterPanel}>
      {filters &&
        filters.map((filter) => {
          return (
            <div key={filter.name} className={style.filterSection}>
              <label className={style.filterLabel}>
                <span className={style.filterLabelText}>{filter.label[locale]}</span>
                {filter.type === "select" && filter.options && (
                  <Select
                    name={filter.name}
                    className={style.filterSelect}
                    options={filter.options[locale]}
                    value={selectedFilters && selectedFilters[filter.name]}
                    placeholder={filter.placeholder[locale] as unknown as string}
                    onChange={(val) => handleChange(filter.name, val)}
                  />
                )}
                {filter.type === "text" && (
                  <FilterTextInput
                    name={filter.name}
                    placeholder={filter.placeholder[locale] as unknown as string}
                    value={selectedFilters && selectedFilters[filter.name]}
                    onChange={(val) => handleChange(filter.name, val)}
                  />
                )}
                {filter.type === "checkbox" && filter.options && (
                  <div className={style.checkboxGroup}>
                    {filter.options[locale]?.map((option) => (
                      <FilterCheckbox
                        key={option.id}
                        value={option.label}
                        isChecked={selectedFilters && selectedFilters[filter.name].find((el) => el === option)}
                        onChange={(val) => handleChange(filter.name, val)}
                      />
                    ))}
                  </div>
                )}
                {filter.type === "range" && (
                  <FilterRange
                    placeholder={(filter.placeholder as RangePlaceholder)[locale]}
                    fromValue={selectedFilters && selectedFilters[filter.name].from}
                    toValue={selectedFilters && selectedFilters[filter.name].to}
                    min={filter.min}
                    max={filter.max}
                    onChange={(val) => handleChange(filter.name, val)}
                  />
                )}
              </label>
            </div>
          );
        })}
      <CustomButton text="Фільтрувати" onClick={handleApplyFilters} type="submit" />
    </div>
  );
};

export default VinylFilters;
