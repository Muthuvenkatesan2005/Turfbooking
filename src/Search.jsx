import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import './Home.css'; // Custom CSS for Home component

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const Searchs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    alert(`Searching for: ${searchTerm}`);
    // Implement your search logic here
  };

  return (
    <SearchBar>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search locations..."
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
      />
    </SearchBar>
  );
};

const Search = () => {
  return (
    <div className="home">
      <div className="header">
        <img src="/path/to/your/header-image.jpg" alt="Header" className="header-image" />
        <div className="header-content">
          <Typography variant="h4" component="h1" gutterBottom>
            Explore and Book Sports Facilities Near You
          </Typography>
          <Searchs />
        </div>
      </div>
      <Container className="stats" maxWidth="md">
        <div className="stats-content">
          <Typography variant="h6" component="p">400000+ Users</Typography>
          <Typography variant="h6" component="p">900+ Venues</Typography>
          <Typography variant="h6" component="p">160+ Cities</Typography>
          <Typography variant="h6" component="p">30+ Sports</Typography>
          <Typography variant="h6" component="p">20 States</Typography>
        </div>
      </Container>
    </div>
  );
};

export default Search;
