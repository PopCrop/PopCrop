import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Badminton from "./routes/badminton/badminton";
import BWFplayers from "./routes/badminton/BWFplayers";
import BWFcalendar from "./routes/badminton/BWFcalendar"
import BWFrankings from "./routes/badminton/BWFrankings"
import Finance from "./routes/finance/finance";
import Volleyball from "./routes/volleyball/volleyball";
import Dumcks from "./routes/dumcks/dumcks";
import Callduck from "./routes/dumcks/callduck";
import Stonk from "./routes/finance/stonk";
import GME from "./routes/finance/GME";
import AMC from "./routes/finance/AMC";
import BBBY from "./routes/finance/BBBY";
import SPX from "./routes/finance/SPX";
import FVX from "./routes/finance/FVX";
import TNX from "./routes/finance/TNX";
import Cur from "./routes/finance/currencies"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="badminton" element={<Badminton />} />
      <Route path="badminton/BWFplayers" element={<BWFplayers />} />
      <Route path="badminton/BWFcalendar" element={<BWFcalendar />} />
      <Route path="badminton/BWFrankings" element={<BWFrankings />} />
      <Route path="finance" element={<Finance />} />
      <Route path="finance/stonk" element={<Stonk />} />
      <Route path="finance/stonk/GME" element={<GME />}/>
      <Route path="finance/stonk/AMC" element={<AMC />}/>
      <Route path="finance/stonk/BBBY" element={<BBBY />}/>
      <Route path="finance/stonk/SPX" element={<SPX />}/>
      <Route path="finance/stonk/FVX" element={<FVX />}/>
      <Route path="finance/stonk/TNX" element={<TNX />}/>
      <Route path="finance/cur" element={<Cur />} />
      <Route path="volleyball" element={<Volleyball />} />
      <Route path="dumcks/dumcks" element={<Dumcks />} />
      <Route path="dumcks/callduck" element={<Callduck />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);