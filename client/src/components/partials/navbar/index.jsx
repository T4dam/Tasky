import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {
  Box, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../../store/auth';
import NavLink from './navbar-link';
import routes from '../../../Routes/routes';
import NavbarMeniu from './navbar-meniu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Navbar = () => {
  const state = useSelector(selectAuth);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{
        display: 'flex', alignItems: 'center', width: 1 / 2, gap: { xs: 2, sm: 4, md: 6 },
      }}
      >
        <Link to={routes.HomePage} style={{ display: 'flex', textDecoration: 'none' }}>
          <AssignmentIcon sx={{ fontWeight: 700, textDecoration: 'none', color: 'white' }} />
          <Typography sx={{ fontWeight: 700, textDecoration: 'none', color: 'white' }}>Tasky</Typography>
        </Link>
        {
               state.loggedIn

                 ? (
                   <>
                     <NavLink to={routes.HomePage}>Pagrindinis</NavLink>
                     <NavLink to={routes.BoardPage}>Planuoklė</NavLink>
                     <NavLink to={routes.AboutPage}><Typography sx={{ whiteSpace: 'nowrap' }}>Apie Projektą</Typography></NavLink>
                   </>
                 )
                 : null
            }

      </Box>
      <Box sx={{
        display: 'flex', alignItems: 'center', width: 1 / 2, justifyContent: 'flex-end',
      }}
      >

        {
        state.loggedIn
          ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NavbarMeniu />
            </Box>
          )
          : (
            <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4 } }}>
              <NavLink to={routes.LoginPage}>Prisijungimas</NavLink>
              <NavLink to={routes.RegisterPage}>Registracija</NavLink>
            </Box>

          )
}
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
