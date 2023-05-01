import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <hr></hr>
      <h1>Create Timeless</h1>
      <h2>Memories with us</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Hotel_2.png'
              text='Have Fun Without Breaking the Bank Discover Our Great Deals'
              label='Superior'
              path='/services'
            />
            <CardItem
              src='images/Hotel_3.png'
              text='Have Fun Without Breaking the Bank Discover Our Great Deals'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Hotel_4.png'
              text='Have Fun Without Breaking the Bank Discover Our Great Deals'
              
              path='/services'
            />
            <CardItem
              src='images/Hotel_5.png'
              text='Have Fun Without Breaking the Bank Discover Our Great Deals'
             
              path='/products'
            />
            <CardItem
              src='images/Hotel_6.png'
              text='Have Fun Without Breaking the Bank Discover Our Great Deals'
              
              path='/sign-up'
            />
          </ul>
        </div>
      </div>

      <hr></hr>

      <h1>WHY BOOK WITH US</h1>
      <p>
      Bejeweled as one of the finest five-star Sri lanka hotels located in-between Galle Face Green, the World Trade Centre and the Dutch Hospital Precinct, we welcome you to The Kingsbury Hotel in Colombo. With easy access for your shopping, entertainment and business needs, we will ensure your stay is perfect and your experiences are complete.
      </p>
    </div>
  );
}

export default Cards;
