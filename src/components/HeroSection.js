import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img class="IMAGE"src='/videos/Hotel_1.png' autoPlay loop muted />
      <h1>THE FRESCO HOTEL</h1>
      <p class="par">SRI LANKA</p>
      
      <hr class="new5"></hr>

      
      <h4>Bejeweled as one of the finest five-star Sri lanka hotels located in-between Galle Face Green, the World Trade Centre and the Dutch Hospital Precinct, we welcome you to The Kingsbury Hotel in Colombo. With easy access for your shopping, entertainment and business needs, we will ensure your stay is perfect and your experiences are complete.

      </h4>

    </div>
  );
}

export default HeroSection;
