import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import { Fab } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet } from 'react-router-dom';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import EditIcon from '@mui/icons-material/Edit';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NavbarContainer from '../../partials/navbar/navbar-container';
import Navbar from '../../partials/navbar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const notForwardableProps = ['drawerWidth'];

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      width: drawerWidth,
    },
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    },
  }),
);

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavbarContainer navbarStyle="dash" open={open} handleDrawerOpen={handleDrawerOpen}>
        <Navbar />
      </NavbarContainer>
      <Drawer
        variant="permanent"
        open={open}
        drawerWidth={drawerWidth}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Tooltip title="Fonas" placement="right">
                <WallpaperIcon />
              </Tooltip>
            </ListItemIcon>
            <ListItemText primary="Fonas" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Tooltip title="Šablonai" placement="right">
                <LibraryBooksIcon />
              </Tooltip>
            </ListItemIcon>
            <ListItemText primary="Šablonai" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Tooltip title="Redaguoti" placement="right">
                <EditIcon />
              </Tooltip>
            </ListItemIcon>
            <ListItemText primary="Redaguoti" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
