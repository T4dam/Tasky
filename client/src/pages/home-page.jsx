import React from 'react';
import { Grid, Box } from '@mui/material';
import Banner from '../components/partials/home-page-banner/index';

const HomePage = () => (
  <>
    <Banner />
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box>xs=8</Box>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </Box>
  </>
);

export default HomePage;
