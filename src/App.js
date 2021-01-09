import React, {useState, useEffect} from "react";
import axios from 'axios';
import Nasa from './views/nasa_component.js'
import styled from 'styled-components';
import "./App.css";

// NASA API https://api.nasa.gov/planetary/apod?api_key=xRpeUnyvEDRmAApcSHEUfqjg6naHJUW8raV71s8D

  const WrappedDiv = styled.div`
    width: 50%;
    heiht: 100%;
    padding: 0px 25px;
    margin: 0px auto;
    border: 4px solid black;  
  `

function App() {

  const [nasaImg, setNasaImg] = useState('')
  
  const fetchData = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=xRpeUnyvEDRmAApcSHEUfqjg6naHJUW8raV71s8D')
    .then(res => setNasaImg(res.data))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    fetchData();

  }, [])

  return (
    <div className="App">
      <WrappedDiv> 
        <Nasa nasaImg={nasaImg}/>  
      </WrappedDiv>
    </div>
  );

}

export default App;
