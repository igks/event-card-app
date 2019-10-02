import React, { Fragment } from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function Dashboard() {
  return (
    <Fragment>
      <Container>
        <Navbar bg='primary' variant='dark'>
          <Navbar.Brand>
            {'Event and Temperature Monitoring Dashboard'}
          </Navbar.Brand>
        </Navbar>
      </Container>
    </Fragment>
  );
}
