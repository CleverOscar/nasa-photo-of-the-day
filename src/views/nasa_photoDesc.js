import React from 'react';

const NasaPhotoDescription = (props) => {

    return (
        <div> 
            <h3>Taken: {props.nasaImg.date}</h3>
            <p>{props.nasaImg.explanation}</p>
        </div>
    )
}

export default NasaPhotoDescription