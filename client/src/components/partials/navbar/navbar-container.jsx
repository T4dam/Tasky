import React from 'react';
import {
  Container, Toolbar, IconButton, styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
}));

const NavbarContainer = ({
  navbarStyle, children, open, handleDrawerOpen,
}) => {
  if (navbarStyle === 'dash') {
    return (
      <AppBar
        position="fixed"
        open={open}
        sx={{
          height: 50, display: 'flex', justifyContent: 'center', alignItems: 'spaceBetween',
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
    );
  }
  return (
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
  );
};
export default NavbarContainer;
