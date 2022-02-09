import React from 'react';
import {
  Container,
  Box,
  Typography,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from './from-button';

const AuthFrom = ({
  children,
  linkTo,
  linkText,
  btnTitle,
  loading,
  onSubmit,
  title,
  isValid,
}) => (
  <Container
    maxWidth="xs"
    component="main"
    sx={{ pt: '7vh' }}
  >
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
      {children}
      <Button disabled={!isValid}>
        {loading ? <CircularProgress color="inherit" /> : btnTitle}
      </Button>
      <Link to={linkTo}>
        {linkText}
      </Link>
    </Box>
  </Container>
);

export default AuthFrom;
