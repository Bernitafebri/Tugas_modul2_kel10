import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import CardList from "./components/CardList";
// import Quotes from "./components/Quotes";
// import Gambar from "./assets/images/ber.jpg";
// const quotes ="Disaat payung teduh ku dengar , disitu lah tugas-tugas terbabat abis";


import Foods from './components/Tugas/foods';
import Footer from './components/Tugas/footer';

import img from './assets/images/Rendang.jpg';
import img1 from './assets/images/rawon.jpg';
import img2 from './assets/images/Sate Lilit.jpg';
const des = " Rendang merupakan masakan yang berasal dari Minangkabau, terbuat dari olahan daging yang dimasak dengan bumbu rempah.";
const des1 = "Sup daging dengan kuah kental berwarna hitam ini merupakan makanan khas yang berasal dari Jawa Timur. Warna hitam gelap pada rawon dihasilkan oleh kluwek dicampur dengan potongan daging sapi yang lembut. Rawon biasanya disajikan dengan nasi, tauge, daun bawang, telur asin, dan daun kerupuk udang sebagai pelengkap.";
const des2 = "Berbeda dari sate pada umumnya yang berupa tusukan potongan daging, sate lilit berbentuk gumpalan adonan yang terbuat dari daging yang membalut tusuk sate. Selain itu, sate ini juga tidak dihidangkan dengan bumbu kacang, karena bumbu adonannya sudah kaya akan cita rasa.";

const food = [
  { image: img , name: "Rendang", desc: des },
  { image: img1, name: "Rawon", desc: des1 },
  { image: img2, name: "Sate Lilit", desc: des2  },
];




ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <CardList 
      name="Bernita Febrihatin" 
      nim="21120118120023" 
      kelompok="10" 
      isNameBold 
      image={Gambar}/>
    <Quotes author="Orang" quotes={quotes} /> */}

    <Foods food={food}
    
    />

    <Footer 
    made="Made by Kelompok 10"
    auth1="Bernita"
    auth2="Fadhil"
    />



  </React.StrictMode>,
  document.getElementById('root')
);
