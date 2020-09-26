import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './Booking.css'

const Booking = () => {
  const {placeName} = useParams();
  
  const placeDetails = fakeData.find(place => place.location === placeName);


  
  
  return (
    <div className="booking">
      
      <div className="place__details">
        <h2>{placeName}</h2>
            <p>{placeDetails.details}</p>
          </div>
      <div className="booking__form__container">
          <div className="booking__form">
          <form action="">
            <div className="origin">
              <label htmlFor="">Origin</label>
              <input type="text"/>
            </div>
            <div className="destination">
              <label htmlFor="">Destination</label>
              <input type="text" value={placeName}/>
            </div>
            <div className="data__field">
              <div className="from">
                <label htmlFor="">From</label>
                <input type="date"/>
              </div>
              <div className="to">
                <label htmlFor="">To</label>
                <input type="date"/>
              </div>
            </div>
            <Link to="/login"><a href=""><input type="submit" value="Start Booking"/></a></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;