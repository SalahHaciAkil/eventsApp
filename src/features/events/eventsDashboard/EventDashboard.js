import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { EventList } from './EventList';
import { sampleData } from '../../../app/api/SampleDate';

export const EventDashboard = ({ handleSelectedEvent, history }) => {

    const [events, setEvents] = useState(sampleData);

    // function addEvent(event) {
    //     setEvents([...events, event]);
    // }

    // function handleUpdateEvent(updatedEvent) {
    //     let eventss = events.map((eve) => eve.id === updatedEvent.id ? updatedEvent : eve);
    //     setEvents(eventss);

    // }

    function handleDeleteEvent(eventId) {
        let eventss = events.filter(eve => eve.id !== eventId);
        setEvents(eventss);
    }



    return (

        < Grid >

            <Grid.Column width={10}>
                <EventList events={events} history={history}
                    handleDeleteEvent={handleDeleteEvent}
                    handleSelectedEvent={handleSelectedEvent}></EventList>
            </Grid.Column>
            <Grid.Column width={6}>
                <h1>Event filters</h1>
            </Grid.Column>

        </Grid >

    )
}