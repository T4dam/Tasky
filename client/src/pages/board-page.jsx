/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { v4 as createId } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from '../components/List/list';
import store from '../utilities/store';
import StoreApi from '../utilities/storeApi';
import InputContainer from '../components/Input/input-container';
import tasksService from '../services/tasks-service';
// import { useSelector } from 'react-redux';
// import { selectAuth } from '../store/auth';

const BoardPage = () => {
  const [data, setData] = useState(store);
  // const { user } = useSelector(selectAuth);

  const addNewCard = async (content, listId) => {
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

    const index =  data.listIds.findIndex(i => i === listId);
    if (index >= 0) {
      await tasksService.saveCards(list.cards, index);
    }
  };
  const addNewList = async (title) => {
    // const newList = await ApiService.createList(title)
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
    await tasksService.createList(title);

  };

  const updateListTitle = async (title, listId) => {
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
    const index =  data.listIds.findIndex(i => i === listId);
    if (index >= 0) {
      await tasksService.updateList(title, index);
    }
  };

  const deleteCard = async (index, listId) => {
    const newCards = data.lists[listId].cards.filter((card, i) => index !== i);
    // console.log(newCards)
    const list = data.lists[listId];
    list.cards = [...newCards];

    const newState = {
      ...data,
      [listId]: {
        ...list,
        cards: [...newCards],
      },
    };
    setData(newState)

    const indexOfList =  data.listIds.findIndex(i => i === listId);
    if (indexOfList >= 0) {
      await tasksService.saveCards(list.cards, indexOfList);
    }
  }

  const updateCard = async (index, listId, newText) => {

    const newCards = data.lists[listId].cards.map((c, i) => i === index ? ({...c, content: newText}) : c);
    console.log(newCards, listId)
    const list = data.lists[listId];
    list.cards = [...newCards];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: {
          ...list,
          cards: [...newCards],
        },
      }
    };
    console.log(newState)
    setData(newState)

    const indexOfList =  data.listIds.findIndex(i => i === listId);
    if (indexOfList >= 0) {
      await tasksService.saveCards(list.cards, indexOfList);
    }
  }

  const deleteList = async (listId) => {
    const newListsIds = data.listIds.filter((list) => list !== listId);

    let newLists = {};
    for (let i = 0; i < newListsIds.length; i++) {
      const listId = newListsIds[i];
      newLists[listId] = data.lists[listId];
    }

    const newState = {
      lists: newLists,
      listIds: newListsIds
    };
    setData(newState);
    await saveAllListsToDB(newState);
  };
 
  const onDragEnd = async (result) => {
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
      // console.log('dragged a bit');
      await saveAllListsToDB();
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

      const listIndex = data.listIds.indexOf(sourceList.id);
      if (listIndex >= 0) {
        await tasksService.saveCards(destinationList.cards, listIndex);
      }
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
      // console.log('dragged a bit');

      await saveAllListsToDB()
    }
  };

  const saveAllListsToDB = async (newData = undefined) => {
    let listsArray = [];

    if (newData) {
      for (let i = 0; i < newData.listIds.length; i++) {
        const listId = newData.listIds[i];
        const list = newData.lists[listId];
        listsArray.push({
            id: list.id,
            title: list.title,
            tasks: list.cards  
        });
      }
    } else {
      for (let i = 0; i < data.listIds.length; i++) {
        const listId = data.listIds[i];
        const list = data.lists[listId];
        listsArray.push({
            id: list.id,
            title: list.title,
            tasks: list.cards  
        });
      }
    }

    await tasksService.saveLists(listsArray);
  };

  useEffect(() => {
    (async () => {
      const fetchedLists = await tasksService.getLists();

      const newData = {
        lists: {},
        listIds: []
      };

      for (let i = 0; i < fetchedLists.length; i++) {
        const element = fetchedLists[i];
        const newId = createId();

        newData.listIds.push(newId);
        newData.lists[newId] = {
          id: newId,
          title: element.title,
          cards: element.tasks,
        }
        
      }

      setData(newData);


    })();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StoreApi.Provider value={{ addNewCard, addNewList, updateListTitle, deleteCard, deleteList, updateCard }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="Board" direction="horizontal" type="list">
          {(provided) => (
            <Box
              sx={{
                mt: 7.5,
                mb: 2,
                pl: 1.7,
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

