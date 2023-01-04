import React from 'react';   
import { Link } from "react-router-dom";
import '../../App.css';
import './dumcks.css';
import homeicon from '../../images/homeicon2.JPG';
import callduck from '../../images/Ducks/callduck.jpg'

export default function Callduck() {

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
                    <li><Link to="/dumcks/callduck">Call Ducks</Link></li>
                </ul>
            </div>
            <div className='duckcontent'>
                <div className='aboutduck'>
                    <br></br>
                    <iframe width="750" height="450" src="https://www.youtube.com/embed/0Da8ZhKcNKQ" title="RyuzoArts Call Duck Vid" allowFullScreen></iframe>
                </div>
                <div className='ducksum'>
                    <h4>About</h4>
                    <p>Call ducks are are lively and talkative with clean-tidy behaviours. When provided with clean food and water, they are able to maintain themselves in good condition.</p>
                    <p>Generally, they have short pale orange legs, a plump, oval bowl-shaped body with short necks and small heads. Their beaks are orange with scattered black spots. Their eyes are large and blue.</p>
                    <p><b>Origin:</b> Netherlands</p>
                    <p><b>Scientific Name:</b> Anas platyrhynchos domesticus</p>
                    <p><b>Colours:</b> 20+ recognised colours (incl. white, <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;apricot, mallard)</p>
                    <p><b>Distribution:</b> United Kingdom, Ireland,<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Netherlands</p>
                    <p><b>Top Call Duck Youtuber:</b> RyuzoArts</p>
                </div>
            </div>
        </div>
    );
}