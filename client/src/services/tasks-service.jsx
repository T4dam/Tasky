import axios from 'axios';
// import store from '../store/index';
// import * as usersSlice from '../store/users';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getTasks = async () => {
//   const { token } = store.getState().auth;
  const { data: tasks } = await requester.get('/', {
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });

  return { tasks };
//   const action = usersSlice.loadUsers({ users });
//   store.dispatch(action);
};

export default {
  getTasks,
};
