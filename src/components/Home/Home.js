import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css';
import fakeData from '../../fakeData';
import Slider from '../Slider/Slider';


const Home = () => {
  const [location, setLocation] = useState(fakeData);
  return (
    <div className="home">
      <Header></Header>

      <div className="slider__card">
        {
          location.map(location => <Slider location={location}></Slider> )
        }
      </div>
    </div>
  );
};

export default Home;