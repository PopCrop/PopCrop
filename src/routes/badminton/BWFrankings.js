import React from 'react';   
import * as cheerio from 'cheerio';
import { Link } from "react-router-dom";
import BWFRankings from '../../components/bwfrankinginfo';
import '../../App.css';
import './BWFrankings.css';
import homeicon from '../../images/homeicon.jpg';

export default function BWFrankings(){
  const [MSranks, setMSranks] = React.useState([])
  const [WSranks, setWSranks] = React.useState([])
  const [MDranks, setMDranks] = React.useState([])
  const [WDranks, setWDranks] = React.useState([])
  const [XDranks, setXDranks] = React.useState([]);


  function deleteData(array, removeEven) {
    return array.filter((v, i) => removeEven ? (i % 2 !== 0) : (i % 2 === 0));
  };

  /* Fetch BWF World Rankings */
  React.useEffect(() => { 
    const URLs = [['https://en.badminton-navi.net/player/ranking_detail/world/men/single', 'MS'], ['https://en.badminton-navi.net/player/ranking_detail/world/women/single', 'WS'], ['https://en.badminton-navi.net/player/ranking_detail/world/men/double', 'MD'],
    ['https://en.badminton-navi.net/player/ranking_detail/world/women/double', 'WD'], ['https://en.badminton-navi.net/player/ranking_detail/world/mixed/double', 'XD']]
    
    /*const URLs = [['https://en.badminton-navi.net/player/ranking_detail/world/mixed/double', 'MS']]*/
    const fetchranks = async (url) => {
      const response = await fetch(url[0])
      const body = await response.text()
      const $ = cheerio.load(body)

      const miscn = ["LOH Kean Yew", "ZHAO Jun Peng", "SHI Yu Qi", "LU Guang Zu", "LIEW Daren", "LI Shi Feng", "NG Tze Yong", "WENG Hong Yang",
      "CHEN Yu Fei", "AN Se Young", "HE Bing Jiao", "WANG Zhi Yi", "LALINRAT CHAIWAN", "KIM Gaeun", "ZHANG Yi Man", "SUNG Jihyun", "SIM Yu Jin", "KISONA Selvaduray",
      "ZHENG Si Wei", "WANG Yi Lyu", "HOO Pang Ron", "GUO Xin Wa", "LIU Yuchen", "CHOI SolGyu", "Wei Chong MAN", "HE Jiting", "Xiangyu REN", "Weikeng LIANG",
      "Pramudya Kusumawardana RIYANTO", "Sze Fei GOH", "Arjun M.R.", "Min Hyuk KANG", "Wan Muhammad Arif Shaharuddin WAN MOHD JUNAIDI", "CHEN Qingchen", "JEONG Na Eun", 
      "Pearly Koong Le TAN", "ZHANG Shu Xian", "LIU Xuanxuan", "Anastasia CHERVYAKOVA", "Joo Ven SOONG"];
      const name = []
      const doubname = []
      const point = []
      const country = []

      $('.col-md-8 > .rankingTable').map((i, el) => {
        var names = $(el).find('.nameCell a').text();
        names = names.split('\n')
        var pair = []

        for (let i = 0; i < names.length; i++) {
          var n = names[i].replace(/\t/g, "")
          if (n === "" || miscn.includes(n)) {
          } else {
            name.push(n)
          }
        }
        
        if (url[1] === 'MD' || url[1] === 'WD' || url[1] === 'XD') {
          for (let i = 0; i < name.length; i++) {
            if (pair.length < 2) {
              var namee = name[i] + ' '
              pair.push(namee)
              if(pair.length === 2) {
                doubname.push(pair)
                pair = []
              }
            } 
          }
        }
        
        if (url[1] === 'MD' || url[1] === 'WD' || url[1] === 'XD') {
          var points = $(el).find('.text-center span').text()
          point.push(points.split('pt'));
        } else {
          points = $(el).find('.pointCell span').text();
          point.push(points.split('pt'));
        }
        
        if (url[1] === 'MD' || url[1] === 'WD' || url[1] === 'XD') {
          var c = []
          var countries = $(el).find('.contryCell').text()
          c.push(countries.match(/.{1,3}/g))
          c = deleteData(c[0], true)
          country.push(c)
        } else {
          countries = $(el).find('.contryCell').text();
          country.push(countries.match(/.{1,3}/g));
        }

        return null
      })

      var points = point[0]
      var countries = country[0]
      var players = []
      
      if (url[1] === 'MD' || url[1] === 'WD' || url[1] === 'XD') {
        for (let i = 1; i <= doubname.length; i++) {
          var player = {name: doubname[i], points: points[i], country: countries[i], rank: i}
          players.push(player)
        }
      } else {
        for (let i = 1; i <= name.length; i++) {
          player = {name: name[i], points: points[i], country: countries[i], rank: i}
          players.push(player)
        }
      }

      if (url[1] === 'MS') {
        setMSranks(players)
      } else if (url[1] === 'WS') {
        setWSranks(players)
      } else if (url[1] === 'MD') {
        setMDranks(players)
      } else if (url[1] === 'WD') {
        setWDranks(players)
      } else if (url[1] === 'XD') {
        setXDranks(players)
      }
    }
    
    for (let i = 0; i < URLs.length; i++) {
      fetchranks(URLs[i])
    }  
    console.log(MSranks, WSranks, MDranks, WDranks, XDranks)

    
  }, []);

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
      <BWFRankings 
        MSranks = {MSranks}
        WSranks = {WSranks}
        MDranks = {MDranks}
        WDranks = {WDranks}
        XDranks = {XDranks}
      />
    </div>
  );
}

