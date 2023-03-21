import { FC } from "react";
import { TodayForecastDataProps } from "./types";

export const TodayForecastData: FC<TodayForecastDataProps> = ({ hour, condition, temperature }) => {
  return (
    <div className={`today-forecast-data today-${hour}`}>
      <p>{hour}</p>
      <div className='today-weather-icon'>
        <img src={`/images/${condition}.svg`} alt='' />
      </div>
      <p>{temperature}</p>
    </div>
  );
}