import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css';

const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() =>{
        fetch('https://shrouded-stream-91770.herokuapp.com/events')
        .then(res => res.json())
        .then(data => {
            setEvents(data);
        });

    }, []);

    return (
        <section id='event-section' className="pt_60 pb_40">
            <div className="container"> 
                <h2>Events</h2>
                <div className="row">
                    {
                        events.map(event => <Event event={event}></Event>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Events;