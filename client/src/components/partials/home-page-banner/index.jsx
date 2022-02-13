import React from 'react';
import {
  Box, Typography, Fab, styled,
} from '@mui/material';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.mp4';
import routes from '../../../Routes/routes';

const HeroLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
});

const Banner = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
        height: '85vh',
        objectFit: 'cover',
      }}
    >
      <source src={banner} type="video/mp4" />
    </video>
    <Box sx={{ position: 'absolute', left: '15%', top: '17%' }}>
      <Typography
        variant="h1"
        color="white"
        sx={{
          display: 'block', fontWeight: 600, textTransform: 'upperCase', fontSize: '4rem',
        }}
      >
        Virtualus
      </Typography>
      <Typography
        variant="h1"
        color="white"
        sx={{
          display: 'block', fontWeight: 600, textTransform: 'upperCase', fontSize: '4rem',
        }}
      >
        įrankis
      </Typography>
      <Typography
        variant="h1"
        color="white"
        sx={{
          display: 'block', fontWeight: 600, textTransform: 'upperCase', fontSize: '4rem',
        }}
      >
        Planuojantiems
      </Typography>
      <Typography
        variant="h1"
        color="white"
        sx={{
          my: '11px', display: 'block', fontWeight: 600, textTransform: 'upperCase', fontSize: '1rem',
        }}
      >
        Registruokis ir išbandyk nemokamą užduočių planuoklę
      </Typography>
      <Fab
        variant="extended"
        color="primary"
        sx={{
          my: 2, px: 3, fontWeight: 700, textDecoration: 'none',
        }}
      >
        <HeroLink to={routes.BoardPage}>Išbandyk</HeroLink>
      </Fab>
    </Box>
  </Box>
);

export default Banner;
