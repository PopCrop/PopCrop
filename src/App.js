import React from 'react';   
import { Link } from "react-router-dom";
import './App.css';
import homeicon from './images/homeicon.jpg';
import sportsbackground from './images/sportsbackground.jpg';

/* CORS https://cors-anywhere.herokuapp.com/*/
export default function App() {



  return (
    <div className="App">
      <div className='header'>
        <ul>
            <Link to="/badminton">Badminton</Link>
            <Link to="/finance">Finance</Link>
            <Link to="/volleyball">Volleyball</Link>
            <Link to="/dumcks/dumcks">Dumcks</Link>
        </ul>
      </div>
      <div className='menu'>
        <ul>
          <li><a href="http://localhost:3000/"><img src={homeicon} alt="Home Icon"/></a></li>
        </ul>
      </div>
      <div className='homepage'>
        <img src={sportsbackground} alt="Sports Background"/>
        <div className='imgtext'>
          <h1>JONATHAN WOO</h1>
        </div>
        <div className='imgtext2'>
          <h2>Always the Biggest Memes Around</h2>
        </div>
        <div className='imgtext3'>
          <h3>Badminton, Volleyball, Finance, Ducks & Programming</h3>
        </div>
      </div>
    </div>
  );
}





