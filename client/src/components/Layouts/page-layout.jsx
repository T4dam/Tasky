import React, { useState } from 'react';
import {
  Box, Typography, Fab, styled,
} from '@mui/material';
// import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../partials/navbar/index';
import NavbarContainer from '../partials/navbar/navbar-container';
import DrawerMobile from './drawer-mobile';

const Footer = styled(Box)(({ theme }) => ({
  mt: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.secondary.main,
  width: '100%',
  height: '48px',
  color: 'white',
  position: '',
  bottom: 0,
}));

const PageLayout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => setOpen(!open);
  // const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  return (

    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh', width: '100%',
    }}
    >
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      {/* <Container sx={{ py: '10px' }}> */}
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Box>
        <DrawerMobile open={open} handleDrawerClose={handleDrawerClose} />
        <Fab
          color="primary"
          sx={{
            position: 'fixed',
            bottom: 55,
            right: 20,
            display: { xs: 'inline-flex', sm: 'none' },
          }}
          onClick={handleDrawerToggle}
        >
          { open ? <CloseIcon /> : <MenuIcon />}
        </Fab>
      </Box>
      <Footer>
        <Typography>Ⓒ Tasky 2022</Typography>
      </Footer>

      {/* </Container> */}
    </Box>
  );
};

export default PageLayout;
