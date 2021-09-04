import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import CardList from "./components/CardList";
import Quotes from "./components/Quotes";

import Gambar from "./assets/images/ber.jpg";

const quotes ="Disaat payung teduh ku dengar , disitu lah tugas-tugas terbabat abis";
const newQuotes = "tes test tes";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList 
      name="Bernita Febrihatin" 
      nim="21120118120023" 
      kelompok="10" 
      isNameBold 
      image={Gambar}/>
    <Quotes author="Orang" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById('root')
);
