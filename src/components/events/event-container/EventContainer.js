import React from 'react';
import './EventContainer.css';
import { Container, Card } from 'react-bootstrap';
import EventList from '../event-list/EventList';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function EventContainer() {
  return (
    <Container>
      <h2>Event List</h2>
      <Button className='m-1'>
        <FontAwesomeIcon icon={faPlus} /> {' Event'}
      </Button>
      <Card className='py-1 even-container'>
        <Container>
          <EventList></EventList>
          <EventList></EventList>
          <EventList></EventList>
          <EventList></EventList>
        </Container>
      </Card>
    </Container>
  );
}

export default EventContainer;
