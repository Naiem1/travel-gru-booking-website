import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';

const Slider = (props) => {
  
  const{ locationName, location, locationImg} = props.location;

  return (
    <div className="slider">
    
      <Link to={"/booking/" + location}>
        <img src={locationImg} alt="" />
        <h2 className="location__title">{locationName}</h2>
      </Link>
    </div>
  );
};

export default Slider;