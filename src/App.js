import React from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Hubster from "./components/Hubster"

class FrontEnd extends React.Component{
  getHubsters = async () => {
    const api_call = await fetch('http://santamonicahubsters.ddns.net:5000/api/husters'); 
  }
  render(){
    return(
      <div>Hello!
      <p>Hello!</p>
      <h1>YO!</h1>
        <Titles />
        <Form />
        <Hubster />
      </div>

    );
  }
}


export default FrontEnd;
