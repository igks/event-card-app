import React, { Fragment } from 'react';
import { Container, Form, Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function AddEvent() {
  return (
    <Fragment>
      <Container>
        <Accordion className='mb-5'>
          <Accordion.Toggle eventKey='0' className='my-3 btn btn-info'>
            <h5>
              <FontAwesomeIcon icon={faPlus} />
              {' Add New Event'}
            </h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
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
                />
              </Form.Group>

              <Form.Group controlId='date'>
                <Form.Control
                  type='date'
                  name='date'
                  required
                  autocomplete='off'
                />
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
          </Accordion.Collapse>
        </Accordion>
      </Container>
    </Fragment>
  );
}
