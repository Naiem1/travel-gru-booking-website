import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css';
import fakeData from '../../fakeData';
import Slider from '../Slider/Slider';


const Home = () => {
  // const data = fakeData.map(value => {
  //   return value.features.filter(info => info.price)
    
  // })

  // console.log(data);
  
  
  const [location, setLocation] = useState(fakeData);
  return (
    <div className="home">

      <div className="slider__card">
        {
          location.map(location => <Slider location={location}></Slider> )
        }
      </div>
    </div>
  );
};

export default Home;