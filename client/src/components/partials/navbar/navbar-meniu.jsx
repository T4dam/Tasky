/*eslint-disable*/
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logout, selectAuth } from '../../../store/auth';
import routes from '../../../Routes/routes';


const NavbarMeniu = () => {
  const navigate = useNavigate();
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleTransitionToProfile = () => {
    navigate(routes.ProfilePage);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
  
        <Tooltip title="Profilis">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <img style={{
          height: '32px',
          width: '32px',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'cover',}} src={user.imgSrc === undefined ? '/person-placeholder.jpeg' : `${user.imgSrc}`}/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleTransitionToProfile}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        
        <img style={{
          height: '45px',
          width: '45px',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'cover',}} src={user.imgSrc === undefined ? '/person-placeholder.jpeg' : `${user.imgSrc}`} alt="profile picture"/>
        
            <Typography fontSize={14}>{`${user.name} ${user.surname}`}</Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Nustatymai
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Atsijungti
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavbarMeniu;
