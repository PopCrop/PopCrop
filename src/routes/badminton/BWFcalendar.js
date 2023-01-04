import React from 'react';   
import * as cheerio from 'cheerio';
import { Link } from "react-router-dom";
import BWFCalendar from '../../components/bwfcalendar';
import '../../App.css';
import './BWFcalendar.css';
import homeicon from '../../images/homeicon.jpg';


export default function BWFcalendar(){
  const [calendar, setCalendar] = React.useState([]);

  React.useEffect(() => {
    const getCalendar = async () => {
      const response = await fetch('https://bwfworldtour.bwfbadminton.com/calendar/?cyear=2022&rstate=all');
          const body = await response.text();
          const $ = cheerio.load(body);  
          
          const tourneys = $('.inner-tournament-detail') 
          .map((_, tourney) => {
            const $tourney = $(tourney)
            const name = $tourney.find('.info > h2').text()
            const date = $tourney.find('.info > h3').text();
            
            var month
            if (date.includes("JANUARY")) {
              month = "January"
            } else if (date.includes("FEBRUARY")) {
              month = "February"
            } else if (date.includes("MARCH")) {
              month = "March"
            } else if (date.includes("APRIL")) {
              month = "April"
            } else if (date.includes("MAY")) {
              month = "May"
            } else if (date.includes("JUNE")) {
              month = "June"
            } else if (date.includes("JULY")) {
              month = "July"
            } else if (date.includes("AUGUST")) {
              month = "August"
            } else if (date.includes("SEPTEMBER")) {
              month = "September"
            } else if (date.includes("OCTOBER")) {
              month = "October"
            } else if (date.includes("NOVEMBER")) {
              month = "November"
            } else if (date.includes("DECEMBER")) {
              month = "December"
            };
            
            const url1 = "Badminton/"
            const url2 = ".png"
            var HSBC
            var Logo
            var Flag
            var Location
            if (name.includes("HYLO")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "Hylo" + url2
              Flag = url1 + "GermanFlag" + url2
              Location = ["Saarbrucken", "Germany"]
            } else if (name.includes("Australian")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "Australian" + url2
              Flag = url1 + "AustralianFlag" + url2
              Location = ["Sydney", "Australia"]
            } else if (name.includes("India Open")) {
              HSBC = url1 + "HSBC500" + url2
              Logo = url1 + "IndianOpen" + url2
              Flag = url1 + "IndianFlag" + url2
              Location = ["New Dehli", "India"]
            } else if (name.includes("Syed Modi")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "IndiaInternational" + url2
              Flag = url1 + "IndianFlag" + url2
              Location = ["Lucknow", "India"]
            } else if (name.includes("Malaysia Open")) {
              HSBC = url1 + "HSBC750" + url2
              Logo = url1 + "MalaysianOpen" + url2
              Flag = url1 + "MalaysianFlag" + url2
              Location = ["Kuala Lumpur", "Malaysia"]
            } else if (name.includes("Malaysia Masters")) {
              HSBC = url1 + "HSBC500" + url2
              Logo = url1 + "MalaysianMasters" + url2
              Flag = url1 + "MalaysianFlag" + url2
              Location = ["Kuala Lumpur", "Malaysia"]
            } else if (name.includes("Indonesia Masters")) {
              HSBC = url1 + "HSBC500" + url2
              Logo = url1 + "IndonesianMasters" + url2
              Flag = url1 + "IndonesianFlag" + url2
              Location = ["Jakarta", "Indonesia"]
            } else if (name.includes("Indonesia Open")) {
              HSBC = url1 + "HSBC750" + url2
              Logo = url1 + "IndonesianOpen" + url2
              Flag = url1 + "IndonesianFlag" + url2
              Location = ["Jakarta", "Indonesia"]
            } else if (name.includes("Singapore")) {
              HSBC = url1 + "HSBC500" + url2
              Logo = url1 + "SingaporeOpen" + url2
              Flag = url1 + "SingaporeFlag" + url2
              Location = ["Singapore", "Singapore"]
            } else if (name.includes("Taipei")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "TaipeiOpen" + url2
              Flag = url1 + "TaiwanFlag" + url2
              Location = ["Taipei", "Taiwan"]
            } else if (name.includes("Japan")) {
              HSBC = url1 + "HSBC750" + url2
              Logo = url1 + "JapanOpen" + url2
              Flag = url1 + "JapaneseFlag" + url2
              Location = ["Osaka", "Japan"]
            } else if (name.includes("Denmark Open")) {
              HSBC = url1 + "HSBC750" + url2
              Logo = url1 + "DenmarkOpen" + url2
              Flag = url1 + "DanishFlag" + url2
              Location = ["Odense", "Denmark"]
            } else if (name.includes("Denmark Masters")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "" + url2
              Flag = url1 + "DanishFlag" + url2
              Location = ["Hillerod", "Denmark"]
            } else if (name.includes("Korea Open")) {
              HSBC = url1 + "HSBC500" + url2
              Logo = url1 + "KoreanOpen" + url2
              Flag = url1 + "KoreanFlag" + url2
              Location = ["Suncheon", "Korea"]
            } else if (name.includes("Korea Masters")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "KoreanMasters" + url2
              Flag = url1 + "KoreanFlag" + url2
              Location = ["Gwangju", "Korea"]
            } else if (name.includes("Thailand Open")) {
              HSBC = url1 + "HSBC500" + url2
              Logo = url1 + "ThaiOpen" + url2
              Flag = url1 + "ThaiFlag" + url2
              Location = ["Bangkok", "Thailand"]
            } else if (name.includes("Thai Masters")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "ThaiMasters" + url2
              Flag = url1 + "ThaiFlag" + url2
              Location = ["Bangkok", "Thailand"]
            } else if (name.includes("Macau")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "MacauOpen" + url2
              Flag = url1 + "MacauFlag" + url2
              Location = ["Macau", "Macau China"]
            } else if (name.includes("Swiss")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "SwissOpen" + url2
              Flag = url1 + "SwissFlag" + url2;
              Location = ["Basel", "Switzerland"]
            } else if (name.includes("German")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "GermanOpen" + url2
              Flag = url1 + "GermanFlag" + url2
              Location = ["Mulheim", "Germany"]
            } else if (name.includes("All England")) {
              HSBC = url1 + "HSBC1000" + url2
              Logo = url1 + "AllEngland" + url2
              Flag = url1 + "EnglishFlag" + url2
              Location = ["Birmingham", "England"]
            } else if (name.includes("French")) {
              HSBC = url1 + "HSBC750" + url2
              Logo = url1 + "French" + url2
              Flag = url1 + "FrenchFlag" + url2
              Location = ["Paris", "France"]
            } else if (name.includes("New Zealand")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "NZOpen" + url2
              Flag = url1 + "NZFlag" + url2
              Location = ["Auckland", "New Zealand"]
            } else if (name.includes("Spain")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "SpanishMasters" + url2
              Flag = url1 + "SpanishFlag" + url2
              Location = ["Huelva", "Spain"]
            } else if (name.includes("China Open")) {
              HSBC = url1 + "HSBC1000" + url2
              Logo = url1 + "China" + url2
              Flag = url1 + "ChineseFlag" + url2
              Location = ["Changzhou", "China"]
            } else if (name.includes("Fuzhou")) {
              HSBC = url1 + "HSBC750" + url2
              Logo = url1 + "Fuzhou" + url2
              Flag = url1 + "ChineseFlag" + url2
              Location = ["Fuzhou", "China"]
            } else if (name.includes("U.S. Open")) {
              HSBC = url1 + "HSBC300" + url2
              Logo = url1 + "USOpen" + url2
              Flag = url1 + "USFlag" + url2
              Location = ["California", "United States"]
            } else if (name.includes("Hong Kong")) {
              HSBC = url1 + "HSBC500" + url2
              Logo = url1 + "HK" + url2
              Flag = url1 + "HKFlag" + url2
              Location = ["Hong Kong", "HK China"]
            } else if (name.includes("World Tour Finals")) {
              HSBC = "Badminton/HSBCLogo.png"
              Logo = url1 + "WorldTourFinals" + url2
              Flag = url1 + "ChineseFlag" + url2
              Location = ["Guangzhou", "China"]
            }

            var prize = $tourney.find('.info > .prize').text()
            prize = prize.replace(/\n/g, "")
            return {'name': name, "date": date, "month": month, "prize": prize, "HSBC": HSBC, 
                    "Logo": Logo, "Flag": Flag, "Location": Location}
          }) 
          .toArray();
          console.log(tourneys)

      for (let i = 0; i < tourneys.length; i++) {
        if (tourneys[i].name.includes("(Cancelled)")) {
        } else if (calendar.length < 1) {
          setCalendar(prevCalendar => [...prevCalendar, tourneys[i]])
        }
      };
     
    }
    getCalendar()
    console.log(calendar)

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
                <li><a href="http://localhost:3000/"><img src={homeicon} alt="Home Icon"/></a></li>
                <Link to="/badminton/BWFplayers">BWF Players</Link>
                <Link to="/badminton/BWFcalendar">BWF Calendar</Link>
                <Link to="/badminton/BWFrankings">BWF Rankings</Link>
            </ul>
          </div>
          <BWFCalendar 
            calendar = {calendar}
          />
        </div>
      );
}