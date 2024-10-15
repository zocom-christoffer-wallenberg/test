import { useEffect, useState } from "react";

import Event from "../components/Event/Event";

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function getEvents() {
            const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/where-its-at-api/events');
            const data = await response.json();
            setEvents(data);
        }

        getEvents();
    }, []); // [] betyder att useEffect enbart körs en gång

    const eventComponents = events.map((event) => {
        return <Event event={ event } key={ event.name }/>
    });

    return (
        <section>
            <h2>Events</h2>
            { eventComponents }
        </section>
    )
}
  
export default Events;