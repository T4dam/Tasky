import React, { useState } from 'react';
import {
  Typography,
  Paper,
  styled,
  Box,
  Collapse,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InputCard from './input-card';

const ButtonLong = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 284,
  cursor: 'pointer',
  height: theme.spacing(4),
  marginTop: theme.spacing(0.5),
  backgroundColor: '#dfe3e6',
  '&:hover': {
    backgroundColor: '#B2B6B8',
  },
}));

const InputContainer = ({ listId, type }) => {
  const [open, setOpen] = useState(false);

  const handleCollapsableToggle = () => setOpen(!open);

  return (
    <Box>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <ButtonLong elevation={0} onClick={handleCollapsableToggle}>
          <AddIcon />
          <Typography style={{ flexShrink: 0 }}>
            {type === 'card' ? 'Pridėti užrašą' : 'Pridėti stulpelį'}
          </Typography>
        </ButtonLong>
      </Collapse>
    </Box>
  );
};

export default InputContainer;
