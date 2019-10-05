import { ADD_EVENT, GET_ALL_EVENTS } from '../actions/Types';

const initialState = {
  events: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

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
