import React from 'react';


const Testimonial = ({testimonial}) => {

    return (
                <div class="col-sm-12 col-md-6">
                    <div class="card m-3 text-center" style={{backgroundColor: '#F19101', color:'white', fontWeight:'500'}}>
                        <div class="card-body">
                            <h3 class="card-title">{testimonial.userName}</h3>
                            <p class="card-text">{testimonial.description}</p>
                        </div>
                    </div>
                </div>
    );
};

export default Testimonial;