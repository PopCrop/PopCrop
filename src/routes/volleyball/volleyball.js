import React from 'react';   
import { Link } from "react-router-dom";
import '../../App.css';
import homeicon from '../../images/homeicon.jpg';
import vball from '../../images/vball.jpg';

export default function Volleyball() {

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
            <li><a href="http://localhost:3000/"><img src={homeicon}/></a></li>
          </ul>
        </div>
        <div className='baddyHP'>
          <img src={vball}/>
          <div className="baddytxt">
            <h1>Instant updates on recent matches and </h1>
            <h1>FIVB world rankings.</h1>
          </div>
          <div className="baddytxt2">
            Instant access to information on recent matches and details of current FIVB world rankings on one convenient website.
          </div>
          <div className="baddyHPbut">
            <Link to="/volleyball">Coming Soon →</Link>         
          </div>
          <div className="baddyHPbut2">
            <Link to="/volleyball">Coming Soon →</Link>         
          </div>
        </div>
      </div>
    );
  }
