import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './auth/index';

const store = createStore(authReducer, composeWithDevTools());

export default store;
