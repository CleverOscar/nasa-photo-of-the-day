import React from 'react';
import NasaPhotoDescription from './nasa_photoDesc.js';
import './nasa_styles.css';

const NasaPhoto = (props) => {
    return(
        <div className="nasaComponent"> 
            <h1>{props.nasaImg.title}</h1>
            <img 
                className='nasaImage'
                src={props.nasaImg.url} 
                alt={props.nasaImg.title} />
            
            <NasaPhotoDescription nasaImg={props.nasaImg} />
        </div>
    )
}

export default NasaPhoto