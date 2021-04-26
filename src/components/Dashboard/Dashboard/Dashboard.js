import React from 'react';
import CalenderInfo from '../CalenderInfo/CalenderInfo';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: 'transparent',
    height:"100%"
}

//col-md-2 col-sm-6 col-12

const Dashboard = () => {
    return (
        <section>
        <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                <Sidebar></Sidebar>
                </div>
            <div className="col-md-8">
                <CalenderInfo></CalenderInfo>
            </div>
        </div>
    </section>
    );
};

export default Dashboard;