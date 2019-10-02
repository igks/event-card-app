import React, { Fragment } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import EventContainer from '../events/event-container/EventContainer';

export default function Dashboard() {
  return (
    <Fragment>
      <Container>
        <Navbar bg='primary' variant='dark'>
          <Navbar.Brand>
            {'Event and Temperature Monitoring Dashboard'}
          </Navbar.Brand>
        </Navbar>
        <EventContainer></EventContainer>
      </Container>
    </Fragment>
  );
}
