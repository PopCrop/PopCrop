import React from 'react';   
import moment from 'moment'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { Link } from "react-router-dom";
import '../../App.css';
import './finance.css';
import homeicon from '../../images/homeicon.jpg';

export default function FVX() {
    const [configPrice, setconfigPrice] = React.useState("")

    const url = ['https://yh-finance.p.rapidapi.com/stock/v2/get-chart?interval=60m&symbol=FVX&range=2y&region=US', 'FVX']

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
                <h4>FVX Chart</h4>
                <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={configPrice} />
                </div>
                <div className='aboutstock'>
                <h4>About</h4>
                <p>United States Treasury securities, also called Treasuries or Treasurys, are government debt instruments issued by the United States Department of the Treasury to finance government spending as an alternative to taxation.</p>
                <p>Treasury securities are backed by the full faith and credit of the United States, meaning that the government promises to raise money by any legally available means to repay them. Although the United States is a sovereign power and may default without recourse, its strong record of repayment has given Treasury securities a reputation as one of the world's lowest-risk investments. This low risk gives Treasuries a unique place in the financial system, where they are used as cash equivalents by institutions, corporations, and wealthy investors.</p>
                </div>
            </div>
        </div>
    );
}