import React from 'react';
import { Button } from '@mui/material';

const FromButton = ({ children, ...props }) => (
  <Button
    sx={{ my: 3, height: '56px' }}
    fullWidth
    variant="contained"
    color="primary"
    type="submit"
    {...props}
  >
    {children}

  </Button>
);

export default FromButton;
