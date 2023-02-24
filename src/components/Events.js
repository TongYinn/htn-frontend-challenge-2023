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
    let x = 0;
    console.log(x);
    const relatedEventObjects = eventsToRender.filter((e) => {
      return e.related_events.includes(id);
    });
    console.log("relatedEventsObjects", relatedEventObjects);
    let relatedEvents = [];
    relatedEventObjects.forEach((event) => {
      console.log(event.name);
      relatedEvents.push({
        name: event.name,
        private_url: event.private_url,
        public_url: event.public_url,
      });
    });
    x = x + 1;
    return relatedEvents;
  };

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
