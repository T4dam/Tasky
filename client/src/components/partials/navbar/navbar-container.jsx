import React from 'react';
import {
  Container, Toolbar, IconButton, styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  [theme.breakpoints.up('md')]: {

    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
const NavbarContainer = ({
  navbarStyle, children, open, handleDrawerOpen,
}) => {
  if (navbarStyle === 'dash') {
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar
          position="fixed"
          open={open}
          sx={{
            color: 'secondary', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'spaceBetween',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            {children}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={darkTheme}>

      <AppBar position="static" color="primary" sx={{ height: 50 }}>
        <Container sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        >
          {children}
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default NavbarContainer;
