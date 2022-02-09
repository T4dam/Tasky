/* eslint-disable*/
import changeState from 'immer';
import { LOGIN_SUCCESS, LOGOUT } from './action-types';
import SessionStorage from '../../libs/session-storage';

const initState = SessionStorage.get('auth') ?? {
  loggedIn: false,
  token: null,
  user: null,
};

const authReducer = (oldState = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const newState = changeState(oldState, (newState) => {
        newState.loggedIn = true;
        newState.token = action.payload.token;
        newState.user = action.payload.user;
      });
      SessionStorage.set('auth', newState)
      return newState
    }
    case LOGOUT: {
        const newState = changeState(oldState, (newState) => {
            newState.loggedIn = false;
            newState.token = null;
            newState.user = null;
        })
        SessionStorage.clear('auth')
        return newState
    }
    default:
      return oldState;
  }
      
    
};

export default authReducer;
