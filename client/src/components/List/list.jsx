/* eslint-disable */
import React, {useContext} from 'react';
import { Paper, styled, CssBaseline, Box, IconButton } from '@mui/material';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Title from './title';
import Card from './card';
import InputContainer from '../Input/input-container';
import CancelIcon from '@mui/icons-material/Cancel';
import storeApi from '../../utilities/storeApi';

const ListContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: '#dfe3e6',
  borderRadius: theme.spacing(1),
  width: 300,
  padding: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

const List = ({ list, index }) => {
  const {deleteList} = useContext(storeApi);

  const handleDeleteList = () => {
    deleteList(list.id);
  };

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <Box ref={provided.innerRef} {...provided.draggableProps}>
          <ListContainer {...provided.dragHandleProps}>
            <CssBaseline />
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Title title={list.title} listId={list.id} />
            <IconButton onClick={handleDeleteList} sx={{color:"black"}} size="small">
            <CancelIcon fontSize='small'/>
            </IconButton>
            </Box>
            <Droppable droppableId={list.id}>
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  sx={{ marginTop: '8px' }}
                >
                  {list.cards.map((card, index) => (
                    <Card key={card.id} listId={list.id} card={card} index={index} />
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
