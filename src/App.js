import React, {useState, useEffect} from "react";
import axios from 'axios';
import Nasa from './views/nasa_component.js'
import "./App.css";

// NASA API https://api.nasa.gov/planetary/apod?api_key=xRpeUnyvEDRmAApcSHEUfqjg6naHJUW8raV71s8D

function App() {

  const [nasaImg, setNasaImg] = useState({})

  useEffect(()=> {
    const nasaPhoto = axios.get('https://api.nasa.gov/planetary/apod?api_key=xRpeUnyvEDRmAApcSHEUfqjg6naHJUW8raV71s8D').then(res => {
    setNasaImg(res.data)
    }).catch(err => console.log(err))

  }, [])

  console.log(nasaImg)
  return (
    <div className="App">
      <Nasa />
    </div>
  );
}

export default App;
