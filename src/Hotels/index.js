import React from "react";
import Hotel from "./Hotel.js"
const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel}/>;

const HotelsList = (props) => {
  if (!props.hotels) {
    return null;
  }
const hotelListElments = props.hotels.map(renderHotel);
  return <ul className="hotels-list">{hotelListElments}</ul>;
};

export default HotelsList;
