import React from 'react';
import './Slider.css';

const Slider = (props) => {
  const location = props.location;
  console.log(location.locatonImg);
  console.log('location Data >>>', location);

  return (
    <div className="slider">
        <img src={location.locatonImg} alt="" />
        <h2 className="location__title">{location.locationName}</h2>
    </div>
  );
};

export default Slider;