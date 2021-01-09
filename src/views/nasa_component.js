import React from 'react';
import NasaPhoto from './nasa_photo.js';
import { Card }from 'reactstrap';
const Nasa = (props) => {
    return(
        <Card> 
           <NasaPhoto  nasaImg={props.nasaImg} /> 
        </Card>
    )

}

export default Nasa;