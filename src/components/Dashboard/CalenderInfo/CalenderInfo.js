import React from 'react';
import './CalenderInfo.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import eventImage from '../../../images/g13.jpg';

const CalenderInfo = ({handleDateChange}) => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 col-lg-4 offset-md-1 offset-lg-1">
                <h1 style={{ color: 'darkgoldenrod' }}>Have a look</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
        <div className="col-md-6 col-lg-6">
            <img src={eventImage} alt="" className="img-fluid booking-img"/>
        </div>
    </main>
    );
};

export default CalenderInfo;