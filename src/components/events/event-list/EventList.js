import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUsers,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';

const EventList = ({ events }) => {
  events = events && events.reverse();
  const allEvent =
    events &&
    events.map(event => (
      <Card className='my-3' key={event._id}>
        <Card.Body>
          <Card.Text className='text-primary'>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <Moment format='YYYY-MM-DDTHH:mm:ss.SSSS'> {event.date}</Moment>
            {/* {event.date} */}
            <span>
              <a href='#/'>
                <FontAwesomeIcon className='float-right' icon={faPencilAlt} />
              </a>
            </span>
          </Card.Text>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text className='text-primary'>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faUsers} /> {event.participants}
          </Card.Text>
          <Card className='my-2'>
            <Card.Body className='bg-light p-2'>
              <Card.Text>
                <strong>Note:</strong> {event.notes}
              </Card.Text>
            </Card.Body>
          </Card>
          <Button className='btn btn-secondary m-1 float-right'>Cancel</Button>
          <Button className='btn btn-primary m-1 float-right'>Done</Button>
        </Card.Body>
      </Card>
    ));

  return <Fragment>{allEvent}</Fragment>;
};

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default connect(null)(EventList);

//
// return (
//   <Fragment>
// <Card className='my-3'>
//   <Card.Body>
//     <Card.Text className='text-primary'>
//       <FontAwesomeIcon icon={faCalendarAlt} />
//       {' 2 Oktober 2019'}
//       <span>
//         <a href='#/'>
//           <FontAwesomeIcon className='float-right' icon={faPencilAlt} />
//         </a>
//       </span>
//     </Card.Text>
//     <Card.Title>Meeting CEO</Card.Title>
//     <Card.Text className='text-primary'>
//       <FontAwesomeIcon icon={faMapMarkerAlt} /> {' Batam Center'}
//     </Card.Text>
//     <Card.Text>
//       <FontAwesomeIcon icon={faUsers} />
//       {
//         ' Jon, Amela, Jon, Amela, Jon, Amela, Jon, Amela, Jon, Amela, Jon, Amela,Jon, Amela, Jon, Amela, '
//       }
//     </Card.Text>
//     <Card className='my-2'>
//       <Card.Body className='bg-light p-2'>
//         <Card.Text>
//           <strong>Note:</strong> Lorem ipsum dolor sit amet consectetur
//           adipisicing elit. Perferendis, aliquid! Nisi laboriosam dolore
//           cumque excepturi illum aperiam culpa, eum error nostrum ratione
//           itaque, eos fugiat natus maxime similique assumenda commodi.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     <Button className='btn btn-secondary m-1 float-right'>Cancel</Button>
//     <Button className='btn btn-primary m-1 float-right'>Done</Button>
//   </Card.Body>
// </Card>
//   </Fragment>
// );

// export default EventList;
