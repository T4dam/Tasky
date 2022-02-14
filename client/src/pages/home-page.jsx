import React from 'react';
import {
  Box, Typography, Container,
} from '@mui/material';
import Banner from '../components/partials/home-page-banner/index';
import Pic1 from '../assets/images/GuyNboard.svg';

const HomePage = () => (
  <>
    <Box height="85vh">
      <Banner />
    </Box>
    <Container>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '70%', paddingRight: '10px' }}>
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
        <Box sx={{ width: '50%', height: 'auto', paddingLeft: '10px' }}>
          <img src={Pic1} alt="guy with the task board" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '50%', paddingRight: '10px' }}>
          <img src={Pic1} alt="guy with the task board" />
        </Box>
        <Box sx={{ width: '70%', height: 'auto', paddingLeft: '10px' }}>
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
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '70%', paddingRight: '10px' }}>
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
        <Box sx={{ width: '50%', height: 'auto', paddingLeft: '10px' }}>
          <img src={Pic1} alt="guy with the task board" />
        </Box>
      </Box>

    </Container>
  </>
);

export default HomePage;
