// src/components/SortDropdown.jsx
import { useState } from "react";
import "./SortDropdown.css";

const SortDropdown = ({ onSortChange }) => {
  const [selected, setSelected] = useState("Recommended");

  const handleChange = (e) => {
    setSelected(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="sort-container">
      <span className="sort-label">Recommended:</span>
      <select className="sort-select" value={selected} onChange={handleChange}>
        <option value="Recommended">Recommended</option>
        <option value="Newest First">Newest First</option>
        <option value="Popular">Popular</option>
        <option value="Price High to Low">Price: High to Low</option>
        <option value="Price Low to High">Price: Low to High</option>
      </select>
    </div>
  );
};

export default SortDropdown;
