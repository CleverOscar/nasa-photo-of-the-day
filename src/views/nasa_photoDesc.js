import React from 'react';
import { CardText } from 'reactstrap';

const NasaPhotoDescription = (props) => {

    return (
        <div> 
            <h3>Taken: {props.nasaImg.date}</h3>
            <CardText>{props.nasaImg.explanation}</CardText>
        </div>
    )
}

export default NasaPhotoDescription