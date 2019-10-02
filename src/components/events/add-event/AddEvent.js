import React, { Fragment } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function AddEvent() {
  return (
    <Fragment>
      <Container>
        <h3 className='mt-3'>Add New Event</h3>
        <Form>
          <Form.Group controlId='title'>
            <Form.Control
              type='text'
              name='title'
              placeholder='Enter title'
              required
              autocomplete='off'
            />
          </Form.Group>

          <Form.Group controlId='location'>
            <Form.Control
              type='text'
              name='location'
              placeholder='Enter the location'
              required
              autocomplete='off'
            />
          </Form.Group>

          <Form.Group controlId='participant'>
            <Form.Control
              type='text'
              name='participant'
              placeholder='Invite the participants'
              required
              autocomplete='on'
            />
          </Form.Group>

          <Form.Group controlId='date'>
            <Form.Control type='date' name='date' required autocomplete='off' />
          </Form.Group>

          <Form.Group controlId='note'>
            <Form.Control
              as='textarea'
              name='note'
              rows='4'
              placeholder='Enter additional note'
              required
              autocomplete='off'
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
}
