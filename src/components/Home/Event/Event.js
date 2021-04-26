import React from 'react';
import { useHistory } from 'react-router';
import './Event.css';

const Event = ({event}) => {

    const history = useHistory();

    const handleClick = (id) =>{
        const url = `/booking/${id}`;
        history.push(url);
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="event_img mb_20">
                            <img src={event.imageURL} alt="" />
                            <div className="event_overlay">
                                <h5>{event.title}</h5>
                                <h6>Purchase: ${event.price}</h6>
                                <div className='btn-main'>
                                <button onClick={()=>handleClick(event._id)} className='btn-book booking'>Book Now</button>
                                </div>
                            </div>
             </div>  
        </div>
    );
};

export default Event;