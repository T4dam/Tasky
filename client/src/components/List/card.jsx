import React from 'react';
import {
  styled,
  Card as TextCard,
  CardContent,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import CancelIcon from '@mui/icons-material/Cancel';

const Cardy = styled(TextCard)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const CardyContainer = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingRight: 0,

}));
const Card = ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {(provided) => (
      <Cardy
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <CardyContainer sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>{card.content}</Typography>
          <Box>
            <IconButton size="small">
              <CancelIcon fontSize="small" />
            </IconButton>
          </Box>
        </CardyContainer>
      </Cardy>
    )}
  </Draggable>
);

export default Card;
