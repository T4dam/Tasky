import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { v4 as createId } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from '../components/List/list';
import store from '../utilities/store';
import StoreApi from '../utilities/storeApi';
import InputContainer from '../components/Input/input-container';
import tasksService from '../services/tasks-service';

const BoardPage = () => {
  const [data, setData] = useState(store);

  const addNewCard = (content, listId) => {
    const newCardId = createId();
    const newCard = {
      id: newCardId,
      content,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  const addNewList = (title) => {
    const newListId = createId();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };
  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  const onDragEnd = (result) => {
    const {
      destination,
      source,
      draggableId,
      type,
    } = result;

    if (!destination) {
      return;
    }

    if (type === 'list') {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId,
    )[0];
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  useEffect(() => {
    tasksService.getTasks();
    console.log(tasksService.getTasks());
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StoreApi.Provider value={{ addNewCard, addNewList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="Board" direction="horizontal" type="list">
          {(provided) => (
            <Box
              sx={{
                my: 3,
                pl: 2,
                display: 'flex',
                minHeight: '100vh',
                overflowY: 'auto',
              }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.listIds.map((listId, index) => {
                const list = data.lists[listId];
                return <List list={list} key={listId} index={index} />;
              })}
              <InputContainer type="list" />
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </StoreApi.Provider>
  );
};

export default BoardPage;
