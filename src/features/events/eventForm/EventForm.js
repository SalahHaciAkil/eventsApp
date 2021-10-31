import { useState } from "react";
import cuid from 'cuid'
import { Button, Form, Header, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import userPhoto from '../../../assets/user.png'
export const EventForm = ({ match, history }) => {
    let eventId = match.params.id;
    const dispatch = useDispatch();
    const event = useSelector(state => state.event.events.find(eve => eve.id === eventId));
    let initialValues = event ? { ...event } : {
        title: '',
        category: '',
        description: '',
        venue: '',
        city: '',
        date: ''

    }
    const [values, setValues] = useState(initialValues);




    function handleSubmitEvent() {

        event ? dispatch(updateEvent({ ...values })) :
            dispatch(createEvent({ ...values, id: cuid(), attendees: [], hostedBy: "salah", hostPhotoURL: userPhoto }));
        history.push('/events')

    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    return (

        <Segment clearing>
            <Header content={event ? 'Edit event' : 'Create event'} />
            <Form onSubmit={handleSubmitEvent}>
                <Form.Field>
                    <input type="text" name="title" value={values.title} onChange={(e) => handleInputChange(e)} placeholder="Event title" />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="category" value={values.category} placeholder="Category" onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="description" value={values.description} placeholder="Description" onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="venue" value={values.venue} placeholder="Venue" onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="city" value={values.city} placeholder="City" onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="date" name="date" value={values.date} placeholder="Date" onChange={(e) => handleInputChange(e)} />
                </Form.Field>

                <Form.Field>
                    <Button as={Link} to="/events" content="Cancel" basic floated="right" />
                    <Button type="submit" content="Submit" positive floated="right" />
                </Form.Field>
            </Form>









        </Segment>



    )
}