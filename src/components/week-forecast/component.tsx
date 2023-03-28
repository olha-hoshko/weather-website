import { FC, useEffect, useRef, useState } from "react";
import { useWeatherForecast } from "../../features/weather-forecast";
import { v4 as uuidv4} from 'uuid';
import { useThemeColor } from "../../features/theme-color/themeColorSlice";
import { ThemeColors } from "../../enums/enums";
import { WeekForecastData } from "../week-forecast-data";

export const WeekForecast: FC = () => {
  const { weatherForecastData } = useWeatherForecast();
  const [weekWeatherForecast, setWeekWeatherForecast] = useState<any>([]);
  const { themeColor } = useThemeColor();
  const titleRef = useRef<HTMLDivElement>(null);
  const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  const getDayOfWeek = (day: string) => {
    const dayFormated = day.split('-').join('/');
    const date = new Date(dayFormated);
    return daysOfWeek[date.getDay()];
  }

  useEffect(() => {
    if (Object.keys(weatherForecastData.forecast).length === 0) {
      setWeekWeatherForecast([]);
    } else {
      setWeekWeatherForecast(weatherForecastData.forecast.forecastday);
    }
  }, [weatherForecastData]);

  useEffect(() => {
    if (!titleRef.current) return;
    if (themeColor === ThemeColors.light) {
      titleRef.current.classList.add('dark-text');
    } else if (titleRef.current.classList.length > 0) {
      titleRef.current.classList.remove('dark-text');
    }
  }, [themeColor]);

  return (
    <div className={`week-forecast ${themeColor}-theme-data-bg`}>
      <div className='week-forecast-title'>
        <p ref={titleRef}>7-day forecast</p>
      </div>

      <div className={`week-forecast-daily week-forecast-daily-${themeColor}`}>
        {
          weekWeatherForecast.map((day: any, index: number) => {
            let dayOfWeek;
            if (index === 0) {
              dayOfWeek = 'today';
            } else {
              dayOfWeek = getDayOfWeek(day.date);
            }
            const condition = day.day.condition.text;
            const maxTemperature = Math.floor(day.day.maxtemp_c);
            const minTemperature = Math.floor(day.day.mintemp_c);
            return <WeekForecastData key={uuidv4()} dayOfWeek={dayOfWeek} condition={condition} maxTemperature={maxTemperature} minTemperature={minTemperature} />
          })
        }
      </div>
    </div>
  );
}