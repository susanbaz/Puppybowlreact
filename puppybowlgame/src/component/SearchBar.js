import React, { useState } from 'react';


function SearchBar({ searchText, onSearchTextChange, onSearch }) {
    return (
      <form className="search-puppies">
        <input
          type="text"
          value={searchText}
          onChange={(e) => onSearchTextChange(e.target.value)}
          placeholder="Enter puppy's name..."
        />
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </form>
    );
  }
  
  export default SearchBar;