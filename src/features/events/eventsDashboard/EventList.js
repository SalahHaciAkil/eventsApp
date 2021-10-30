
import { EventListItem } from './EventListItem'
export const EventList = ({ events, handleSelectedEvent, handleDeleteEvent,history }) => {

    return (
        <>
            {events.map((eve) => (
                <EventListItem history={history} key={eve.id} event={eve}
                    handleDeleteEvent={handleDeleteEvent}
                    handleSelectedEvent={handleSelectedEvent} />

            ))}
        </>
    )
}