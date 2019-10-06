// import dependencies
import axios from 'axios';
import Swal from 'sweetalert2';

// import action type
import { GET_ALL_EVENTS } from './Types';

//Get all events list
export const getAllEvents = () => async dispatch => {
  try {
    // fetch the data from database
    const res = await axios.get('/event');
    // dispatch the action and passed the data
    dispatch({
      type: GET_ALL_EVENTS,
      payload: res.data
    });
  } catch (err) {
    // rise popup message when there is an eror during request
    if (err.status !== 200) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!, please ensure the server is online'
      });
    }
  }
};

// Add new event to list
export const addEvent = formData => async dispatch => {
  try {
    // create config for header
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // post the data to api and request the updated list
    await axios.post('/event', formData, config);
    const res = await axios.get('/event');
    // dispatch action and passed the data
    dispatch({
      type: GET_ALL_EVENTS,
      payload: res.data
    });
    // rise popup message when operation success
    Swal.fire({
      type: 'success',
      title: 'Great..!',
      text: 'New event has been added to the list'
    });
  } catch (err) {
    // rise popup message when there is any error
    if (err.status !== 200) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Server error, can not add event to the list!'
      });
    }
  }
};
