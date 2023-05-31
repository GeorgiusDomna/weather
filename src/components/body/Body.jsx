import React, { useState } from "react";
import WeatherBlock from "../weatherBlock/WeatherBlock";
import s from './weatherBody.module.sass';

const apiKey = 'd0fb83e2813e41a78f3191552232705';

const Body = ({inputSearch}) => {

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
          windDir: data.current.wind_dir,
          windSpeed: data.current.wind_kph,
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

  if (error) {return <div className={s.weather}>{error}</div>}
  return (
    
    <div className={s.weather}>

        <div className={s.location}>
          <div className={s.cityName}>{weatherData.name}</div>
          <div className={s.countryName}>{weatherData.country}</div>
        </div>
        <div className={s.localtime}>{weatherData.localtime}</div>


        <div className={s.body}>
          <div className={s.row}>
            <WeatherBlock title={'Температура (С)'} data={weatherData.temp} />
            <WeatherBlock title={'Давление (мб)'} data={weatherData.pressure} />
          </div>

          <div className={s.row}>
            <WeatherBlock title={'Влажность (%)'} data={weatherData.humidity} />
            <WeatherBlock title={'Количество осадков (мм)'} data={weatherData.precip} />
          </div>

          <div className={s.row}>
            <WeatherBlock title={'Направление ветра'} data={weatherData.windDir} />
            <WeatherBlock title={'Скорость ветра (км/ч)'} data={weatherData.windSpeed} />
            <WeatherBlock title={'Порывы ветра (км/ч)'} data={weatherData.windGust} />
          </div>

          <div className={s.row}>
            <WeatherBlock title={'Облачность (%)'} data={weatherData.cloud} />
            <WeatherBlock title={'Видимость (км)'} data={weatherData.vis} />
          </div>
        </div>

    </div>
  );
}

export default Body;