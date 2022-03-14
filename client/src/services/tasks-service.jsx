import axios from 'axios';
import store from '../store/index';
// import * as usersSlice from '../store/users';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getLists = async () => {
  const { token } = store.getState().auth;
  const { data } = await requester.get('/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => console.log(err));

  return data;
//   const action = usersSlice.loadUsers({ users });
//   store.dispatch(action);
};

const createList = async (title) => {
  const { token } = store.getState().auth;
  await requester.post('/', { title }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => console.log(err));
  return null;
};

const updateList = async (title, listIndex) => {
  const { token } = store.getState().auth;
  await requester.patch('/', { title, listIndex }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => console.log(err));
  return null;
};

const saveCards = async (tasks, listIndex) => {
  const { token } = store.getState().auth;
  await requester.post('/save-tasks', { tasks, listIndex }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => console.log(err));
  return null;
};

const saveLists = async (lists) => {
  const { token } = store.getState().auth;
  await requester.post('/save-lists', { lists }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => console.log(err));
  return null;
};

const updateCards = async (tasks, listIndex) => {
  const { token } = store.getState().auth;
  await requester.post('/save-tasks', { tasks, listIndex }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => console.log(err));
  return null;
};

export default {
  getLists,
  createList,
  saveCards,
  saveLists,
  updateList,
  updateCards,
};
