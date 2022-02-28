import React from 'react';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const DrawerMobile = ({ open, handleDrawerClose }) => {
  const itemsList = [
    {
      text: 'Pagrindinis',
      icon: <AcUnitIcon />,
    },
    {
      text: 'Registracija',
      icon: <AcUnitIcon />,
    },
    {
      text: 'Prisijungti',
      icon: <AcUnitIcon />,
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
