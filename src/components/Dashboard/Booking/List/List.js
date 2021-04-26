import React from 'react';

const List = ({order}) => {
    return (
        <div className="col-md-4 col-lg-4 col-sm-12 offset-md-1 m-3 card">
            <div className="card-body list">
                <h5 className="card-title text-danger">Status: {order.status}</h5>
                <h3 className="card-title">{order.shipment.title}</h3>
                <p className="card-text"><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, molestiae?</small></p>
            </div>
        </div>
    );
};

export default List;