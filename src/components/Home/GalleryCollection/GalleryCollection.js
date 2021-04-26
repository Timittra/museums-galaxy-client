import React from 'react';
import Gallery from '../Gallery/Gallery';
import './GalleryCollection.css';

const galleryImages = [
    {
        id:1,
        pic:'g1.jpg'
    },
    {
        id:2,
        pic:'g2.jpg'
    },
    {
        id:3,
        pic:'g3.jpg'
    },
    {
        id:4,
        pic:'g4.jpg'
    },
    {
        id:5,
        pic:'g5.jpg'
    },
    {
        id:6,
        pic:'g6.jpg'
    },
    {
        id:7,
        pic:'g7.jpg'
    },
    {
        id:8,
        pic:'g8.jpg'
    },
    {
        id:9,
        pic:'g9.jpg'
    },
    {
        id:10,
        pic:'g10.jpg'
    },
    {
        id:11,
        pic:'g11.jpg'
    },
    {
        id:12,
        pic:'g12.jpg'
    }
]

const GalleryCollection = () => {


    return (
        <section>
            <div className="gallery text-center gx-0">
                <h2>Gallery</h2>
                <div className="row m-4">
                    {
                        galleryImages.map(galleryImage => <Gallery key={galleryImage.id} galleryImage={galleryImage}></Gallery>)
                    }
                </div>

            </div>
        </section>
    );
};

export default GalleryCollection;