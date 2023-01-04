import React from 'react';   
import * as cheerio from 'cheerio';
import { Link } from "react-router-dom";
import BWFPlayers from '../../components/bwfplayerinfo'
import '../../App.css';
import './BWFplayers.css';
import homeicon from '../../images/homeicon.jpg';

export default function BWFplayers() {
    /*Get recent results. Array of array - 0: rounds, 1: matches, 2: tournament*/
    const [YutaRes, setYutaRes] = React.useState([])
    const [KentoRes, setKentoRes] = React.useState([])
    const [ViktorRes, setViktorRes] = React.useState([])
    const [AkaneRes, setAkaneRes] = React.useState([])
    const [TaiRes, setTaiRes] = React.useState([])
    const [NozomiRes, setNozomiRes] = React.useState([])
    const [YugoRes, setYugoRes] = React.useState([])
    const [KongRes, setKongRes] = React.useState([])
    const [YukiRes, setYukiRes] = React.useState([])
    const [TangRes, setTangRes] = React.useState([])
    
    /* Fetch fav players' rank and recent results*/
    React.useEffect(() => {
        let isMounted = true
        const Kento = ["https://bwfworldtourfinals.bwfbadminton.com/player/89785/kento-momota/tournament-results", "Kento", "1"]
        const Viktor = ["https://bwfworldtourfinals.bwfbadminton.com/player/25831/viktor-axelsen/tournament-results", "Viktor", "1"]
        const Akane = ["https://bwfworldtourfinals.bwfbadminton.com/player/96312/akane-yamaguchi/tournament-results", "Akane", "1"]
        const Tai = ["https://bwfworldtourfinals.bwfbadminton.com/player/61427/tai-tzu-ying/tournament-results", "Tai", "1"]
        const Nozomi = ["https://bwfworldtourfinals.bwfbadminton.com/player/96713/nozomi-okuhara/tournament-results", "Nozomi", "1"]
        const Yugo = ["https://bwfworldtourfinals.bwfbadminton.com/player/67903/yugo-kobayashi/tournament-results", "Yugo", "1"]
        const Kong = ["https://bwfworldtourfinals.bwfbadminton.com/player/71391/kong-hee-yong/tournament-results", "Kong", "1"]
        const Yuki = ["https://bwfworldtourfinals.bwfbadminton.com/player/71023/yuki-fukushima/tournament-results", "Yuki", "1"]
        const Tang = ["https://bwfworldtourfinals.bwfbadminton.com/player/77689/tang-chun-man/tournament-results", "Tang", "1"]
        const Yuta = ["https://bwfworldtourfinals.bwfbadminton.com/player/58240/yuta-watanabe/tournament-results", "Yuta", "XD"]

        const fetchplayer = async (url, name, discipline) => {
        
            const response = await fetch(url);
            const body = await response.text();
            const $ = cheerio.load(body); 
            
            var rank = []
            $('.player-rank-wrap').map((i, el) => {
                if (discipline === 'MD'||discipline === 'WD'){
                rank = $(el).find('#world_d_rank').text();
                } else if (discipline === 'XD') {
                rank = $(el).find('#world_x_rank').text();
                } else {
                rank = $(el).find('.ranking-number:first').text();
                rank = rank.replace(/\n/g, "")
                }
                return rank;
            })

            const results = $('.col-1-2') 
                    .map((_, tourney) => { 
                        const $tourney = $(tourney)
                        var result = $tourney.find('.player-result-player-wrap').text()
                        result = result.replace(/\n/g, "");
                        var round = $tourney.find('.player-result-round').text()
                        round = round.replace(/\n/g, "")
                        var score = $tourney.find('.player-result-win').text()
                        score = score.replace(/\n/g, "")
                        return {"round": round, "result": result, "score": score}
                        
                    }) 
                    .toArray(); 

            const t = []
            const TCupRes = []
            const TCupR = []
            const UCupRes = []
            const UCupR = []
            const SCupRes = []
            const SCupR = []

            for (let i = 0; i < results.length; i++) {
                if (results[i].round === ''){
                
                } else {
                    const round = results[i].round

                    if (name === "Yuta") {
                        var result = String(results[i].result.split(/(?= Yuta)/g))
            
                    } else if (name === "Kento") {
                        result = String(results[i].result.split(/(?= Kento)/g))

                    } else if (name === "Viktor") {
                        result = String(results[i].result.split(/(?= Viktor)/g))
            
                    } else if (name === 'Akane') {
                        result = String(results[i].result.split(/(?= Akane)/g))
            
                    } else if (name === 'Tai') {
                        result = String(results[i].result.split(/(?= Tai)/g))
            
                    } else if (name === 'Nozomi') {
                        result = String(results[i].result.split(/(?= Nozomi)/g))
            
                    } else if (name === 'Yugo') {
                        result = String(results[i].result.split(/(?= Yugo)/g))
            
                    } else if (name === 'Kong') {
                        result = String(results[i].result.split(/(?= KONG)/g))
            
                    } else if (name === 'Yuki') {
                        result = String(results[i].result.split(/(?= Yuki)/g))
            
                    } else if (name === 'Tang') {
                        result = String(results[i].result.split(/(?= Tang)/g))
                    }

                    if (round.includes("Thomas")) {
                        /*var rounds = round.replace('  ', ' ')
                        rounds = rounds.trim()
                        rounds = rounds.split(/(?= Thomas)/g)
                        var r = result.split(", ")
                        TCupRes.push(r)
                        TCupR.push(round)*/
                    } else if (round.includes("Uber")) {
                        /*UCupRes.push(result)
                        UCupR.push(round)*/
                    } else if (round.includes("Sudirman")) {
                        /*SCupRes.push(result)
                        SCupR.push(round)*/  
                    } else {
                        var scores = []
                        var rounds = round.replace('  ', ' ')
                        rounds = rounds.trim()
                        rounds = rounds.split(" ")
                        result = result.split(/, | vs /)
                        var score = results[i].score.split(/ W| L/)
                        
                        /* if first score of each tourney starts with "W" or "L", remove it*/
                        for (let i = 0; i < score.length; i++) {
                            var s = score[i].replace(/\n/g, "")
                            if (s.startsWith("W")) {
                                s = s.slice(1)
                            } else if (s.startsWith("L")) {
                                s = s.slice(1)
                            }
                            s = s.replace(/ /g, "")
                            s = s.split(/-/) 
                            s = s.toString(s)
                            s = s.split(/,/)
                            scores.push(s)
                        }

                        const obj = {"round": rounds, "result": result, "score": scores}
                        t.push(obj)

                        /*if (i === results.length) {
                            const TCup = {"round": TCupR, "result": TCupRes}
                            const UCup = {"round": UCupR, "result": UCupRes}
                            const SCup = {"round": SCupR, "result": SCupRes}
                            t.push(TCup, UCup, SCup)
                        }*/
                    }
                }
            }

            const tourneys = $('.box-profile-tournament') 
                .map((_, tourney) => { 
                    const $tourney = $(tourney)
                    var name = $tourney.find('.info > h2 > a').text()
                    name = name.replace(/\n/g, "");

                    if (name.includes("Thomas" || "Uber" || "Sudirman")) {
                        
                    } else {
                        const url1 = "Badminton/"
                        const url2 = ".png"
                        var Logo
                        if (name.includes("HYLO")) {
                            Logo = url1 + "Hylo" + url2
                        } else if (name.includes("Australian")) {
                            Logo = url1 + "Australian" + url2
                        } else if (name.includes("India Open")) {
                            Logo = url1 + "India" + url2
                        } else if (name.includes("Syed Modi")) {
                            Logo = url1 + "IndiaInternational" + url2
                        } else if (name.includes("Malaysia Open")) {
                            Logo = url1 + "MalaysianOpen" + url2
                        } else if (name.includes("Malaysia Masters")) {
                            Logo = url1 + "MalaysianMasters" + url2
                        } else if (name.includes("Indonesia Masters")) {
                            Logo = url1 + "IndonesianMasters" + url2
                        } else if (name.includes("Indonesia Open")) {
                            Logo = url1 + "IndonesianOpen" + url2
                        } else if (name.includes("Singapore")) {
                            Logo = url1 + "SingaporeOpen" + url2
                        } else if (name.includes("Taipei")) {
                            Logo = url1 + "TaipeiOpen" + url2
                        } else if (name.includes("Japan")) {
                            Logo = url1 + "JapanOpen" + url2
                        } else if (name.includes("Denmark Open")) {
                            Logo = url1 + "DenmarkOpen" + url2
                        } else if (name.includes("Denmark Masters")) {
                            Logo = url1 + "" + url2
                        } else if (name.includes("Korea Open")) {
                            Logo = url1 + "KoreanOpen" + url2
                        } else if (name.includes("Korea Masters")) {
                            Logo = url1 + "KoreanMasters" + url2
                        } else if (name.includes("Thailand Open")) {
                            Logo = url1 + "ThaiOpen" + url2
                        } else if (name.includes("Thai Masters")) {
                            Logo = url1 + "ThaiMasters" + url2
                        } else if (name.includes("Macau")) {
                            Logo = url1 + "MacauOpen" + url2
                        } else if (name.includes("Swiss")) {
                            Logo = url1 + "SwissOpen" + url2
                        } else if (name.includes("German")) {
                            Logo = url1 + "GermanOpen" + url2
                        } else if (name.includes("All England")) {
                            Logo = url1 + "AllEngland" + url2
                        } else if (name.includes("French")) {
                            Logo = url1 + "French" + url2
                        } else if (name.includes("New Zealand")) {
                            Logo = url1 + "NZOpen" + url2
                        } else if (name.includes("Spain")) {
                            Logo = url1 + "SpanishMasters" + url2
                        } else if (name.includes("China Open")) {
                            Logo = url1 + "China" + url2
                        } else if (name.includes("Fuzhou")) {
                            Logo = url1 + "Fuzhou" + url2
                        } else if (name.includes("US Open")) {
                            Logo = url1 + "USOpen" + url2
                        } else if (name.includes("Hong Kong")) {
                            Logo = url1 + "HK" + url2
                        } else if (name.includes("World Tour Finals")) {
                            Logo = url1 + "WorldTourFinals" + url2
                        } else if (name.includes("Thomas")) {
                            Logo = url1 + "ThomasUber" + url2
                        } else if (name.includes("World Championships")) {
                            Logo = url1 + "WorldChamps" + url2
                        } else if (name.includes ("Asia Championships")) {
                            Logo = url1 + "AsianChamps" + url2
                        } else if (name.includes("European Championships")) {
                            Logo = url1 + "EuropeanChamps" + url2
                        }

                        var date = $tourney.find('.info > h4').text()
                        var prize = $tourney.find('.prize').text()
                        prize = prize.replace(/\n/g, "");
                        return {"name": name, "date": date, "prize": prize, "tourneylogo": Logo}
                    }                    
                }) 
                .toArray(); 
            
            const resarray = []
            for (let i = 0; i < tourneys.length; i++) {
                const arr = {"round": t[i].round, "result": t[i].result, "score": t[i].score, "tourney": tourneys[i].name, "logo": tourneys[i].tourneylogo, "date": tourneys[i].date, "prize": tourneys[i].prize}
                resarray.push(arr)
            }
                if (name === "Yuta") {
                    resarray.push("Badminton/YutaWatanabe.png")
                    resarray.push("Badminton/JapaneseFlag.png")
                    setYutaRes(resarray)

                } else if (name === "Kento") {
                    resarray.push("Badminton/KentoMomota.png")
                    resarray.push("Badminton/JapaneseFlag.png")    
                    setKentoRes(resarray)
                
                } else if (name === "Viktor") {
                    resarray.push("Badminton/ViktorAxelsen.png")
                    resarray.push("Badminton/DanishFlag.png")
                    setViktorRes(resarray)

                } else if (name === 'Akane') {
                    resarray.push("Badminton/AkaneYamaguchi.png")
                    resarray.push("Badminton/JapaneseFlag.png")
                    setAkaneRes(resarray)

                } else if (name === 'Tai') {
                    resarray.push("Badminton/TaiTzuYing.png")
                    resarray.push("Badminton/TaiwanFlag.png")
                    setTaiRes(resarray)

                } else if (name === 'Nozomi') {
                    resarray.push("Badminton/NozomiOkuhara.png")
                    resarray.push("Badminton/JapaneseFlag.png")
                    setNozomiRes(resarray)

                } else if (name === 'Yugo') {
                    resarray.push("Badminton/YugoKobayashi.png")
                    resarray.push("Badminton/JapaneseFlag.png")
                    setYugoRes(resarray)

                } else if (name === 'Kong') {
                    resarray.push("Badminton/KimSoYeong.png")
                    resarray.push("Badminton/KoreanFlag.png")
                    setKongRes(resarray)

                } else if (name === 'Yuki') {
                    resarray.push("Badminton/YukiFukushima.png")
                    resarray.push("Badminton/JapaneseFlag.png")
                    setYukiRes(resarray)

                } else if (name === 'Tang') {
                    resarray.push("Badminton/TangChunMan.png")
                    resarray.push("Badminton/HKFlag.png")
                    setTangRes(resarray)
                }
        }

        fetchplayer(Yuta[0], Yuta[1], Yuta[2])
        fetchplayer(Kento[0], Kento[1], Kento[2])
        fetchplayer(Viktor[0], Viktor[1], Viktor[2])
        fetchplayer(Akane[0], Akane[1], Akane[2])
        fetchplayer(Tai[0], Tai[1], Tai[2])
        fetchplayer(Nozomi[0], Nozomi[1], Nozomi[2])
        fetchplayer(Yugo[0], Yugo[1], Yugo[2])
        fetchplayer(Kong[0], Kong[1], Kong[2])
        fetchplayer(Yuki[0], Yuki[1], Yuki[2])
        fetchplayer(Tang[0], Tang[1], Tang[2])

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
          <BWFPlayers
            YutaRes = {YutaRes}
            KentoRes = {KentoRes}
            ViktorRes = {ViktorRes}
            AkaneRes = {AkaneRes}
            TaiRes = {TaiRes}
            NozomiRes = {NozomiRes}
            YugoRes = {YugoRes}
            KongRes = {KongRes}
            YukiRes = {YukiRes}
            TangRes = {TangRes}
          />
        </div>
      );
}
