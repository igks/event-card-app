import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Events from './reducers/Events';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  Events,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
