import React from 'react';
import { Box } from '@mui/material';
// import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar/index';

const PageLayout = () => (
  <>
    <Navbar />
    {/* <Container sx={{ py: '10px' }}> */}
    <Box sx={{ py: 2, px: 2 }}>
      <Outlet />
    </Box>
    {/* </Container> */}
  </>
);
export default PageLayout;