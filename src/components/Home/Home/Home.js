import React from 'react';
import Events from '../Events/Events';
import GalleryCollection from '../GalleryCollection/GalleryCollection';
import History from '../History/History';
import Location from '../Location/Location';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <History/>
            <GalleryCollection/>
            <Events/>
            <Testimonials/>
            <Location/>
        </div>
    );
};

export default Home;