import React, { useState } from "react";
import WeatherItem from "./weatherItem/WeatherItem";
import './style.css';

const apiKey = 'd0fb83e2813e41a78f3191552232705';

const WeatherBody = ({inputSearch}) => {

  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState({
    country: null,
    name: null,
    localtime: null,
    temp: null,
    pressure: null,
    humidity: null,
    precip: null,
    windDir: null,
    windSpeed: null,
    windGust: null,
    cloud: null,
    vis: null
  });

  if (inputSearch) {
    const fetchData = async () => {
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputSearch}&aqi=no`
      
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error('sorry, something went wrong(');
        }
        let data = await response.json();
        setWeatherData({
          country: data.location.country,
          name: data.location.name,
          localtime: data.location.localtime.split('-').join('/'),
          temp: data.current.temp_c,
          pressure: data.current.pressure_mb,
          humidity: data.current.humidity,
          precip: data.current.precip_mm,
          windDir: data.current.wind_kph,
          windSpeed: data.current.wind_dir,
          windGust: data.current.gust_kph,
          cloud: data.current.cloud,
          vis: data.current.vis_km
        })
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }

  if (error) {return <div className="weather">{error}</div>}
  return (
    
    <div className="weather">

        <div className="location">
          <div className="cityName">{weatherData.name}</div>
          <div className="countryName">{weatherData.country}</div>
        </div>
        <div className="localtime">{weatherData.localtime}</div>


        <div className="weather-body">
          <div className="weather-row">
            <WeatherItem title={'Температура (С)'} data={weatherData.temp} />
            <WeatherItem title={'Даваление (мб)'} data={weatherData.pressure} />
          </div>

          <div className="weather-row">
            <WeatherItem title={'Влажность (%)'} data={weatherData.humidity} />
            <WeatherItem title={'Количество осадков (мм)'} data={weatherData.precip} />
          </div>

          <div className="weather-row">
            <WeatherItem title={'Направление ветра'} data={weatherData.windDir} />
            <WeatherItem title={'Скорость ветра (км/ч)'} data={weatherData.windSpeed} />
            <WeatherItem title={'Порывы ветра до (км/ч)'} data={weatherData.windGust} />
          </div>

          <div className="weather-row">
            <WeatherItem title={'Облачность (%)'} data={weatherData.cloud} />
            <WeatherItem title={'Видимость (км)'} data={weatherData.vis} />
          </div>
        </div>

    </div>
  );
}

export default WeatherBody;