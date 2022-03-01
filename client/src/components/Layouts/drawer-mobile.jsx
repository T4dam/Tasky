import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Tooltip,
  useTheme,
  Box,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import routes from '../../Routes/routes';
import DrawerHeader from './dashboard-layout/dashboard-drawer-header';
import { selectAuth } from '../../store/auth';

const DrawerMobile = ({ open, handleDrawerClose }) => {
  const state = useSelector(selectAuth);
  const theme = useTheme();
  const navigate = useNavigate();

  //   const handleRouteRegister = () => {
  //     navigate(routes.LoginPage);
  //   };
  return (
    <MUIDrawer variant="temporary" open={open} onClose={handleDrawerClose}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        <ListItem button onClick={() => navigate(routes.HomePage)}>
          <ListItemIcon>
            <Tooltip title="Pagrindinis puslapis" placement="right">
              <HomeIcon />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Pagrindinis puslapis" />
        </ListItem>
        {
             state.loggedIn
               ? (
                 <Box>
                   <ListItem button onClick={() => navigate(routes.BoardPage)}>
                     <ListItemIcon>
                       <Tooltip title="Planuoklė" placement="right">
                         <InfoIcon />
                       </Tooltip>
                     </ListItemIcon>
                     <ListItemText primary="Planuoklė" />
                   </ListItem>
                   <ListItem button onClick={() => navigate(routes.AboutPage)}>
                     <ListItemIcon>
                       <Tooltip title="Apie projektą" placement="right">
                         <InfoIcon />
                       </Tooltip>
                     </ListItemIcon>
                     <ListItemText primary="Apie projektą" />
                   </ListItem>
                 </Box>
               )
               : (
                 <Box>
                   <ListItem button onClick={() => navigate(routes.RegisterPage)}>
                     <ListItemIcon>
                       <Tooltip title="Registracija" placement="right">
                         <InfoIcon />
                       </Tooltip>
                     </ListItemIcon>
                     <ListItemText primary="Registracija" />
                   </ListItem>
                   <ListItem button onClick={() => navigate(routes.LoginPage)}>
                     <ListItemIcon>
                       <Tooltip title="Prisijungimas" placement="right">
                         <InfoIcon />
                       </Tooltip>
                     </ListItemIcon>
                     <ListItemText primary="Prisijungimas" />
                   </ListItem>
                 </Box>
               )
}
      </List>
    </MUIDrawer>
  );
};

export default DrawerMobile;
