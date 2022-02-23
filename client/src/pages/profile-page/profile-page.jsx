import React from 'react';
import {
  Box,
  styled,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth';
import ProfilePageForm from './profile-page-form';
import ProfilePageImage from './profile-page-image';

const PicBack = styled('img')(({ theme }) => ({
  height: '250px',
  width: '100%',
  borderRadius: '20px',
  objectFit: 'cover',
  objectPosition: 'cover',

}));

const ProfilePage = () => {
  const { user: { imgSrc, ...user } } = useSelector(selectAuth);
  return (
    <Container>
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ my: '15px' }}>
          <PicBack src="/flowers.jpeg" alt="profile background" />
        </Box>
        <ProfilePageImage imgSrc={imgSrc} />
        <Divider sx={{ pb: 2 }}><Typography variant="h5">Profilio informacija</Typography></Divider>
        <ProfilePageForm {...user} />
      </Box>
    </Container>
  );
};

export default ProfilePage;
