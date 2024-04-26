import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange }) {
 // State to keep track of the selected category
 const [selectedCategory, setSelectedCategory] = useState("All");

 // Function to handle category button click
 const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
 };

 return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
 );
}

export default CategoryFilter;
