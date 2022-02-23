import React from 'react';
import {
  styled,
  Card as TextCard,
  CardContent,
  Typography,
} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

const InputCard = styled(TextCard)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const InputCardContainer = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),

}));
const Card = ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {(provided) => (
      <InputCard
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <InputCardContainer>
          <Typography>{card.content}</Typography>
        </InputCardContainer>
      </InputCard>
    )}
  </Draggable>
);

export default Card;
