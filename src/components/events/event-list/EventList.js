import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

function EventList() {
  return (
    <Fragment>
      <Card className='my-3'>
        <Card.Body>
          <Card.Text className='text-primary'>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {' 2 Oktober 2019'}
          </Card.Text>
          <Card.Title>Meeting CEO</Card.Title>
          <Card.Text className='text-primary'>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {' Batam Center'}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faUsers} />
            {' Jon, Amela'}
          </Card.Text>
          <Card className='my-2'>
            <Card.Body className='bg-light p-2'>
              <Card.Text>
                <strong>Note:</strong> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perferendis, aliquid! Nisi laboriosam dolore
                cumque excepturi illum aperiam culpa, eum error nostrum ratione
                itaque, eos fugiat natus maxime similique assumenda commodi.
              </Card.Text>
            </Card.Body>
          </Card>
          <Button className='btn btn-secondary m-1 float-right'>Cancel</Button>
          <Button className='btn btn-primary m-1 float-right'>Done</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default EventList;
