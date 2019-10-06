// import dependencies
import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUsers,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';

const EventList = ({ events }) => {
  // reverse the list to get the updated data in the first index
  events = events && events.reverse();

  // render all the data to the list view by looping each of the data and pass the value to the view component
  const allEvent =
    events &&
    events.map(event => (
      <Card className='my-3' key={event._id}>
        <Card.Body>
          <Card.Text className='text-primary'>
            <FontAwesomeIcon icon={faCalendarAlt} />{' '}
            <Moment format='D-MMM-YYYY' date={event.date} />
            {' / '}
            {event.timeStart} to {event.timeEnd}
            <span>
              <a href='#/'>
                <FontAwesomeIcon className='float-right' icon={faPencilAlt} />
              </a>
            </span>
          </Card.Text>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text className='text-primary'>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faUsers} /> {event.participants}
          </Card.Text>
          <Card className='my-2'>
            <Card.Body className='bg-light p-2'>
              <Card.Text>
                <strong>Note:</strong> {event.notes}
              </Card.Text>
            </Card.Body>
          </Card>
          <Button className='btn btn-secondary m-1 float-right'>Cancel</Button>
          <Button className='btn btn-primary m-1 float-right'>Done</Button>
        </Card.Body>
      </Card>
    ));

  // return the list to parent component
  return <Fragment>{allEvent}</Fragment>;
};

export default connect(null)(EventList);
