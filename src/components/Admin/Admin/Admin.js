/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const EventData = {
            title: data.title,
            price: parseInt(data.price),
            imageURL: imageURL
        };
        const url = `https://shrouded-stream-91770.herokuapp.com/addEvent`;

        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(EventData)
        })
        .then(res => console.log('server side response', res))
    };


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'eb58eae113e783bf62edcf09d448f50a');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return (
        <div className='admin'>


            <div className='container add-events'>
                <h3 style={{ color: 'black' }}><FontAwesomeIcon icon={faPlus} />Add Event</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="title" defaultValue="Event Title" ref={register} />
                    <br />
                    <input name="price" defaultValue="Price" ref={register} />
                    <br />
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br />
                    <input style={{ border:'2px solid white' }} type="submit" value="Save" />
                </form>
            </div>


        </div>
    );
};

export default Admin;