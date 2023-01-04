import React from 'react';   
import { Link } from "react-router-dom";
import '../../App.css';
import './badminton.css';
import homeicon from '../../images/homeicon.jpg';
import baddy from '../../images/Baddy.jpg';

export default function Badminton() {

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
            <Link to="/badminton/BWFplayers">BWF Players</Link>
            <Link to="/badminton/BWFcalendar">BWF Calendar</Link>
            <Link to="/badminton/BWFrankings">BWF Rankings</Link>
        </ul>
      </div>
      <div className='baddyHP'>
        <img src={baddy}/>
        <div className="baddytxt">
          <h1>Instant updates on player results, the </h1>
          <h1>BWF calendar and world rankings.</h1>
        </div>
        <div className="baddytxt2">
          Instant access to information on recent player results, details of upcoming tournaments and current BWF world rankings on one convenient website.
        </div>
        <div className="baddyHPbut">
          <Link to="/badminton/BWFplayers">Player Results →</Link>        
        </div>
        <div className="baddyHPbut2">
          <Link to="/badminton/BWFcalendar">BWF Calendar →</Link>          
        </div>
        <div className="baddyHPbut3">
          <Link to="/badminton/BWFrankings">BWF Rankings →</Link>          
        </div>
      </div>
    </div>
  );
}

