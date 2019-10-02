import React, { Fragment } from 'react';
import './EventContainer.css';
import { Container, Card } from 'react-bootstrap';
import EventList from '../event-list/EventList';
// import { Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

function EventContainer() {
  return (
    <Fragment>
      <Container>
        <h3 className='mt-3'>Event List</h3>
        <Card className='py-1 even-container'>
          <Container>
            <EventList></EventList>
            <EventList></EventList>
            <EventList></EventList>
            <EventList></EventList>
          </Container>
        </Card>
      </Container>
    </Fragment>
  );
}

export default EventContainer;
