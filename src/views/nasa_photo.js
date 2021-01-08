import React from 'react';
import './nasa_styles.css';

const NasaPhoto = (props) => {
    return(
        <div className="nasaComponent"> 
            <h1>{props.nasaImg.title}</h1>
            <img 
                src={props.nasaImg.url} 
                alt={props.nasaImg.title} />
        </div>
    )
}

export default NasaPhoto