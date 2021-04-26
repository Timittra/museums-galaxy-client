/* eslint-disable no-unused-vars */
import React from 'react';
import './Review.css';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        const reviewData = {
           userName:data.name,
           description:data.description
        };
        const url = `https://shrouded-stream-91770.herokuapp.com/review`;

        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(reviewData)
        })
        .then(res => console.log('server side response', res))
    };


    return (
       <div className="review-container">
            <div className='container give-review'>
            <h3 style={{ color: 'black' }}>Review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="Your Name" ref={register} />
                <br />
                <input name="description" defaultValue="Description" ref={register({ required: true })} />
                <br />
                {errors.description && <span>This field is required</span>}
                <br />
                <input style={{ border:'2px solid white' }} type="submit" />
            </form>
        </div>
       </div>
    );
};

export default Review;