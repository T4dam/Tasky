import React from 'react';
import {
  Box, styled, Container, TextField, Form, Button,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth';

const Pic = styled('img')(({ theme }) => ({
  height: 'auto',
  width: '200px',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'cover',

}));

const PicBack = styled('img')(({ theme }) => ({
  height: '250px',
  width: '100%',
  borderRadius: '20px',
  objectFit: 'cover',
  objectPosition: 'cover',

}));

const ProfilePage = () => {
  const { user: { name, surname, email } } = useSelector(selectAuth);
  return (
    <Container>
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ my: '15px' }}>
          <PicBack src="/flowers.jpeg" alt="" />
        </Box>

        <Box sx={{ mt: '-145px', textAlign: 'center' }}>
          <Pic src="/person-placeholder.jpeg" alt="" style={{ border: '5px solid white' }} />
        </Box>
        <Box component="form" sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
          <TextField label="Vardas" size="small" value={name} disabled />
          <TextField label="Pavardė" size="small" value={surname} disabled />
          <TextField label="Paštas" size="small" value={email} disabled />
          <TextField label="Slaptažodis" size="small" disabled />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
          <Button variant="contained">Atnaujinti</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;
