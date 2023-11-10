import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Images from '../ImageData.js';

import '../Styles/Imageviewer.css';

function ImageViewer() {
    const { index } = useParams();
    const img = Images[index];
    const nav = useNavigate();

    return (
        <div className='imageViewer' id='img'>
            <button className='btn' onClick={() => nav(-1)}>X</button>
            <div id='image-container'>
                <img src={img.art} alt={img.title} />
            </div>
        </div>
    )
}

export default ImageViewer;