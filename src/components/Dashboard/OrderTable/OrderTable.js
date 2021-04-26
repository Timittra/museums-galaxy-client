import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const OrderTable = ({users}) => {
    const { register, handleSubmit } = useForm();
    let [newStatus, setNewStatus] = useState(null);
    const history = useHistory();

    function refreshPage() {
        window.location.reload(false);
      }

    const onSubmit = data =>{
        newStatus = {
            status: data.status
        }

        fetch(`https://shrouded-stream-91770.herokuapp.com/update/${data.id}`, {
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newStatus)
          })
          .then(res => res.json())
          .then(result => {
            setNewStatus(newStatus);
            refreshPage(history.push('/'));
            console.log(result);
          })
    }

    return (
            <table style={{zIndex:'-1'}} className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Event</th>
                <th className="text-secondary" scope="col">Pay With</th>
                <th className="text-secondary" scope="col">Update Current Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  users.map((user, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{user.shipment.name}</td>
                        <td>{user.shipment.email}</td>
                        <td>{user.eventDetail.title}</td>
                        <td>Credit Card</td>
                        <td>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                  <input name="status" defaultValue={user.status} ref={register} />
                                  <input name="id" className='text-white' defaultValue={user._id} ref={register} />
                                  <input style={{padding:'3px', backgroundColor:'transparent', borderRadius:'5px', border:'1px solid #f19100'}} type="submit" />
                              </form>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderTable;