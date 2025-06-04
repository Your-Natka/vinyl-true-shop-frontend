"use client";

import React, { useState } from "react";
import styles from "./VinylFilters.module.css";
import CustomButton from "../CustomButton/CustomButton";

interface VinylFiltersProps {
  onApplyFilters: (filters: FilterValues) => void;
  isOpen: boolean;
}

export interface FilterValues {
  genre: string;
  artist: string;
  album: string;
  price: {
    from: number | null;
    to: number | null;
  };
  year: {
    from: number | null;
    to: number | null;
  };
  releaseTypes: string[];
}

interface ReleaseType {
  id: string;
  label: string;
}

const releaseTypes: ReleaseType[] = [
  { id: "vintage", label: "Вінтаж" },
  { id: "new", label: "Новий" },
];

const VinylFilters: React.FC<VinylFiltersProps> = ({
  onApplyFilters,
  isOpen,
}) => {
  // Стани для фільтрів
  const [selectedGenre, setSelectedGenre] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [selectedReleaseTypes, setSelectedReleaseTypes] = useState<string[]>(
    []
  );

  const handleReleaseTypeChange = (typeId: string) => {
    setSelectedReleaseTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((id) => id !== typeId)
        : [...prev, typeId]
    );
  };

  const handleApplyFilters = () => {
    // Збираємо всі фільтри в об'єкт
    const filters: FilterValues = {
      genre: selectedGenre,
      artist,
      album,
      price: {
        from: priceFrom ? parseInt(priceFrom) : null,
        to: priceTo ? parseInt(priceTo) : null,
      },
      year: {
        from: yearFrom ? parseInt(yearFrom) : null,
        to: yearTo ? parseInt(yearTo) : null,
      },
      releaseTypes: selectedReleaseTypes,
    };

    // Викликаємо callback з батьківського компонента
    onApplyFilters(filters);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.filterPanel}>
      {/* Фільтр за жанром */}
      <div className={styles.filterSection}>
        <label className={styles.filterLabel}>
          <span className={styles.filterLabelText}>Жанр:</span>
          <select
            className={styles.filterSelect}
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Please select</option>
            <option value="rock">Рок</option>
            <option value="pop">Поп</option>
            <option value="jazz">Джаз</option>
            <option value="electronic">Електронна</option>
            <option value="hip-hop">Хіп-хоп</option>
            <option value="classical">Класична</option>
          </select>
        </label>
      </div>

      {/* Фільтр за виконавцем */}
      <div className={styles.filterSection}>
        <label className={styles.filterLabel}>
          <span className={styles.filterLabelText}>Виконавець:</span>
          <input
            type="text"
            className={styles.filterInput}
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Введіть ім'я виконавця"
          />
        </label>
      </div>

      {/* Фільтр за альбомом */}
      <div className={styles.filterSection}>
        <label className={styles.filterLabel}>
          <span className={styles.filterLabelText}>Альбом:</span>
          <input
            type="text"
            className={styles.filterInput}
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            placeholder="Введіть назву альбому"
          />
        </label>
      </div>

      {/* Фільтр за ціною */}
      <div className={styles.filterSection}>
        <div className={styles.filterTitle}>Ціна:</div>
        <div className={styles.rangeInputs}>
          <label className={styles.rangeLabel}>
            <span>від</span>
            <input
              type="number"
              className={styles.filterInputSmall}
              min="0"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
            />
          </label>
          <label className={styles.rangeLabel}>
            <span>до</span>
            <input
              type="number"
              className={styles.filterInputSmall}
              min="0"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Фільтр за роком випуску */}
      <div className={styles.filterSection}>
        <div className={styles.filterTitle}>Рік випуску:</div>
        <div className={styles.rangeInputs}>
          <label className={styles.rangeLabel}>
            <span>від</span>
            <input
              type="number"
              className={styles.filterInputSmall}
              min="1900"
              max="2023"
              value={yearFrom}
              onChange={(e) => setYearFrom(e.target.value)}
            />
          </label>
          <label className={styles.rangeLabel}>
            <span>до</span>
            <input
              type="number"
              className={styles.filterInputSmall}
              min="1900"
              max="2023"
              value={yearTo}
              onChange={(e) => setYearTo(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Фільтр за типом випуску */}
      <div className={styles.filterSection}>
        <div className={styles.filterTitle}>Випуск:</div>
        <div className={styles.checkboxGroup}>
          {releaseTypes.map((type) => (
            <label key={type.id} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.filterCheckbox}
                checked={selectedReleaseTypes.includes(type.id)}
                onChange={() => handleReleaseTypeChange(type.id)}
              />
              <span className={styles.filterLabelText}>{type.label}</span>
            </label>
          ))}
        </div>
      </div>
      <CustomButton
        text="Фільтрувати"
        onClick={handleApplyFilters}
        type="submit"
      />
    </div>
  );
};

export default VinylFilters;
