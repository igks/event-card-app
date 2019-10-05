import axios from 'axios';

import { GET_ALL_EVENTS, ADD_EVENT } from './Types';

//Get all events list
export const getAllEvents = () => async dispatch => {
  try {
    const res = await axios.get('/event');

    dispatch({
      type: GET_ALL_EVENTS,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: EVENT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

// Add new event to list
export const addEvent = (formData, event) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    await axios.post('/event', formData, config);
    const res = await axios.get('/event');

    dispatch({
      type: GET_ALL_EVENTS,
      payload: res.data
    });
  } catch (err) {}
};
