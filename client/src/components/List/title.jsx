import React, { useState, useContext } from 'react';
import {
  Typography,
  InputBase,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import storeApi from '../../utilities/storeApi';

const InputStyle = {
  background: '#F9FAFB',
  borderRadius: '4px',
  paddingLeft: '6px',
};

const Title = ({ title, listId }) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(storeApi);

  const handleOnEdit = (e) => {
    setNewTitle(e.target.value);
  };
  const saveOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <Box>
      {open ? (
        <Box>
          <InputBase
            onChange={handleOnEdit}
            style={{ InputStyle }}
            value={newTitle}
            fullWidth
            onBlur={saveOnBlur}
          />
        </Box>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <Typography
            onMouseDown={() => setOpen(!open)}
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          <MenuIcon />
        </Box>
      )}
    </Box>
  );
};

export default Title;
