import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { EventList } from './EventList';
import { sampleData } from '../../../app/api/SampleDate';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../eventActions';

export const EventDashboard = ({history }) => {

    // const [events, setEvents] = useState(sampleData);
    const events = useSelector(state => state.event.events);

    // function addEvent(event) {
    //     setEvents([...events, event]);
    // }

    // function handleUpdateEvent(updatedEvent) {
    //     let eventss = events.map((eve) => eve.id === updatedEvent.id ? updatedEvent : eve);
    //     setEvents(eventss);

    // }




    return (

        < Grid >

            <Grid.Column width={10}>
                <EventList events={events} ></EventList>
            </Grid.Column>
            <Grid.Column width={6}>
                <h1>Event filters</h1>
            </Grid.Column>

        </Grid >

    )
}