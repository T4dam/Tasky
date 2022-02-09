import React, { useState } from 'react';
import {
  Typography,
  Paper,
  styled,
  Box,
  Collapse,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InputCard from './list-input-card';

const StyledButtonBox = styled(Paper)(({ theme }) => ({
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
  return (
    <Box>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <StyledButtonBox elevation={0} onClick={() => setOpen(!open)}>
          <AddIcon />
          <Typography style={{ flexShrink: 0 }}>
            {type === 'card' ? 'Pridėti užrašą' : 'Pridėti stulpelį'}
          </Typography>
        </StyledButtonBox>
      </Collapse>
    </Box>
  );
};

export default InputContainer;
