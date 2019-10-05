import React, { Fragment } from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import EventContainer from '../events/event-container/EventContainer';
import AddEvent from '../events/add-event/AddEvent';
import TempChart from '../temp-chart/TempChart';

export default function Dashboard() {
  return (
    <Fragment>
      <Container>
        <Navbar bg='primary' variant='dark'>
          <Navbar.Brand>
            <h2>Event and Temperature Monitoring Dashboard</h2>
          </Navbar.Brand>
        </Navbar>
        <Row>
          <Col>
            <EventContainer></EventContainer>
          </Col>
          <Col>
            <AddEvent></AddEvent>
          </Col>
        </Row>
        {/* <TempChart></TempChart> */}
      </Container>
    </Fragment>
  );
}
