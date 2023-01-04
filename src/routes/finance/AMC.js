import React from 'react';   
import moment from 'moment'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { Link } from "react-router-dom";
import '../../App.css';
import './finance.css';
import homeicon from '../../images/homeicon.jpg';
import AMClogo from '../../images/AMC.png';

export default function AMC() {
    const [configPrice, setconfigPrice] = React.useState("")

    const url = ['https://yh-finance.p.rapidapi.com/stock/v2/get-chart?interval=60m&symbol=AMC&range=2y&region=US', 'AMC']

    const opts = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '98b65f47c9msh836a5875347da5fp1aa1f9jsnf9c5112ee393',
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
        }
    };

    async function getStonks(url, options) {
        const response = await fetch(url, options)
        return response.json()
    }

    const round = (number) => {
        return number ? + (number.toFixed(2)) : null
    }

    React.useEffect(() => {
        const fetchgraph = async function (url, ticker, options) {
            const data = await getStonks(url, options);
            const stock = data.chart.result[0]
            const quote = stock.indicators.quote[0]
            var prices = stock.timestamp.map((timestamp, i) => ([
                timestamp*1000, round(quote.close[i])
            ]))
            prices = {
                yAxis: [{
                offset: 20,
        
                labels: {
                    formatter: function () {
                    return numberFormat.format(this.value) 
                    }
                    ,
                    x: -15,
                    style: {
                    "color": "#000", "position": "absolute"
        
                    },
                    align: 'left'
                },
                },
                
                ],
                tooltip: {
                shared: true,
                formatter: function () {
                    return numberFormat.format(this.y, 0) +  '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
                }
                },
                plotOptions: {
                series: {
                    showInNavigator: true,
                    gapSize: 6,
                    connectNulls: true,    
                }
                },
                rangeSelector: {
                selected: 1
                },
                chart: {
                height: 450,
                width: 750,
                },
            
                credits: {
                enabled: false
                },
            
                legend: {
                enabled: true
                },
                xAxis: {
                type: 'datetime',
                minRange: 1,
                },
                navigator: {
                enabled: true
                },
                rangeSelector: {
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: '1d',
                }, {
                    type: 'day',
                    count: 7,
                    text: '7d'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'month',
                    count: 3,
                    text: '3m'
                },
                    {
                    type: 'all',
                    text: 'All'
                }],
                selected: 4,
                inputEnabled: false,
                enabled: true
                },
                series: [{
                name: 'Price',
                type: 'spline',
            
                data: prices,
                tooltip: {
                    valueDecimals: 2
                },
            
                }]
            }

            setconfigPrice(prices)
        }
        fetchgraph(url[0], url[1], opts)

        return (null)

    }, [])
    
    const options = {style: 'currency', currency: 'USD'};
    const numberFormat = new Intl.NumberFormat('en-US', options);


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
            <div className='stockcontent'>
                <div className='charts'>
                <h4>AMC Chart</h4>
                <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={configPrice} />
                </div>
                <div className='aboutstock'>
                <img src={AMClogo}/>
                <h4>About</h4>
                <p>AMC Entertainment Holdings, Inc. engages in the theatrical exhibition business through its subsidiaries. It operates through the U.S. Markets and International Markets segments. The U.S. Markets segment is involved in owning, leasing, or operating theaters and screens in the U.S. The International Markets segment focuses on owning, leasing, or operating theaters and screens in the United Kingdom, Germany, Spain, Italy, Ireland, Portugal, Sweden, Finland, Norway, Denmark, and Saudi Arabia.</p>
                <p><b>CEO:</b> Adam Aron (Jan 2016-)</p>
                <p><b>Founded:</b> 1920</p>
                <p><b>Headquarters:</b>Leawood, Kansas, United States</p>
                <p><b>Number of employees:</b> 17,122 (2021)</p>
                <p><b>Founders:</b>Barney Dubinsky, Maurice Durwood, Edward Durwood</p>
                <p><b>Subsidiaries:</b> AMC Theatres, Odeon Cinemas</p>
                </div>
            </div>
        </div>
    );
}