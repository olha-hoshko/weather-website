import { FC } from "react";
import { AirConditions } from "../air-conditions";
import { CurrentWeather } from "../current-weather";
import { TodayForecast } from "../today-forecast";
import { WeekForecast } from "../week-forecast";

export const WeatherData: FC = () => {
  return (
    <div className='weather-data-container'>
      <div className='weather-today-container'>
        <div className='weather-today-container-inner'>
          <CurrentWeather />
          <TodayForecast />
          <AirConditions />
        </div>
      </div>
      <div className='weather-week-container'>
        <WeekForecast />
      </div>
    </div>
  );
}