import { FC } from "react";
import { useThemeColor } from "../../features/theme-color/themeColorSlice";
import { WeekForecastDataProps } from "./types";

export const WeekForecastData: FC<WeekForecastDataProps> = ({ dayOfWeek, condition, maxTemperature, minTemperature }) => {
  const { themeColor } = useThemeColor();

  return (
    <div className={`week-forecast-data ${dayOfWeek}`}>
      <p className={`day-of-week ${themeColor}-theme-side-text`}>{dayOfWeek}</p>
      <div className='week-forecast-weather-container'>
        <div className='week-forecast-weather-icon'>
          <img src={`./images/${condition}.svg`} alt='' />
        </div>
        <p className={`week-forecast-weather ${themeColor}-theme-hour`}>{condition}</p>
      </div>
      <div className='temperature-limits'>
        <span className={`temperature-limits-day ${themeColor}-theme-hour`}>{maxTemperature}°C</span>
        <span className={`temperature-limits-night ${themeColor}-theme-side-text`}>&nbsp;/ {minTemperature}°C</span>
      </div>
    </div>
  );
}