import React from 'react';  
import DanishFlag from '../images/Badminton/DanishFlag.png';
import HKFlag from '../images/Badminton/HKFlag.png';
import JapaneseFlag from '../images/Badminton/JapaneseFlag.png';
import KoreanFlag from '../images/Badminton/KoreanFlag.png';
import TaiwanFlag from '../images/Badminton/TaiwanFlag.png';
import ViktorImg from '../images/Badminton/ViktorAxelsen.png';
import AkaneImg from '../images/Badminton/AkaneYamaguchi.png';
import SoYeongImg from '../images/Badminton/KimSoYeong.png';
import YugoImg from '../images/Badminton/YugoKobayashi.png';
import NozomiImg from '../images/Badminton/NozomiOkuhara.png';
import TzuYingImg from '../images/Badminton/TaiTzuYing.png';
import ChunMan from '../images/Badminton/TangChunMan.png';
import KentoImg from '../images/Badminton/KentoMomota.png';
import YukiImg from '../images/Badminton/YukiFukushima.png';
import YutaImg from '../images/Badminton/YutaWatanabe.png';


export default function BWFPlayers(props) {
    /*Process each score to have '-' separators and commas between each set in BWFplayers.js */
    const [selPlayer, setSelPlayer] = React.useState()

    var ViktorRes = props.ViktorRes
    var YutaRes = props.YutaRes
    var KentoRes = props.KentoRes
    var AkaneRes = props.AkaneRes
    var TaiRes = props.TaiRes
    var NozomiRes = props.NozomiRes
    var YugoRes = props.YugoRes
    var KongRes = props.KongRes
    var YukiRes = props.YukiRes
    var TangRes = props.TangRes

    const showPlayer = (e) =>  {
        const value = e.target.value
        setSelPlayer(value)

        if (value === "Viktor") {
            document.getElementById('Viktor').style.display = 'block'
            document.getElementById(selPlayer).style.display = 'none'
        } else if (value === "SoYeong") {
            document.getElementById('SoYeong').style.display = 'block'
            document.getElementById(selPlayer).style.display = 'none'
        } else if (value === "Yugo") {
            document.getElementById('Yugo').style.display = 'block'
            document.getElementById(selPlayer).style.display = 'none'
        } else if (value === "Kento") {
            document.getElementById('Kento').style.display = 'block'
            document.getElementById(selPlayer).style.display = 'none'
        } else if (value === "Nozomi") {
            document.getElementById('Nozomi').style.display = 'block'
            document.getElementById(selPlayer).style.display = 'none'
        } else if (value === "TzuYing") {
            document.getElementById('TzuYing').style.display = 'block'
            document.getElementById(selPlayer).style.display = 'none'
        } else if (value === "Yuta") {
            document.getElementById('Yuta').style.display = 'block'
            document.getElementById(selPlayer).style.display = 'none'
        } else if (value === "Akane") {
            document.getElementById('Akane').style.display = 'block'
            document.getElementById(selPlayer).style.display = 'none'
        } else if (value === "ChunMan") {
            document.getElementById('ChunMan').style.display = 'block'
            document.getElementById(selPlayer).style.display = 'none'
        } else if (value === "Yuki") {
            document.getElementById('Yuki').style.display = 'block'
            document.getElementById(selPlayer).style.display = 'none'
        } 
    }

    try {
        var Viktor = ViktorRes.slice(0, ViktorRes.length - 2)
        Viktor = Viktor.map((t, index) => (
            <div key={index} className="playerres">
                <br></br><br></br><br></br>
                <div className="tourney">
                    <div className="tourneyimg">
                        <img src={require("../images/" + t.logo)} />
                    </div>
                    <div className="tourneytitle">
                        {t.tourney}
                    </div>
                    <div className="tourneydate">
                        {t.date}
                    </div>
                </div>
                <br></br><br></br>
                <div className="matches">
                    <div className="oddmat">
                        <div className="match">
                            <div className="result">
                                {t.result[0]} <br></br><br></br>
                                {t.result[1]}
                            </div>
                            <div className="round">
                                {t.round[0]} 
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[0]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[4]} <br></br><br></br>
                                {t.result[5]} 
                            </div>
                            <div className="round">
                                {t.round[2]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[2]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[8]} <br></br><br></br>
                                {t.result[9]} 
                            </div>
                            <div className="round">
                                {t.round[4]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[4]}
                            </div>
                        </div>
                    </div>
                    <div className="evenmat">
                        <div className="match">
                            <div className="result">
                                {t.result[2]} <br></br><br></br>
                                {t.result[3]} 
                            </div>
                            <div className="round">
                                {t.round[1]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[1]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[6]} <br></br><br></br>
                                {t.result[7]} 
                            </div>
                            <div className="round">
                                {t.round[3]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[3]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[10]} <br></br><br></br>
                                {t.result[11]} 
                            </div>
                            <div className="round">
                                {t.round[5]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[5]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        var Kento = KentoRes.slice(0, KentoRes.length - 2)
        Kento = Kento.map((t, index) => (
            <div key={index} className="playerres">
                <br></br><br></br><br></br>
                <div className="tourney">
                    <div className="tourneyimg">
                        <img src={require("../images/" + t.logo)} />
                    </div>
                    <div className="tourneytitle">
                        {t.tourney}
                    </div>
                    <div className="tourneydate">
                        {t.date}
                    </div>
                </div>
                <br></br><br></br>
                <div className="matches">
                    <div className="oddmat">
                        <div className="match">
                            <div className="result">
                                {t.result[0]} <br></br><br></br>
                                {t.result[1]}
                            </div>
                            <div className="round">
                                {t.round[0]} 
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[0]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[4]} <br></br><br></br>
                                {t.result[5]} 
                            </div>
                            <div className="round">
                                {t.round[2]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[2]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[8]} <br></br><br></br>
                                {t.result[9]} 
                            </div>
                            <div className="round">
                                {t.round[4]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[4]}
                            </div>
                        </div>
                    </div>
                    <div className="evenmat">
                        <div className="match">
                            <div className="result">
                                {t.result[2]} <br></br><br></br>
                                {t.result[3]} 
                            </div>
                            <div className="round">
                                {t.round[1]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[1]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[6]} <br></br><br></br>
                                {t.result[7]} 
                            </div>
                            <div className="round">
                                {t.round[3]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[3]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[10]} <br></br><br></br>
                                {t.result[11]} 
                            </div>
                            <div className="round">
                                {t.round[5]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[5]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        var Akane = AkaneRes.slice(0, AkaneRes.length - 2)
        Akane = Akane.map((t, index) => (
            <div key={index} className="playerres">
                <br></br><br></br><br></br>
                <div className="tourney">
                    <div className="tourneyimg">
                        <img src={require("../images/" + t.logo)} />
                    </div>
                    <div className="tourneytitle">
                        {t.tourney}
                    </div>
                    <div className="tourneydate">
                        {t.date}
                    </div>
                </div>
                <br></br><br></br>
                <div className="matches">
                    <div className="oddmat">
                        <div className="match">
                            <div className="result">
                                {t.result[0]} <br></br><br></br>
                                {t.result[1]}
                            </div>
                            <div className="round">
                                {t.round[0]} 
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[0]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[4]} <br></br><br></br>
                                {t.result[5]} 
                            </div>
                            <div className="round">
                                {t.round[2]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[2]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[8]} <br></br><br></br>
                                {t.result[9]} 
                            </div>
                            <div className="round">
                                {t.round[4]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[4]}
                            </div>
                        </div>
                    </div>
                    <div className="evenmat">
                        <div className="match">
                            <div className="result">
                                {t.result[2]} <br></br><br></br>
                                {t.result[3]} 
                            </div>
                            <div className="round">
                                {t.round[1]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[1]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[6]} <br></br><br></br>
                                {t.result[7]} 
                            </div>
                            <div className="round">
                                {t.round[3]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[3]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[10]} <br></br><br></br>
                                {t.result[11]} 
                            </div>
                            <div className="round">
                                {t.round[5]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[5]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        var TzuYing = TaiRes.slice(0, TaiRes.length - 2)
        TzuYing = TzuYing.map((t, index) => (
            <div key={index} className="playerres">
                <br></br><br></br><br></br>
                <div className="tourney">
                    <div className="tourneyimg">
                        <img src={require("../images/" + t.logo)} />
                    </div>
                    <div className="tourneytitle">
                        {t.tourney}
                    </div>
                    <div className="tourneydate">
                        {t.date}
                    </div>
                </div>
                <br></br><br></br>
                <div className="matches">
                    <div className="oddmat">
                        <div className="match">
                            <div className="result">
                                {t.result[0]} <br></br><br></br>
                                {t.result[1]}
                            </div>
                            <div className="round">
                                {t.round[0]} 
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[0]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[4]} <br></br><br></br>
                                {t.result[5]} 
                            </div>
                            <div className="round">
                                {t.round[2]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[2]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[8]} <br></br><br></br>
                                {t.result[9]} 
                            </div>
                            <div className="round">
                                {t.round[4]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[4]}
                            </div>
                        </div>
                    </div>
                    <div className="evenmat">
                        <div className="match">
                            <div className="result">
                                {t.result[2]} <br></br><br></br>
                                {t.result[3]} 
                            </div>
                            <div className="round">
                                {t.round[1]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[1]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[6]} <br></br><br></br>
                                {t.result[7]} 
                            </div>
                            <div className="round">
                                {t.round[3]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[3]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[10]} <br></br><br></br>
                                {t.result[11]} 
                            </div>
                            <div className="round">
                                {t.round[5]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[5]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        var Nozomi = NozomiRes.slice(0, NozomiRes.length - 2)
        Nozomi = Nozomi.map((t, index) => (
            <div key={index} className="playerres">
                <br></br><br></br><br></br>
                <div className="tourney">
                    <div className="tourneyimg">
                        <img src={require("../images/" + t.logo)} />
                    </div>
                    <div className="tourneytitle">
                        {t.tourney}
                    </div>
                    <div className="tourneydate">
                        {t.date}
                    </div>
                </div>
                <br></br><br></br>
                <div className="matches">
                    <div className="oddmat">
                        <div className="match">
                            <div className="result">
                                {t.result[0]} <br></br><br></br>
                                {t.result[1]}
                            </div>
                            <div className="round">
                                {t.round[0]} 
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[0]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[4]} <br></br><br></br>
                                {t.result[5]} 
                            </div>
                            <div className="round">
                                {t.round[2]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[2]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[8]} <br></br><br></br>
                                {t.result[9]} 
                            </div>
                            <div className="round">
                                {t.round[4]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[4]}
                            </div>
                        </div>
                    </div>
                    <div className="evenmat">
                        <div className="match">
                            <div className="result">
                                {t.result[2]} <br></br><br></br>
                                {t.result[3]} 
                            </div>
                            <div className="round">
                                {t.round[1]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[1]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[6]} <br></br><br></br>
                                {t.result[7]} 
                            </div>
                            <div className="round">
                                {t.round[3]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[3]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[10]} <br></br><br></br>
                                {t.result[11]} 
                            </div>
                            <div className="round">
                                {t.round[5]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[5]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        var Yugo = YugoRes.slice(0, YugoRes.length - 2)
        Yugo = Yugo.map((t, index) => (
            <div key={index} className="playerres">
                <br></br><br></br><br></br>
                <div className="tourney">
                    <div className="tourneyimg">
                        <img src={require("../images/" + t.logo)} />
                    </div>
                    <div className="tourneytitle">
                        {t.tourney}
                    </div>
                    <div className="tourneydate">
                        {t.date}
                    </div>
                </div>
                <br></br><br></br>
                <div className="matches">
                    <div className="oddmat">
                        <div className="match">
                            <div className="result">
                                {t.result[0]} <br></br><br></br>
                                {t.result[1]}
                            </div>
                            <div className="round">
                                {t.round[0]} 
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[0]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[4]} <br></br><br></br>
                                {t.result[5]} 
                            </div>
                            <div className="round">
                                {t.round[2]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[2]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[8]} <br></br><br></br>
                                {t.result[9]} 
                            </div>
                            <div className="round">
                                {t.round[4]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[4]}
                            </div>
                        </div>
                    </div>
                    <div className="evenmat">
                        <div className="match">
                            <div className="result">
                                {t.result[2]} <br></br><br></br>
                                {t.result[3]} 
                            </div>
                            <div className="round">
                                {t.round[1]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[1]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[6]} <br></br><br></br>
                                {t.result[7]} 
                            </div>
                            <div className="round">
                                {t.round[3]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[3]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[10]} <br></br><br></br>
                                {t.result[11]} 
                            </div>
                            <div className="round">
                                {t.round[5]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[5]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        var Kong = KongRes.slice(0, KongRes.length - 2)
        Kong = Kong.map((t, index) => (
            <div key={index} className="playerres">
                <br></br><br></br><br></br>
                <div className="tourney">
                    <div className="tourneyimg">
                        <img src={require("../images/" + t.logo)} />
                    </div>
                    <div className="tourneytitle">
                        {t.tourney}
                    </div>
                    <div className="tourneydate">
                        {t.date}
                    </div>
                </div>
                <br></br><br></br>
                <div className="matches">
                    <div className="oddmat">
                        <div className="match">
                            <div className="result">
                                {t.result[0]} <br></br><br></br>
                                {t.result[1]}
                            </div>
                            <div className="round">
                                {t.round[0]} 
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[0]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[4]} <br></br><br></br>
                                {t.result[5]} 
                            </div>
                            <div className="round">
                                {t.round[2]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[2]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[8]} <br></br><br></br>
                                {t.result[9]} 
                            </div>
                            <div className="round">
                                {t.round[4]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[4]}
                            </div>
                        </div>
                    </div>
                    <div className="evenmat">
                        <div className="match">
                            <div className="result">
                                {t.result[2]} <br></br><br></br>
                                {t.result[3]} 
                            </div>
                            <div className="round">
                                {t.round[1]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[1]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[6]} <br></br><br></br>
                                {t.result[7]} 
                            </div>
                            <div className="round">
                                {t.round[3]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[3]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[10]} <br></br><br></br>
                                {t.result[11]} 
                            </div>
                            <div className="round">
                                {t.round[5]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[5]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        var Yuki = YukiRes.slice(0, YukiRes.length - 2)
        Yuki = Yuki.map((t, index) => (
            <div key={index} className="playerres">
                <br></br><br></br><br></br>
                <div className="tourney">
                    <div className="tourneyimg">
                        <img src={require("../images/" + t.logo)} />
                    </div>
                    <div className="tourneytitle">
                        {t.tourney}
                    </div>
                    <div className="tourneydate">
                        {t.date}
                    </div>
                </div>
                <br></br><br></br>
                <div className="matches">
                    <div className="oddmat">
                        <div className="match">
                            <div className="result">
                                {t.result[0]} <br></br><br></br>
                                {t.result[1]}
                            </div>
                            <div className="round">
                                {t.round[0]} 
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[0]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[4]} <br></br><br></br>
                                {t.result[5]} 
                            </div>
                            <div className="round">
                                {t.round[2]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[2]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[8]} <br></br><br></br>
                                {t.result[9]} 
                            </div>
                            <div className="round">
                                {t.round[4]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[4]}
                            </div>
                        </div>
                    </div>
                    <div className="evenmat">
                        <div className="match">
                            <div className="result">
                                {t.result[2]} <br></br><br></br>
                                {t.result[3]} 
                            </div>
                            <div className="round">
                                {t.round[1]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[1]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[6]} <br></br><br></br>
                                {t.result[7]} 
                            </div>
                            <div className="round">
                                {t.round[3]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[3]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[10]} <br></br><br></br>
                                {t.result[11]} 
                            </div>
                            <div className="round">
                                {t.round[5]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[5]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        var Tang = TangRes.slice(0, TangRes.length - 2)
        Tang = Tang.map((t, index) => (
            <div key={index} className="playerres">
                <br></br><br></br><br></br>
                <div className="tourney">
                    <div className="tourneyimg">
                        <img src={require("../images/" + t.logo)} />
                    </div>
                    <div className="tourneytitle">
                        {t.tourney}
                    </div>
                    <div className="tourneydate">
                        {t.date}
                    </div>
                </div>
                <br></br><br></br>
                <div className="matches">
                    <div className="oddmat">
                        <div className="match">
                            <div className="result">
                                {t.result[0]} <br></br><br></br>
                                {t.result[1]}
                            </div>
                            <div className="round">
                                {t.round[0]} 
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[0]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[4]} <br></br><br></br>
                                {t.result[5]} 
                            </div>
                            <div className="round">
                                {t.round[2]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[2]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[8]} <br></br><br></br>
                                {t.result[9]} 
                            </div>
                            <div className="round">
                                {t.round[4]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[4]}
                            </div>
                        </div>
                    </div>
                    <div className="evenmat">
                        <div className="match">
                            <div className="result">
                                {t.result[2]} <br></br><br></br>
                                {t.result[3]} 
                            </div>
                            <div className="round">
                                {t.round[1]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[1]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[6]} <br></br><br></br>
                                {t.result[7]} 
                            </div>
                            <div className="round">
                                {t.round[3]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[3]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[10]} <br></br><br></br>
                                {t.result[11]} 
                            </div>
                            <div className="round">
                                {t.round[5]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[5]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        var Yuta = YutaRes.slice(0, YutaRes.length - 2)     
        Yuta = Yuta.map((t, index) => (
            <div key={index} className="playerres">
                <br></br><br></br><br></br>
                <div className="tourney">
                    <div className="tourneyimg">
                        <img src={require("../images/" + t.logo)} />
                    </div>
                    <div className="tourneytitle">
                        {t.tourney}
                    </div>
                    <div className="tourneydate">
                        {t.date}
                    </div>
                </div>
                <br></br><br></br>
                <div className="matches">
                    <div className="oddmat">
                        <div className="match">
                            <div className="result">
                                {t.result[0]} <br></br><br></br>
                                {t.result[1]}
                            </div>
                            <div className="round">
                                {t.round[0]} 
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[0]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[4]} <br></br><br></br>
                                {t.result[5]} 
                            </div>
                            <div className="round">
                                {t.round[2]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[2]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[8]} <br></br><br></br>
                                {t.result[9]} 
                            </div>
                            <div className="round">
                                {t.round[4]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[4]}
                            </div>
                        </div>
                    </div>
                    <div className="evenmat">
                        <div className="match">
                            <div className="result">
                                {t.result[2]} <br></br><br></br>
                                {t.result[3]} 
                            </div>
                            <div className="round">
                                {t.round[1]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[1]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[6]} <br></br><br></br>
                                {t.result[7]} 
                            </div>
                            <div className="round">
                                {t.round[3]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[3]}
                            </div>
                        </div>
                        <div className="match">
                            <div className="result">
                                {t.result[10]} <br></br><br></br>
                                {t.result[11]} 
                            </div>
                            <div className="round">
                                {t.round[5]} <br></br>
                            </div>
                            <div className="scoretitle">
                                Result
                            </div>
                            <div className="score">
                                {t.score[5]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))


    } catch (error) {
        console.log("error")
    }

    return (
        <div className="lol">
            <h1>BWF Player Results 2022</h1>
            <div className="custom-select">
                <select onChange={showPlayer} >
                    <option value="Select">Select player:</option>
                    <option value="Viktor">Viktor Axelsen</option>
                    <option value="Yuki">Yuki Fukushima</option>
                    <option value="SoYeong">So Yeong Kim</option>
                    <option value="Yugo">Yugo Kobayashi</option>
                    <option value="Kento">Kento Momota</option>
                    <option value="Nozomi">Nozomi Okuhara</option>
                    <option value="TzuYing">Tzu Ying Tai</option>
                    <option value="ChunMan">Chun Man Tang</option>
                    <option value="Yuta">Yuta Watanabe</option>
                    <option value="Akane">Akane Yamaguchi</option>
                </select>
            </div>
            <div id="Viktor">
                <div className="playertitle">
                    <div className="playerimg">
                        <img src={ViktorImg}></img>
                    </div>
                    <div className="playerflag">
                        <img src={DanishFlag}></img><h2>Viktor Axelsen</h2>
                        <br></br>
                    </div>
                </div>
                {Viktor}
            </div>
            <div id="Kento">
                <div className="playertitle">
                    <div className="playerimg">
                        <img src={KentoImg}></img>
                    </div>
                    <div className="playerflag">
                        <img src={JapaneseFlag}></img><h2>Kento Momota</h2>
                        <br></br>
                    </div>
                </div>
                {Kento}
            </div>
            <div id="TzuYing">
                <div className="playertitle">
                    <div className="playerimg">
                        <img src={TzuYingImg}></img>
                    </div>
                    <div className="playerflag">
                        <img src={TaiwanFlag}></img><h2>Tzu Ying Tai</h2>
                        <br></br>
                    </div>
                </div>
                {TzuYing}
            </div>
            <div id="SoYeong">
                <div className="playertitle">
                    <div className="playerimg">
                        <img src={SoYeongImg}></img>
                    </div>
                    <div className="playerflag">
                        <img src={KoreanFlag}></img><h2>So Yeong Kim</h2>
                        <br></br>
                    </div>
                </div>
                {Kong}
            </div>
            <div id="Yugo">
                <div className="playertitle">
                    <div className="playerimg">
                        <img src={YugoImg}></img>
                    </div>
                    <div className="playerflag">
                        <img src={JapaneseFlag}></img><h2>Yugo Kobayashi</h2>
                        <br></br>
                    </div>
                </div>
                {Yugo}
            </div>
            <div id="Nozomi">
                <div className="playertitle">
                    <div className="playerimg">
                        <img src={NozomiImg}></img>
                    </div>
                    <div className="playerflag">
                        <img src={JapaneseFlag}></img><h2>Nozomi Okuhara</h2>
                        <br></br>
                    </div>
                </div>
                {Nozomi}
            </div>
            <div id="ChunMan">
                <div className="playertitle">
                    <div className="playerimg">
                        <img src={YutaImg}></img>
                    </div>
                    <div className="playerflag">
                        <img src={HKFlag}></img><h2>Chun Man Tang</h2>
                        <br></br>
                    </div>
                </div>
                {ChunMan}           
            </div>
            <div id="Yuta">
                <div className="playertitle">
                    <div className="playerimg">
                        <img src={YutaImg}></img>
                    </div>
                    <div className="playerflag">
                        <img src={JapaneseFlag}></img><h2>Yuta Watanabe</h2>
                        <br></br>
                    </div>
                </div>
                {Yuta}
            </div>
            <div id="Yuki">
                <div className="playertitle">
                    <div className="playerimg">
                        <img src={YukiImg}></img>
                    </div>
                    <div className="playerflag">
                        <img src={JapaneseFlag}></img><h2>Yuki Fukushima</h2>
                        <br></br>
                    </div>
                </div>
                {Yuki}
            </div>
            <div id="Akane">
                <div className="playertitle">
                    <div className="playerimg">
                        <img src={AkaneImg}></img>
                    </div>
                    <div className="playerflag">
                        <img src={JapaneseFlag}></img><h2>Akane Yamaguchi</h2>
                        <br></br>
                    </div>
                </div>
                {Akane}
            </div>
        </div>       
    )
}
