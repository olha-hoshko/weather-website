import { FC, useEffect, useState } from "react";
import { useWeatherForecast } from "../../features/weather-forecast";
import { v4 as uuidv4} from 'uuid';

export type WeekForecastDataProps = {
  dayOfWeek: string,
  condition: string,
  maxTemperature: number,
  minTemperature: number,
}

export const WeekForecastData: FC<WeekForecastDataProps> = ({ dayOfWeek, condition, maxTemperature, minTemperature }) => {
  return (
    <div className={`week-forecast-data ${dayOfWeek}`}>
      <p className='day-of-week'>{dayOfWeek}</p>
      <div className='week-forecast-weather-container'>
        <div className='week-forecast-weather-icon'>
          <img src={`/images/${condition}.svg`} alt='' />
        </div>
        <p className='week-forecast-weather'>{condition}</p>
      </div>
      <div className='temperature-limits'>
        <span className='temperature-limits-day'>{maxTemperature}°C</span>
        <span className='temperature-limits-night'>&nbsp;/ {minTemperature}°C</span>
      </div>
    </div>
  );
}

export const WeekForecast: FC = () => {
  const { weatherForecastData } = useWeatherForecast();
  const [weekWeatherForecast, setWeekWeatherForecast] = useState<any>([]);
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
  }, [weatherForecastData])

  return (
    <div className='week-forecast'>
      <div className='week-forecast-title'>
        <p>7-day forecast</p>
      </div>

      <div className='week-forecast-daily'>
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