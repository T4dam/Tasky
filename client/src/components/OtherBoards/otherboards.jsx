/* eslint-disable*/
import React from 'react';
import { Box, Typography, styled, Button } from '@mui/material';

const Picture = styled('img')({
height: '100px',
width: '100px',
borderRadius: '5px',
objectFit: 'cover',
});

const OtherBoards = ({ handleCloseOB }) => (
  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <Button onClick={handleCloseOB}>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Picture src='https://unsplash.it/100/100'/>
        <Typography sx={{
          maxWidth: '100px', color: 'black', lineHeight: 1.1, mt: '7px',
        }}
        >
          Pradėti naują
        </Typography>
      </Box>
    </Button>
    <Button onClick={handleCloseOB}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Picture src='https://unsplash.it/100/101'/>
        <Typography sx={{
          maxWidth: '100px', color: 'black', lineHeight: 1.1, mt: '7px',
        }}
        >
          Produkto išleidimas
        </Typography>
      </Box>
    </Button>
    <Button onClick={handleCloseOB}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Picture src='https://unsplash.it/100/102'/>
        <Typography sx={{
          maxWidth: '100px', color: 'black', lineHeight: 1.1, mt: '7px',
        }}
        >
          Projekto valdymas
        </Typography>
      </Box>
    </Button>
    <Button onClick={handleCloseOB}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Picture src='https://unsplash.it/100/99'/>
        <Typography sx={{
          maxWidth: '100px', color: 'black', lineHeight: 1.1, mt: '7px',
        }}
        >
          Kasdieniai darbai
        </Typography>
      </Box>
    </Button>
  </Box>
);

export default OtherBoards;
