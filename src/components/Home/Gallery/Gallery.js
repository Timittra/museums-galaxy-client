/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Gallery = ({galleryImage}) => {
    return (
           
                <div className="col-md-3 col-sm-12 col-lg-3 m-0 p-0 text-center">
                   <div className='gallery-content' style={{marginRight:'50px'}}> 
                   <img className="text-center" src={require(`../../../images/${galleryImage.pic}`).default} alt=""/>
                    <div className="overlay">
                      <FontAwesomeIcon className='icon-container' icon={faEye} />
                    </div>
                   </div>
                </div>
    );
};

export default Gallery;