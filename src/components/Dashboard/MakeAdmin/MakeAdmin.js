/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MakeAdmin = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        let passNumber =  Math.random()*1000;
        const adminData = {
            email: data.email,
            name: data.name,
            password:passNumber
        };
        const url = `https://shrouded-stream-91770.herokuapp.com/addAdmin`;

        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(adminData)
        })
        .then(res => console.log('server side response', res))
    };

    return (
        <div className='admin'>


            <div className='container add-events'>
                <h3 style={{ color: 'black' }}><FontAwesomeIcon icon={faPlus} />Add Admin</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue="Name" ref={register} />
                    <br />
                    <input name="email" defaultValue="Email" ref={register} />
                    <br />
                    <input style={{ border: '2px solid white' }} type="submit" value="Save" />
                </form>
            </div>


    </div>
    );
};

export default MakeAdmin;