import { Grid } from "semantic-ui-react"
import { EventDetailedHeader } from "./EventDetailedHeader"
import { EventDetailedInfo } from "./EventDetailedInfo"
import { EventDetailedChat } from "./EventDetailedChat"
import { EventDetailedSidebar } from "./EventDetailedSidebar"
export const EventDetailedPage = () => (


    <Grid>
        <Grid.Column width={10}>
            <EventDetailedHeader />
            <EventDetailedInfo />
            <EventDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
            <EventDetailedSidebar />
        </Grid.Column>
    </Grid>
)