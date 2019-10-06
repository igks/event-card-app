// import type from type, the type is create in separated file for easier to manage when the app growing
import { GET_ALL_EVENTS } from '../actions/Types';

// initiate the state
const initialState = {
  events: null
};

export default function(state = initialState, action) {
  // destructuring the prop
  const { type, payload } = action;

  // define the action based on action type
  switch (type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        events: payload
      };
    default:
      return state;
  }
}
