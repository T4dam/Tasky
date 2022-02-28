/*eslint-disable*/
import * as React from 'react';
import { styled, useTheme, Box } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet } from 'react-router-dom';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import EditIcon from '@mui/icons-material/Edit';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NavbarContainer from '../../partials/navbar/navbar-container';
import Navbar from '../../partials/navbar';
import ColorPickerModal from '../../color-picker/color-picker-modal';
import DrawerHeader from './dashboard-drawer-header';
import OtherBoardsModal from '../../OtherBoards/other-boards-modal';

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
  marginLeft: '-1px',
  width: 0,
  [theme.breakpoints.up('md')]: {
    marginLeft: 0,
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      width: drawerWidth,
    },
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
  }),
);

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [openOB, setOpenOB] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleOpenOB = () => setOpenOB(true);
  const handleCloseOB = () => setOpenOB(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavbarContainer navbarStyle="dash" open={open} handleDrawerOpen={handleDrawerOpen}>
        <Navbar />
      </NavbarContainer>
      <Drawer
        variant="permanent"
        open={open}
        drawerwidth={drawerWidth}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        

        <List>
          <ListItem button onClick={handleOpen}>
            <ListItemIcon>
              <Tooltip title="Fonas" placement="right">
                <WallpaperIcon />
              </Tooltip>
            </ListItemIcon>
            <ListItemText primary="Fonas" />
          </ListItem>
          <ListItem button onClick={handleOpenOB}>
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
        <DrawerHeader/>
        <Box>
        
    </Box>
        <Outlet />        
                    <ColorPickerModal isOpen={isOpen} handleClose={handleClose} />
                    <OtherBoardsModal openOB={openOB} handleCloseOB={handleCloseOB} />

      </Box>
    </Box>
  );
};

export default Dashboard;
