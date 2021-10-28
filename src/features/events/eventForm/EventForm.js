import { Button, Form, Header, Item, Segment } from "semantic-ui-react"


export const EventForm = ({ setFormOpen }) => {

    return (

        <Segment clearing>
            <Header content="Header of Form" />

            <Form>
                <Form.Field>
                    <input type="text" name="eventTitle" placeholder="Event title" />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="category" placeholder="Category" />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="city" placeholder="Description" />
                </Form.Field>
                <Form.Field>
                    <input type="text" name="city" placeholder="City" />
                </Form.Field>
                <Form.Field>
                    <input type="date" name="date" placeholder="Date" />
                </Form.Field>
            </Form>

            <div className="buttons" style={{ 'marginTop': '.5rem' }}>
                <Button onClick={() => setFormOpen(false)} type="submit" content="Cancel" floated="right" basic />
                <Button type="submit" content="Submit" floated="right" positive />
            </div>







        </Segment>



    )
}