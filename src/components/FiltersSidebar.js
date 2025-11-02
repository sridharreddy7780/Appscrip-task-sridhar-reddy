// src/components/FiltersSidebar.jsx
import { useState } from "react";
import "./FilterSidebar.css";

const filterOptions = {
  idealFor: ["Men", "Women", "Kids"],
  occasion: ["Casual", "Party", "Work", "Travel"],
  work: ["Printed", "Embroidered", "Solid", "Woven"],
  fabric: ["Cotton", "Wool", "Polyester", "Silk"],
  segment: ["Fashion", "Essentials", "Luxury"],
  suitableFor: ["Summer", "Winter", "All Seasons"],
  rawMaterial: ["Natural", "Synthetic", "Blended"],
  pattern: ["Striped", "Checked", "Floral", "Solid"]
};

const FiltersSidebar = ({ visible }) => {
  const [filters, setFilters] = useState({});

  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  if (!visible) return null;

  return (
    <aside className="filters-sidebar">
      <h3 className="filters-title">FILTERS</h3>

      {Object.keys(filterOptions).map((key) => (
        <div className="filter-group" key={key}>
          <label className="filter-label">{key.replace(/([A-Z])/g, " $1").toUpperCase()}</label>
          <select
            className="filter-select"
            defaultValue="All"
            onChange={(e) => handleChange(key, e.target.value)}
          >
            <option value="All">All</option>
            {filterOptions[key].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
    </aside>
  );
};

export default FiltersSidebar;
