import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import routes from '../../Routes/routes';

const DrawerMobile = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();

  const handleRouteRegister = () => {
    navigate(routes.LoginPage);
  };
  const itemsList = [
    {
      text: 'Pagrindinis',
      icon: <AcUnitIcon />,
      onClick: () => handleRouteRegister(),
    },
    {
      text: <Link to={routes.RegisterPage}>Registruotis</Link>,
      icon: <AcUnitIcon />,
      onClick: () => handleRouteRegister(),
    },
    {
      text: <Link to={routes.LoginPage}>Prisijungt</Link>,
      icon: <AcUnitIcon />,
      onClick: () => handleRouteRegister(),
    },
  ];
  return (
    <MUIDrawer variant="temporary" open={open} onClose={handleDrawerClose}>
      <List>
        {itemsList.map((item) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default DrawerMobile;
