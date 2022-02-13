import React from 'react';
import { Box, Typography } from '@mui/material';
import Banner from '../components/partials/home-page-banner/index';

const HomePage = () => (
  <>
    <Banner />
    <Box sx={{ position: 'absolute', left: '23%', top: '23%' }}>
      <Typography variant="h1" color="white">
        Planuoti
        tapo paprasta
      </Typography>
    </Box>
  </>
);

export default HomePage;
