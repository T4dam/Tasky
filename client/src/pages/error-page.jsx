import React from 'react';
import { Box, Container, styled } from '@mui/material';

// eslint-disable-next-line no-unused-vars
const Error = styled('img')(({ theme }) => ({
  maxHeight: '500px',
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'cover',

}));

const ErrorPage = () => (
  <Container>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ my: '15px' }}>
        <Error
          src="/404.png"
          alt="profile background"
        />
      </Box>
    </Box>
  </Container>
);

export default ErrorPage;
