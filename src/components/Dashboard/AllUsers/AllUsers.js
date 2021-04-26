import React, { useEffect, useState } from 'react';
import OrderTable from '../OrderTable/OrderTable';
import Sidebar from '../Sidebar/Sidebar';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-stream-91770.herokuapp.com/allUser')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="container-fluid row" style={{position:'relative'}} >
            <Sidebar></Sidebar>
        <div className="col-md-10 col-lg-10 col-sm-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "transparent",paddingBottom:'100px' }}>
            <h5 className="text-brand">All Users</h5>
            <OrderTable users={users}></OrderTable>
        </div>
    </div>
    );
};

export default AllUsers;