import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';

const EditedLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  padding: theme.spacing(0, 4),
  alignItems: 'center',
  height: '100%',
  color: theme.palette.grey[200],
  opacity: 0.75,
  ':hover': {
    opacity: 1,
  },
  '&.active': {
    opacity: 1,
  },
}));

const NavbarLink = ({ to, children }) => (
  <EditedLink to={to}>{children}</EditedLink>
);

export default NavbarLink;
