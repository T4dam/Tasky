import React from 'react';
import { Box, Typography } from '@mui/material';
// import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar/index';
import NavbarContainer from '../partials/navbar/navbar-container';

const PageLayout = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh', width: '100%',
  }}
  >
    <NavbarContainer>
      <Navbar />
    </NavbarContainer>
    {/* <Container sx={{ py: '10px' }}> */}
    <Box sx={{ flexGrow: 1 }}>
      <Outlet />
    </Box>
    <Box sx={{
      mt: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'black',
      width: '100%',
      height: '58px',
      color: 'white',
      position: '',
      bottom: 0,
    }}
    >
      <Typography>Ⓒ Tasky 2022</Typography>
    </Box>
    {/* </Container> */}
  </Box>
);
export default PageLayout;
