import React from 'react';
import NasaPhoto from './nasa_photo.js';


const Nasa = (props) => {
    return(
        <div  > 
           Nasa Component
           <NasaPhoto  nasaImg={props.nasaImg} /> 
        </div>
    )

}

export default Nasa;