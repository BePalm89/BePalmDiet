import "./FiltersRecipe.css";

import { useState } from "react";
import PropTypes from "prop-types";

import Input from "../Input/Input";

const FiltersRecipe = ({ selectedFilter, onFilterChange, onSearchChange }) => {
  const filters = [
    { label: "all" },
    { label: "dinner" },
    { label: "lunch" },
    { label: "meat" },
    { label: "fish" },
  ];

  const [searchValue, setSearchValue] = useState("");

  const handleSelectedFilter = (filter) => {
    onFilterChange(filter);
  };

  const handleSearch = () => {
    onSearchChange(searchValue);
  };

  return (
    <div className="filters-container">
      <ul className="filters-list-container">
        {filters.map((filter) => (
          <li
            key={filter.label}
            className={selectedFilter === filter.label ? "selected" : ""}
            onClick={() => handleSelectedFilter(filter.label)}
          >
            {filter.label}
          </li>
        ))}
      </ul>
      <Input
        id="search"
        placeholder="Search for a recipe"
        type="text"
        icon={{ img: "/icons/search.png", value: "search" }}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value=""
        fcnIcon={handleSearch}
      />
    </div>
  );
};

FiltersRecipe.propTypes = {
  selectedFilter: PropTypes.string,
  onFilterChange: PropTypes.func,
  onSearchChange: PropTypes.func,
};

export default FiltersRecipe;
