import React from 'react';
import NasaPhotoDescription from './nasa_photoDesc.js';
import { CardBody,  CardTitle } from 'reactstrap';
import './nasa_styles.css';

const NasaPhoto = (props) => {
    return(
        <CardBody> 
            <CardTitle>{props.nasaImg.title}</CardTitle>
            <img 
                width="100%"
                src={props.nasaImg.url} 
                alt={props.nasaImg.title} />
            <NasaPhotoDescription nasaImg={props.nasaImg}/>
        </CardBody>
    )
}

export default NasaPhoto