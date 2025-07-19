type Type = "text" | "select" | "checkbox" | "range";

type Lang = "uk" | "en";

export type TextPlaceholder = Record<Lang, string>; // для текстових фільтрів

export type Range = { from: string | number; to: string | number};

export type RangePlaceholder = Record<Lang, Range>; // для range

type FilterPlaceholder = TextPlaceholder | RangePlaceholder;

export type FilterOption = {
  id: number;
  label: string;
}

export type FilterOptions = Record<Lang, FilterOption[]>;
 
type FilterItem = {
  id: number;
  name: string;
  label: {
    uk: string;
    en: string;
  };
  type: Type; // тип фільтра
  placeholder: FilterPlaceholder;
  options?: FilterOptions;
  min?: number;
  max?: number;
  format?: string;
  multiple?: boolean;
}

export type Filters = FilterItem[];

export interface BaseFilterProps {
    name: string;
    placeholder: string;
} 

export type BaseOnFilterChange = (val: string | number) => void;