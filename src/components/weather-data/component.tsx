import { FC } from "react";
import { AirConditions } from "../air-conditions/component";
import { CurrentWeather } from "../current-weather/component";
import { TodayForecast } from "../today-forecast/component";
import { WeekForecast } from "../week-forecast/component";

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