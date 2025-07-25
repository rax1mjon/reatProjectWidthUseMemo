import React, { memo } from "react";

import PropTypes from "prop-types";

import "./Search.scss";
const SearchCustom = ({ SearchSortFilter }) => {
  return (
    <form className="search product-controls">
      <div className="search-box">
        <label htmlFor="search">Search by name:</label>
        <input
          type="text"
          id="search"
          placeholder="Search product..."
          name="search"
          onChange={(e) => SearchSortFilter(e, "search")}
        />
      </div>

      <div className="sort-box">
        <label htmlFor="sort">💰 Sort by Price:</label>
        <select
          name="sort"
          id="sort"
          onChange={(e) => SearchSortFilter(e, "sort")}
        >
          <option value="low">Low to High</option>
          <option value="hight">High to Low</option>
        </select>
      </div>

      <div className="filter-box">
        <label htmlFor="categoryFilter">📂 Filter by Category:</label>
        <select
          name="categoryFilter"
          id="categoryFilter"
          onChange={(e) => SearchSortFilter(e, "filter")}
        >
          <option value="all">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Food">Food</option>
        </select>
      </div>
    </form>
  );
};

SearchCustom.protoTypes = {
  SearchSortFilter: PropTypes.func,
};

const Search = memo(SearchCustom);

export default Search;
