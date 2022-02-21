import React from 'react';
import { Box, styled } from '@mui/material';

const pic = styled('img')(({ theme }) => ({
  height: '80wh',
  width: '80wh',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'cover',

}));

const ProfilePage = () => (
  <Box>
    <img src="/person-placeholder.jpeg" alt="" />
  </Box>
);

export default ProfilePage;
