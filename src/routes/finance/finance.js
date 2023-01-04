import React from 'react';   
import { Link } from "react-router-dom";
import '../../App.css';
import './finance.css';
import homeicon from '../../images/homeicon.jpg';
import stonks from '../../images/Stonks.jpg';


export default function Finance() {

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
                    <li className = 'dropdown'>
                      <Link>Stonks</Link>
                      <div className='dropdown-content'>
                          <Link to="/finance/stonk/GME">GME</Link>
                          <Link to="/finance/stonk/AMC">AMC</Link>
                          <Link to="/finance/stonk/BBBY">BBBY</Link>
                          <Link to="/finance/stonk/SPX">SPX</Link>
                          <Link to="/finance/stonk/FVX">FVX</Link>
                          <Link to="/finance/stonk/TNX">TNX</Link>
                      </div>
                    </li>
                    <li><Link to="/finance/cur">Currency Rates</Link></li>
                </ul>
            </div>
      <div className='finHP'>
        <img src={stonks}/>
        <div className="fintxt">
          <h1>Prompt, real-time summaries of meme </h1>
          <h1>stonks and FX markets.</h1>
        </div>
        <div className="fintxt2">
          Quick and easy source of graphed stonk/S&P500 prices, treasury bond prices and current currency exchange rates.
        </div>
        <div className="finHPbut">
          <Link to="/finance/stonk/GME">GME →</Link>        
        </div>
        <br></br>
        <div className="finHPbut2">
          <Link to="/finance/cur">Currency Rates &nbsp;→</Link>          
        </div>
      </div>
    </div>
  );
}