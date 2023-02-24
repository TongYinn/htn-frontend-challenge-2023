import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import { Grid } from "@chakra-ui/react";

import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios("https://api.hackthenorth.com/v3/events");
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  const eventsToRender = events;

  const getRelatedEvents = (id) => {
    const relatedEventObjects = eventsToRender.filter((e) => {
      return e.related_events.includes(id);
    });
    let relatedEvents = [];
    relatedEventObjects.forEach((event) => {
      console.log(event.name);
      relatedEvents.push({
        name: event.name,
        private_url: event.private_url,
        public_url: event.public_url,
      });
    });
    return relatedEvents;
  };

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
