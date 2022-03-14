import React, { useContext } from 'react';
import {
  styled,
  Card as TextCard,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import CancelIcon from '@mui/icons-material/Cancel';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import storeApi from '../../utilities/storeApi';
import CardUpdateModal from './card-update-modal';

const Cardy = styled(TextCard)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  paddingBottom: 0,
}));

const CardyContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingRight: 0,
  paddingBottom: '3px',
  paddingTop: '3px',
}));
const Card = ({ card, index, listId }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { deleteCard } = useContext(storeApi);
  const handleDelete = () => {
    deleteCard(index, listId);
  };
  return (
    <>
      <CardUpdateModal isOpen={isOpen} handleClose={handleClose} />
      <Draggable draggableId={card.id} index={index}>
        {(provided) => (
          <Cardy
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardyContainer sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>{card.content}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom: 0 }}>
                <IconButton onClick={handleDelete} size="small">
                  <CancelIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={handleOpen} size="small">
                  <DriveFileRenameOutlineIcon fontSize="small" />
                </IconButton>
              </Box>
            </CardyContainer>
          </Cardy>
        )}
      </Draggable>

    </>
  );
};

export default Card;
