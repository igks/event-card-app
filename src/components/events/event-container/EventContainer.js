// import dependencies
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

// import style and component
import './EventContainer.css';
import { Container, Card } from 'react-bootstrap';
import EventList from '../event-list/EventList';

// redux utility
import { connect } from 'react-redux';
import { getAllEvents } from '../../../actions/Event';

const EventContainer = ({ getAllEvents, events }) => {
  // run the action when the component initiate
  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

  // render view
  return (
    <Fragment>
      <Container>
        <h3 className='mt-3'>Ongoing Events</h3>
        <Card className='py-1 even-container'>
          <Container>
            {/* render event list by pasing the list of the event from database */}
            <EventList events={events} />
          </Container>
        </Card>
      </Container>
    </Fragment>
  );
};

// all required prop
EventContainer.propTypes = {
  getAllEvents: PropTypes.func.isRequired
};

// map state to prop, select data needed by component by passing it in the connect
const mapStateToProps = state => ({
  events: state.events
});

export default connect(
  mapStateToProps,
  { getAllEvents }
)(EventContainer);
