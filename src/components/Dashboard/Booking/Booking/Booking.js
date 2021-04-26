/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../../App';
import CalenderInfo from '../../CalenderInfo/CalenderInfo';
import './Booking.css';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [event, setEvent] = useState([]);
    const [shippingData, setShippingData] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const history = useHistory();
    let {id} = useParams();
    
    const handleDateChange = calenderDate => {
        setSelectedDate(calenderDate);
    }

    useEffect(()=>{
        fetch(`https://shrouded-stream-91770.herokuapp.com/event/${id}`)
        .then(res => res.json())
        .then(result => setEvent(result));
       
    },[id]);


    const onSubmit = formData =>{ 
        setShippingData(formData);
    }


    const handlePaymentSuccess = (paymentId) => {

        const orderDetails = {
            ...loggedInUser,
          eventDetail:event,
          shipment: shippingData,
          status:'Pending',
          paymentId,
          created:selectedDate,
          orderTime: new Date()
        };
        
        fetch('https://shrouded-stream-91770.herokuapp.com/addOrder', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            history.push('/order')
          }
        })
      }

    return (
        <div>
            <CalenderInfo handleDateChange={handleDateChange}></CalenderInfo>

            <div className='shipment-form'>
                <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-12">
                    <p className="text-white text-center">ON {selectedDate.toDateString()}</p>
                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group text-white">
                            <input type="text" name="name"  defaultValue="Your Name" ref={register({ required: true })} className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="form-group text-white">
                            <input type="text" name="email" defaultValue="Email" ref={register({ required: true })} className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" name="title" defaultValue={event.title} ref={register} style={{ backgroundColor: '#F19100', color: 'white' }} className="form-control"/>
                        </div>

                        <div className="form-group btn-main" style={{ color: 'white' }}>
                            <button type="submit" className='btn-book booking'>Submit Detail</button>
                        </div>
                    </form>
                </div>

                <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-12 btn-main">
                    <p style={{ color: 'white' }}>Your service charge will be ${event.price}</p>
                    <ProcessPayment handlePayment={handlePaymentSuccess} />
                </div>

            </div>
        </div>
    );
};

export default Booking;