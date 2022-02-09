/* eslint-disable */
import React from 'react';
import { Paper, styled, CssBaseline, Box } from '@mui/material';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Title from './title';
import Card from './card';
import InputContainer from '../Input/list-input-container';

const ListContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: '#dfe3e6',
  borderRadius: theme.spacing(1),
  width: 300,
  padding: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

const List = ({ list, index }) => {
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <Box ref={provided.innerRef} {...provided.draggableProps}>
          <ListContainer {...provided.dragHandleProps}>
            <CssBaseline />
            <Title title={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  sx={{ marginTop: '8px' }}
                >
                  {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
            <InputContainer listId={list.id} type="card" />
          </ListContainer>
        </Box>
      )}
    </Draggable>
  );
};

export default List;
