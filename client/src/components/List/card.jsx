import React from 'react';
import {
  styled,
  Card as TextCard,
  CardContent,
  Typography,
} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

const StyledTextCard = styled(TextCard)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const StyledCardContainer = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),
}));
const Card = ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {(provided) => (
      <StyledTextCard
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <StyledCardContainer>
          <Typography>{card.content}</Typography>
        </StyledCardContainer>
      </StyledTextCard>
    )}
  </Draggable>
);

export default Card;
