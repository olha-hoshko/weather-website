import { FC } from "react";
import { useThemeColor } from "../../features/theme-color";
import { TodayForecastDataProps } from "./types";

export const TodayForecastData: FC<TodayForecastDataProps> = ({ hour, condition, temperature }) => {
  const {themeColor} = useThemeColor();

  return (
    <div className={`today-forecast-data today-${hour}`}>
      <p className={`${themeColor}-theme-hour`}>{hour}</p>
      <div className='today-weather-icon'>
        <img src={`./images/${condition}.svg`} alt='' />
      </div>
      <p className={`${themeColor}-theme-hour`}>{temperature}</p>
    </div>
  );
}