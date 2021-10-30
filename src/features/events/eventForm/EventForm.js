import { useState } from "react";
import cuid from 'cuid'
import { Button, Form, Header, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom";
export const EventForm = ({ setFormOpen, addEvent, selectedEvent, handleUpdateEvent }) => {

    let initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        venue: '',
        city: '',
        date: ''

    }

    const [values, setValues] = useState(initialValues);

    function handleSubmitEvent() {
        selectedEvent ? handleUpdateEvent(values) :
            addEvent({ ...values, attendees: [], id: cuid(), hostedBy: "salah", hostPhotoURL: "../../../assets/user.png" });
        setFormOpen(false);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    return (

        <Segment clearing>
            {console.log("FromForm", selectedEvent)}
            {console.log(values)}
            <Header content={selectedEvent ? 'Edit event' : 'Create event'} />
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