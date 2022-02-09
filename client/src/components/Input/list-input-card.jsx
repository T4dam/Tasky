import {
  Box,
  InputBase,
  Paper,
  Button,
  styled,
  IconButton,
} from '@mui/material';
import React, { useState, useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import storeApi from '../../utilities/storeApi';

const StyledCardContainer = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(1),
  padding: theme.spacing(1),
  minHeight: '85px',
}));
const ActionButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const InputCard = ({ setOpen, listId, type }) => {
  const { addNewCard, addNewList } = useContext(storeApi);
  const [cardContent, setCardContent] = useState('');

  const handleOnChange = (e) => {
    setCardContent(e.target.value);
  };
  const handleSubmit = () => {
    if (type === 'card') {
      addNewCard(cardContent, listId);
      setCardContent('');
      setOpen(false);
    } else {
      addNewList(cardContent);
      setCardContent('');
      setOpen(false);
    }
  };

  return (
    <Box>
      <Box>
        <StyledCardContainer>
          <InputBase
            style={{ overflow: 'hidden' }}
            onChange={handleOnChange}
            multiline
            onBlur={() => setOpen(false)}
            fullWidth
            value={cardContent}
            placeholder={
              type === 'card' ? 'Pridėti užrašą' : 'Pridėti pavadinimą'
            }
          />
        </StyledCardContainer>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <ActionButton
          variant="contained"
          style={{ color: 'white', backgroundColor: '#5aac44' }}
          onMouseDown={handleSubmit}
        >
          Pridėti
        </ActionButton>
        <IconButton sx={{ cursor: 'pointer' }} onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InputCard;
