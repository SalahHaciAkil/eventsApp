import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Button, Container, Icon, Item, List, Segment } from "semantic-ui-react";
import { deleteEvent } from "../eventActions";
import { EventListAttendee } from './EventListAttendee';

export const EventListItem = ({ event }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <>

            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header content={event.title}>

                                </Item.Header>
                                <Item.Description>
                                    Hosted by {event.hostedBy}
                                </Item.Description>
                            </Item.Content>

                        </Item>

                    </Item.Group>
                </Segment>

                <Segment>
                    <Icon name="clock" />{event.date + ' '}
                    <Icon name="marker" />{event.venue}
                </Segment>


                <Segment >

                    <List horizontal>
                        {event.attendees && event.attendees.map((attendee) => (
                            <EventListAttendee key={attendee.id} attendee={attendee} />
                        ))}

                    </List>


                </Segment>


                <Segment clearing>
                    <Container>
                        <p>{event.description}</p>

                        <Button onClick={() => (history.push(`/events/${event.id}`))} color="teal" floated="right" content="View" />
                        <Button onClick={() => dispatch(deleteEvent(event.id))} color="red" floated="right" content="Delete" />
                    </Container>
                </Segment>

            </Segment.Group>

        </>
    )
}