import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import { Grid } from "@chakra-ui/react";

import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "./Events.css";

const Events = () => {
  const { user } = useAuth0();
  const [events, setEvents] = useState([]);
  const [finalEvents, setFinalEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios("https://api.hackthenorth.com/v3/events");
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(
    (event) => user || event.permission === "public"
  );

  const eventsToRender = user ? events : filteredEvents;

  const getRelatedEvents = (id) => {
    const relatedEventObjects = eventsToRender.filter((e) => {
      return e.related_events.includes(id);
    });
    console.log("eventsToRender", eventsToRender);
    console.log(
      "relatedEventsObject after filter",
      eventsToRender.filter((e) => {
        e.related_events.includes(id);
      })
    );
    let relatedEvents = [];
    relatedEventObjects.forEach((event) => {
      relatedEvents.push({
        name: event.name,
        private_url: event.private_url,
        public_url: event.public_url,
      });
    });

    return relatedEvents;
  };

  //   eventsToRender.forEach((event) => {
  //     const relatedEventObjects = eventsToRender.filter((e) => {
  //       event.related_events.includes(e.id);
  //     });
  //     let relatedEvents = [];
  //     relatedEventObjects.forEach((event) => {
  //       relatedEvents.push({
  //         name: event.name,
  //         private_url: event.private_url,
  //         public_url: event.public_url,
  //       });
  //     });
  //     event.related_events = relatedEvents;
  //     relatedEvents = [];
  //   });

  //   eventsToRender.forEach((event) => {
  //     const relatedEvents = eventsToRender.filter((e) =>
  //       event.related_events.includes(e.id)
  //     );
  //     event.related_events = relatedEvents;
  //     return event;
  //   });

  //   console.log(eventsToRender.filter((e) => events[1].related_events.includes(e.id)))

  //   for (let event of eventsToRender) {
  //     console.log(event.id);
  //     const relatedEvents = eventsToRender.filter((e) =>
  //       event.related_events.includes(e.id)
  //     );
  //     event.related_events = relatedEvents;
  //     console.log(event.related_events);
  //   }

  // for await (let event of eventsToRender) {
  //     events.related_events.forEach((e) => {
  //         const response = axios(`https://api.hackthenorth.com/v3/events/${e}`);
  //     })
  //     event.related_events
  // }

  console.log("in events.js about to return", getRelatedEvents(1));
  return (
    <div className="events-container">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {eventsToRender
          .sort((a, b) => a.start_time - b.start_time)
          .map((event) => (
            <EventCard
              key={event.id}
              event={event}
              relatedEvents={getRelatedEvents(event.id)}
            />
          ))}
      </Grid>
    </div>
  );
};

export default Events;
