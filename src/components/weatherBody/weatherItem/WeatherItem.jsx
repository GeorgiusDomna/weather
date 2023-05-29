import React from "react";
import './style.css';

const WeatherItem = ({title, data}) => {
  return (
    <div className="weather-block">
      <h2 className="weather-block_title">{title}</h2>
      <div className="weather-block_text">{data ? data : '-'}</div>
    </div>
  );
}
 
export default WeatherItem;