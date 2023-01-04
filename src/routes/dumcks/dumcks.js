import React from 'react';   
import { Link } from "react-router-dom";
import duck from '../../images/Ducks/duck.jpg';
import duck2 from '../../images/Ducks/duck2.jpg';
import duck3 from '../../images/Ducks/duck3.jpg';
import duck4 from '../../images/Ducks/duck4.jpg';
import duck5 from '../../images/Ducks/duck5.jpg';
import duck6 from '../../images/Ducks/duck6.jpg';
import duck7 from '../../images/Ducks/duck7.jpg';
import duck8 from '../../images/Ducks/duck8.jpg';
import duck9 from '../../images/Ducks/duck9.jpg';
import duck10 from '../../images/Ducks/duck10.jpg';
import duck11 from '../../images/Ducks/duck11.jpg';
import duck12 from '../../images/Ducks/duck12.jpg';
import duck13 from '../../images/Ducks/duck13.jpg';
import duck14 from '../../images/Ducks/duck14.jpg';
import gif from '../../images/Ducks/duck.gif';
import '../../App.css';
import './dumcks.css';
import homeicon from '../../images/homeicon2.JPG';

/*<div>Add img tags for normal img</div>
<div className="vertical">Add img tags w/ img 1x2</div>
<div className="horizontal">Add 2x1</div>
<div className="big">Add 2x2</div>*/

export default function Dumcks() {
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
            <div className='content'>
                <div className="container">
                    <div className="horizontal"><img src={duck}/></div>
                    <div className="vertical"><img src={duck2}/></div>    
                    <div className="big"><img src={duck3}/></div>
                    <div className="big"><img src={duck4}/></div>
                    <div className="big"><img src={duck5}/></div>
                    <div className="big"><img src={duck6}/></div>
                    <div className="big"><img src={duck7}/></div>
                    <div className="big"><img src={duck8}/></div>
                    <div className="horizontal"><img src={duck9}/></div>
                    <div className="horizontal"><img src={duck10}/></div>
                    <div className="big"><img src={duck11}/></div>
                    <div className="big"><img src={duck12}/></div>
                    <div className="big"><img src={duck13}/></div>
                    <div className="vertical"><img src={duck14}/></div>
                    <div className="vertical"><img src={gif}/></div>
                </div>
            </div>
        </div>
    )
  }