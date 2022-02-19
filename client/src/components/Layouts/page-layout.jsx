import React from 'react';
import { Box } from '@mui/material';
// import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar/index';
import NavbarContainer from '../partials/navbar/navbar-container';

const PageLayout = () => (
  <>
    <NavbarContainer>
      <Navbar />
    </NavbarContainer>
    {/* <Container sx={{ py: '10px' }}> */}
    <Box>
      <Outlet />
    </Box>
    {/* </Container> */}
  </>
);
export default PageLayout;
