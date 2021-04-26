/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import List from '../List/List';
import './Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://shrouded-stream-91770.herokuapp.com/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        .then(res => res.json())
        .then(data =>{
            setOrders(data);
        })
    },[]);
  
    return (
        <section className='order-list'>
            <div className='row container'>
             {(orders.length)? orders.map(order => <List order={order}></List>) : <p style={{fontSize:'30px', fontWeight:'700'}}>You have not booked any event yet!</p>
             }
            </div>
        </section>
    );
};

export default Orders;