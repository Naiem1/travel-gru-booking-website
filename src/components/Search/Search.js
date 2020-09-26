import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import HotelInfo from '../HotelInfo/HotelInfo';

const Search = () => {
  
  
  const [hotelInfo, setHotelInfo] = useState(fakeData);

  
  return (
    <div className="search">
      <div className="hotel__info">
     

      { 
        hotelInfo.map(location => <HotelInfo location={location}></HotelInfo>)
      }
      </div>
      <div className="map">
      
      </div>
    </div>
  );
};

export default Search;