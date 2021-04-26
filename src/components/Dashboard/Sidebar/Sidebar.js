/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faUserPlus,faThLarge, faShoppingCart,faCommentAlt,faListAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const adminInfo = {
            email: loggedInUser.email
        };

        fetch('https://shrouded-stream-91770.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(adminInfo)
        })
        .then(res => res.json())
        .then(data =>{
            setIsAdmin(data);
            console.log(data);
        }) 
    }, []);

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "110vh", width: '100%' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className='sidebar-item'>
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/order" className='sidebar-item'>
                        <FontAwesomeIcon icon={faListAlt} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className='sidebar-item'>
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>
                {
                   (isAdmin) && <div>
                        <li>
                            <Link to="/allUser" className='sidebar-item'>
                                <FontAwesomeIcon icon={faListAlt} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" className='sidebar-item'>
                                <FontAwesomeIcon icon={faPlus} /> <span>Add service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className='sidebar-item'>
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/deleteEvent" className='sidebar-item'>
                                <FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;