import { TextField } from '@mui/material';
import React, { useState } from 'react';

const SearchBar = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <div>
      {/* faire barre de recherche avec material ui */}
      <TextField
        sx={{ marginTop: '10px' }}
        id="outlined-basic"
        label="Rechercher par route ou méthode"
        variant="outlined"
        value={searchValue}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchBar;
