
import { EventListItem } from './EventListItem'
export const EventList = ({ events }) => {

    return (
        <>
            {events.map((eve) => (
                <EventListItem  key={eve.id} event={eve} />

            ))}
        </>
    )
}