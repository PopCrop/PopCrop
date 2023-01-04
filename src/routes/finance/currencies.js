import React from 'react';   
import Currencies from '../../components/currencies';
import { Link } from "react-router-dom";
import '../../App.css';
import homeicon from '../../images/homeicon.jpg';

export default function Cur() {
    /* A->HKD, A->CNY, A->USD, U->KRW, A->JPY, U->CNY, U->HKD, U->JPY, A->KRW*/ 
    const [AUDrate, setAUDrate] = React.useState([])
    const [USDrate, setUSDrate] = React.useState([])
    const [selectedX, setSelectedX] = React.useState(null)

    /*Fetch currency exchange rates*/
    React.useEffect(() => {
        const curoptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '98b65f47c9msh836a5875347da5fp1aa1f9jsnf9c5112ee393',
                'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
            }
        };

        const APIlinks = [
            'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=AUD&to=USD&amount=1',
            'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=AUD&to=CNY&amount=1',
            'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=AUD&to=HKD&amount=1',
            'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=AUD&to=JPY&amount=1',
            'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=AUD&to=KRW&amount=1',
            'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=USD&to=CNY&amount=1',
            'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=USD&to=HKD&amount=1',
            'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=USD&to=JPY&amount=1',
            'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=USD&to=KRW&amount=1',
        ]

        /* all info is fetched properly and set as newXrate properly. State Xrate won't work tho.*/
        const fetchcur = async (url) => {
            const data = await fetch(url, curoptions)
            const res = await data.json()
            const id = res.result.from + res.result.to
            const newXrate = {from: res.result.from, to: res.result.to, rate: res.result.convertedAmount.toFixed(4), id: id}
            
            if (newXrate.from === "AUD") {
                if (AUDrate === []) {
                    setAUDrate([newXrate])
                } else {
                    setAUDrate(prevAUDrate => [...prevAUDrate, newXrate])
                }
            } else if (newXrate.from === "USD") {
                if (USDrate === []) {
                    setUSDrate([newXrate])
                } else {
                    setUSDrate(prevUSDrate => [...prevUSDrate, newXrate])
                }
            }
        }

        for (let i = 0; i < APIlinks.length; i++) {
            fetchcur(APIlinks[i])
        }
        
        console.log(AUDrate);

    }, [])

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
            <div className='content'>
                <Currencies
                    AUDrate = {AUDrate}
                    USDrate = {USDrate}
                />
            </div>
        </div>
    )
}