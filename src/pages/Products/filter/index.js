import React from "react";

import "./styles.css";

const Filter = ({
  countries,
  handleProductFilter,
  searchedValue,
  handleProductSearch,
}) => {
  return (
    <div className="filter">
      <div className="block-input">
        <h6>Lookiing for</h6>
        <input
          type="text"
          label="start typing here..."
          value={searchedValue}
          onChange={handleProductSearch}
        />
      </div>
      <div className="filterButton">
        <h6>Or filter</h6>
        <div className="buttonFilter">
          {countries.map((originCountry, index) => (
            <button
              className="filterBtn"
              key={originCountry + index}
              onClick={() => handleProductFilter(originCountry)}
            >
              <h6>{originCountry}</h6>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
