import React, { useState } from 'react';
import './HotelInfo.css'

const HotelInfo = (props) => {
  
  const { img,
    description,
    details,
    facility,
    flexibility,
    price, star,
    rating,
    roomSize,
    totalPrice,
    totalRating } = props.location;
  
  return (
    <div className="hotelInfo">
    <div className="hotelInfo__img">
      <img src={img} alt=""/>
      
    </div>
    <div className="hotelInfo__desc">
      <h4>{description}</h4>
      <p>{roomSize}</p>
      <p>{facility}</p>
      <p>{flexibility}</p>
      <div className="price">
        <img src={star} alt="" />
        <p>(<span>{totalRating}</span>)</p>
        <p className="single__price">${price}/night</p>
        <p>${totalPrice}/ total</p>
      </div>
    </div>
  </div>
  );
};

export default HotelInfo;