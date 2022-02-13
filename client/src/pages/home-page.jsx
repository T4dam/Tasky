import React from 'react';
import {
  Grid, Box, Typography, Container,
} from '@mui/material';
import Banner from '../components/partials/home-page-banner/index';
import Pic1 from '../assets/images/GuyNboard.svg';

const HomePage = () => (
  <>
    <Box height="85vh">
      <Banner />
    </Box>
    <Container>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box height="40px">
              <Typography sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <img src={Pic1} alt="guy with the task board" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box height="40px">
              <img src={Pic1} alt="guy with the task board" />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
        </Grid>
      </Box>
    </Container>
  </>
);

export default HomePage;
