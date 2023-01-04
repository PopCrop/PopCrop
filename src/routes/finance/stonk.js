import React from 'react';   
import { nanoid } from 'nanoid';
import Currencies from '../../components/currencies';
import Stonks from '../../components/stonks';
import { Link } from "react-router-dom";
import '../../App.css';
import './finance.css';
import homeicon from '../../images/homeicon.jpg';

export default function Stonk() {
    /*GME, AMC, BBBY, SPX, 10yr, 5yr*/
    const [stonks, setStonks] = React.useState([])
    const [selectedStonk, setSelectedStonk] = React.useState(null)
    
    /* Fetch stonk summaries*/
    React.useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '98b65f47c9msh836a5875347da5fp1aa1f9jsnf9c5112ee393',
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
        }
      };

        const urls = [['https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=BBBY&region=US', "BBBY"], ['https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=AMC&region=US', "AMC"], ['https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=GME&region=US', "GME"]]
        const urls2 = [['https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=^TNX&region=US', "TNX (10yr)"], ['https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=^FVX&region=US', "FVX (5yr)"], ['https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=^GSPC&region=US', "GSPC (SPX)"]]
        
        const fetchstock = async (url) => {
        const data = await fetch(url, options)
        const res = await data.json()
        
        const summary = {id: nanoid(), ticker: url[1], price: res.price.regularMarketPrice.fmt, prevClose: res.summaryDetail.previousClose.fmt,
        open: res.summaryDetail.regularMarketOpen.fmt, volume: res.summaryDetail.volume.fmt, low: res.summaryDetail.dayLow.fmt,
        high: res.summaryDetail.dayHigh.fmt}

        if (stonks === []) {
            setStonks([summary])
        } else {
            setStonks(prevStonks => [...prevStonks, summary])
        }
        }
        
        for (let i = 0; i < urls.length; i++) {
        fetchstock(urls[i])
        }

        const f = setTimeout(() => {
        for (let i = 0; i < urls2.length; i++) {
            fetchstock(urls2[i])
        }
        }, 5000)
        console.log(stonks)

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
            <Stonks
                stonks = {stonks}
                selectedStonk = {selectedStonk}
                setSelectedStonk = {setSelectedStonk}
            />
          </div>
        </div>
      );
}