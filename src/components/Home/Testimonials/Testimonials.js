import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() =>{
        fetch('https://shrouded-stream-91770.herokuapp.com/testimonials')
        .then(res => res.json())
        .then(data => {
            setTestimonials(data);
        });

    }, []);

    console.log(testimonials);

    return (
        <section className='testimonial-container'>
            <h2  style={{color:'#F19101', fontWeight:'700'}}>Testimonial</h2>
            <div className="row">
    
                {
                    testimonials.map(testimonial => <Testimonial testimonial={testimonial} ></Testimonial>)
                }
                </div>
        </section>
    );
};

export default Testimonials;