import './App.css';
import { EventDashboard } from '../../features/events/eventsDashboard/EventDashboard';
import { Navbar } from '../../features/nav/Navbar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom'

import Home from '../../features/home/Home';
// import { EventDetailedPage } from '../../features/events/eventDetailed/EventDetailedPage.js'
// import { EventDetailedPage } from '../../features/events/eventDetailed/EventDetailedPage'
import { EventForm } from '../../features/events/eventForm/EventForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EventDetailedPage } from '../../features/events/EventDetailed/EventDetailedPage';

function App() {


  // function handleSelectedEvent(event) {
  //   setFormOpen(true);
  //   setSelectedEvent(event);
  // }


  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path={'/(.+)'} render={() => (
        <>
          <Navbar />
          <Container className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={EventDashboard} />
            <Route exact path="/events/:id" component={EventDetailedPage} />
            <Route path={["/createEvent", "/manage/:id"]} component={EventForm} />
          </Container>
        </>
      )}
      />



    </>

  );
}

export default App;
