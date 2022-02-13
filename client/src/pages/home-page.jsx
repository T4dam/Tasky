import React from 'react';
import {
  Grid, Box, Typography, Container,
} from '@mui/material';
import Banner from '../components/partials/home-page-banner/index';

const HomePage = () => (
  <>
    <Box height="80vh">
      <Banner />
    </Box>
    <Container>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industrys
              standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </Box>
    </Container>
  </>
);

export default HomePage;
