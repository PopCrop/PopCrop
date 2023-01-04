import React from 'react';   
import moment from 'moment'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { Link } from "react-router-dom";
import '../../App.css';
import './finance.css';
import homeicon from '../../images/homeicon.jpg';

export default function SPX() {
    const [configPrice, setconfigPrice] = React.useState("")

    const url = ['https://yh-finance.p.rapidapi.com/stock/v2/get-chart?interval=60m&symbol=GSPC&range=2y&region=US', 'GSPC']

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
            console.log(data)
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
                <h4>SPX Chart</h4>
                <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={configPrice} />
                </div>
                <div className='aboutstock'>
                <h4>About</h4>
                <p>The Standard and Poor's 500, or simply the S&P 500, is a stock market index tracking the stock performance of 500 large companies listed on stock exchanges in the United States. It is one of the most commonly followed equity indices.</p>
                <p><b>Market Cap:</b> US$35.1 trillion (as of August 31, 2022)</p>
                <p><b>Constituents:</b> 503</p>
                <p><b>Weighting method:</b> Free-float capitalization-weighted</p>
                <p><b>Exchanges:</b> NYSE; NASDAQ; Cboe BZX Exchange</p>
                <p><b>Foundation:</b> March 4, 1957</p>
                </div>
            </div>
        </div>
    );
}