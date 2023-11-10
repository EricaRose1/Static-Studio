import React from 'react';

import { Link } from 'react-router-dom';
import '../Styles/PhotoGallery.css'



const ArtGallery = ({Images}) => {

    return (
        <div className='photoGallery'>
           {Images.map((img, index) => (
            <div className='gallery-item' key={index}>
                <Link to={`/ImageViewer/${index}`}>
                    <img src={img.art} alt={img.title} />
                </Link>
            </div>
           ))}
        </div>
    );
};

export default ArtGallery;
