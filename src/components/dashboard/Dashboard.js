// import dependencies
import React, { Fragment } from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';

// import component
import EventContainer from '../events/event-container/EventContainer';
import AddEvent from '../events/add-event/AddEvent';
import TempChart from '../temp-chart/TempChart';

export default function Dashboard() {
  return (
    // render the app
    <Fragment>
      <Container>
        <Navbar bg='primary' variant='dark'>
          <Navbar.Brand>
            <h2>Event and Temperature Monitoring Dashboard</h2>
          </Navbar.Brand>
        </Navbar>
        <Row>
          <Col md='6'>
            <EventContainer />
          </Col>
          <Col md='6'>
            <AddEvent />
          </Col>
        </Row>
        <TempChart />
      </Container>
    </Fragment>
  );
}
