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

const InputCardContainer = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(1),
  padding: theme.spacing(1),
  minHeight: '85px',
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
        <InputCardContainer>
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
        </InputCardContainer>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={cardContent === ''}
          onMouseDown={handleSubmit}
          sx={{ width: 100, mb: '8px' }}
        >
          Pridėti
        </Button>
        <IconButton sx={{ cursor: 'pointer' }} onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InputCard;
