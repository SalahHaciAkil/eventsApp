import './App.css';
import { EventDashboard } from '../../features/events/eventsDashboard/EventDashboard';
import { Navbar } from '../../features/nav/Navbar';
import { Container } from 'semantic-ui-react';
import { useState } from 'react';
function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      {/* <div>Start the app</div>
       */}
      <Navbar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />

      </Container>
    </>

  );
}

export default App;
