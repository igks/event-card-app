import React, { Fragment, Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './EventContainer.css';
import { Container, Card } from 'react-bootstrap';
import EventList from '../event-list/EventList';
import { getAllEvents } from '../../../actions/Event';

// import { Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EventContainer = ({ getAllEvents, events }) => {
  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <Fragment>
      <Container>
        <h3 className='mt-3'>Event List</h3>
        <Card className='py-1 even-container'>
          <Container>
            <EventList events={events} />
          </Container>
        </Card>
      </Container>
    </Fragment>
  );
};

EventContainer.propTypes = {
  getAllEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  events: state.events
});

export default connect(
  mapStateToProps,
  { getAllEvents }
)(EventContainer);

// export default class EventContainer extends Component {
//   state = {
//     event: []
//   };

//   componentDidMount() {
//     axios.get('http://localhost:5000/event').then(res => {
//       const event = res.data;
//       this.setState({ event });
//       console.log(event);
//     });
//   }
//   render() {
//     return (
//       <Fragment>
//         <Container>
//           <h3 className='mt-3'>Event List</h3>
//           <Card className='py-1 even-container'>
//             <Container>
//               <EventList></EventList>
//               <EventList></EventList>
//               <EventList></EventList>
//               <EventList></EventList>
//             </Container>
//           </Card>
//         </Container>
//       </Fragment>
//     );
//   }
// }
