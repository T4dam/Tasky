import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {
  AppBar, Container, Box, Button, Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { logout, selectAuth } from '../../../store/auth';
import NavLink from './navbar-link';
import routes from '../../../Routes/routes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
const mycolor = {
  textTransform: 'none',
  fontSize: '16px',
  color: '#eeeeee',
  opacity: 0.75,
  ':hover': {
    opacity: 1,
  },
  '&.active': {
    opacity: 1,
  },

};

const Navbar = () => {
  const state = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" sx={{ height: 48 }}>
        <Container sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        >
          <Box sx={{ display: 'flex' }}>
            <NavLink to={routes.HomePage}>
              <AssignmentIcon />
              <Typography sx={{ fontWeight: 700 }}>Tasky</Typography>
            </NavLink>
            {
               state.loggedIn
                 ? <NavLink to={routes.BoardPage}>Tvarkyklė</NavLink>
                 : null
            }

          </Box>
          {
            state.loggedIn
              ? (
                <Box>

                  <Button style={mycolor} sx={{ my: 1 }} variant="text" onClick={() => handleLogout()}>
                    <LogoutIcon sx={{ fontSize: 20 }} />
                    <Box sx={{ pl: '3px' }}>Atsijungti</Box>
                  </Button>
                </Box>
              )
              : (
                <Box sx={{ display: 'flex' }}>
                  <NavLink to={routes.LoginPage}>Prisijungimas</NavLink>
                  <NavLink to={routes.RegisterPage}>Registracija</NavLink>
                </Box>

              )
          }
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
