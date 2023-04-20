
import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './chat.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onhandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius:2,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mb:3,
        textAlign:"center"
      }}
    >
      <input
        className='search-bar'
        placeholder='Search your friends...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red',textAlign:'right' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;