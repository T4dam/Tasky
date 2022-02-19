import React from 'react';
import {
  Box, Typography, Fab, styled, Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.mp4';
import routes from '../../../Routes/routes';

const HeroLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
});

const Banner = () => (
  <Box height="85vh" position="relative">
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
        objectFit: 'cover',
      }}
    >
      <source src={banner} type="video/mp4" />
    </video>
    <Box sx={{
      position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', padding: { xs: '10px', sm: '20px' }, display: 'flex', alignItems: 'center',
    }}
    >
      <Box>
        <Container sx={{ paddingLeft: { lg: '20%' } }}>
          <Typography
            variant="h1"
            color="white"
            sx={{
              display: 'block', fontWeight: 700, textTransform: 'upperCase', fontSize: { xs: '2rem', sm: '4rem' }, lineHeight: '1',
            }}
          >

            Virtualus
            <br />
            įrankis
            <br />
            Planuotojams
          </Typography>
          <Typography
            variant="h1"
            color="white"
            sx={{
              my: '15px', display: 'block', fontWeight: 600, textTransform: 'upperCase', fontSize: '1rem',
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
        </Container>
      </Box>
    </Box>
  </Box>
);

export default Banner;
