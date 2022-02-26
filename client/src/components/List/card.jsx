import React from 'react';
import {
  styled,
  Card as TextCard,
  CardContent,
  Typography,
} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

const Cardy = styled(TextCard)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const CardyContainer = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),

}));
const Card = ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {(provided) => (
      <Cardy
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <CardyContainer>
          <Typography>{card.content}</Typography>
        </CardyContainer>
      </Cardy>
    )}
  </Draggable>
);

export default Card;
