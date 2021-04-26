import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faThLarge } from '@fortawesome/free-solid-svg-icons'
import './ManageServices.css';

const ManageServices = () => {
    const [events, setEvents] = useState([]);
    const history = useHistory();

    function refreshPage() {
        window.location.reload(false);
      }

    useEffect(() =>{

        fetch('https://shrouded-stream-91770.herokuapp.com/events')
        .then(res => res.json())
        .then(data =>setEvents(data))
    }, []);

    const deleteProduct =(id) => {
        
        fetch(`https://shrouded-stream-91770.herokuapp.com/deleteEvent/${id}`,{
              method:'DELETE'
          })
          .then(res => res.json())
          .then(result => {
              refreshPage(history.push('/'));
              console.log(result);
          });
      };

    return (
        <div id='delete-event'>
            <div className='manage-events' id='dlt-products'>
                <h3><FontAwesomeIcon style={{ padding: '3px' }} icon={faThLarge} />Manage Services</h3>
                {events.map((event) => (
                    <div className='container list'>

                        <Grid xs={12} sm={12} md={12} lg={12} key={event._id} item>
                           <h5>{event.title}, Price: {event.price}
                                <Button onClick={() => deleteProduct(event._id)}>
                                    <FontAwesomeIcon style={{ color: 'red' }} icon={faTrashAlt} />
                                </Button>
                              </h5>
                        </Grid>

                    </div>

                ))}
            </div>
        </div>
    );
};

export default ManageServices;