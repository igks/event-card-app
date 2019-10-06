// Import dependencies
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Events from './reducers/Events';

// initiate store vatiable
const initialState = {};
const middleware = [thunk];

// create the redux store
const store = createStore(
  Events,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
