import React from 'react';
import IconSearch from '../../assets/icon-search.png';

import './search-bar-styles.css';

const SearchBar = ({ onChange }) => {
  return (
    <div className="searchbar-container">
      <img src={IconSearch} className="icon-search" />
      <input
        IconSearch
        type="text"
        className="searchbar-input"
        onChange={onChange}
        placeholder="Busque por, prontuários, nomes, nível do alerta ou status"
      />
    </div>
  );
};

export default SearchBar;
