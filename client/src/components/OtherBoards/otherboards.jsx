import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const OtherBoards = ({ handleCloseOB }) => (
  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <Button onClick={handleCloseOB}>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{
          height: '100px', width: '100px', background: 'red', borderRadius: '5px',
        }}
        />
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
        <Box sx={{
          height: '100px', width: '100px', background: 'red', borderRadius: '5px',
        }}
        />
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
        <Box sx={{
          height: '100px', width: '100px', background: 'red', borderRadius: '5px',
        }}
        />
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
        <Box sx={{
          height: '100px', width: '100px', background: 'red', borderRadius: '5px',
        }}
        />
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
