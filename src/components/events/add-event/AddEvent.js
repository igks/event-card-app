import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../../../actions/Event';
import { Container, Form, Button, Accordion, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddEvent = ({ addEvent }) => {
  const [formData, setFormData] = useState({
    title: '',
    locatioan: '',
    participants: '',
    date: '',
    timeStart: '',
    timeEnd: '',
    notes: ''
  });

  const {
    title,
    location,
    participants,
    date,
    timeStart,
    timeEnd,
    notes
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addEvent(formData);
    setFormData('');
  };

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
            <Form onSubmit={e => onSubmit(e)} name='addEventForm'>
              <Form.Group controlId='title'>
                <Form.Control
                  type='text'
                  name='title'
                  value={title}
                  onChange={e => onChange(e)}
                  placeholder='Enter event title'
                  required
                  autoComplete='off'
                />
              </Form.Group>

              <Form.Group controlId='location'>
                <Form.Control
                  type='text'
                  name='location'
                  value={location}
                  onChange={e => onChange(e)}
                  placeholder='Enter the location'
                  required
                  autoComplete='off'
                />
              </Form.Group>

              <Form.Group controlId='participant'>
                <Form.Control
                  type='text'
                  name='participants'
                  value={participants}
                  onChange={e => onChange(e)}
                  placeholder='Invite the participants'
                  required
                />
                <Form.Text size='small' className='text-danger'>
                  * Please use coma separated for the participants. e.g. John,
                  Anna, ...
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='date'>
                <Form.Control
                  type='date'
                  name='date'
                  value={date}
                  onChange={e => onChange(e)}
                  required
                  autoComplete='off'
                />
              </Form.Group>

              <Form.Group controlId='time'>
                <Row>
                  <Col>
                    <Form.Control
                      type='text'
                      name='timeStart'
                      value={timeStart}
                      onChange={e => onChange(e)}
                      required
                      placeholder='Start time'
                      autoComplete='off'
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type='text'
                      name='timeEnd'
                      value={timeEnd}
                      onChange={e => onChange(e)}
                      required
                      placeholder='Event end'
                      autoComplete='off'
                    />
                  </Col>
                </Row>
                <Form.Text size='small' className='text-danger'>
                  * Time format is 24H. e.g. 15.00
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='note'>
                <Form.Control
                  type='text'
                  name='notes'
                  value={notes}
                  onChange={e => onChange(e)}
                  rows='3'
                  placeholder='Enter additional note'
                  minLength={3}
                  required
                  autoComplete='off'
                />
                <Form.Text size='small' className='text-danger'>
                  * The note must be more than 50 characters
                </Form.Text>
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
};

AddEvent.propTypes = (addEvent: PropTypes.func.isRequired);

export default connect(
  null,
  { addEvent }
)(AddEvent);
