import { FC, useEffect, useState } from "react";
import { useWeatherForecast } from "../../features/weather-forecast";
import { v4 as uuidv4 } from 'uuid';
import { TodayForecastData } from "../today-forecast-data";

export const TodayForecast: FC = () => {
  const { weatherForecastData } = useWeatherForecast();
  const [todayForecastData, setTodayForecastData] = useState<any>({ hour: [] });

  const hoursToShow = ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

  useEffect(() => {
    if (Object.keys(weatherForecastData.forecast).length === 0) {
      setTodayForecastData({ hour: [] });
    } else {
      setTodayForecastData(weatherForecastData.forecast.forecastday[0]);
    }
  }, [weatherForecastData]);

  return (
    <div className='today-forecast'>
      <div className='today-forecast-title'>
        <p>today's forecast</p>
      </div>
      <div className='today-forecast-hourly'>
        {
          todayForecastData.hour.map((data: any) => {
            const dataHours = data.time.slice(-5);
            if (hoursToShow.includes(dataHours)) {
              return <TodayForecastData key={uuidv4()} hour={dataHours} condition={data.condition.text} temperature={`${data.temp_c}°C`} />
            }
          })
        }
      </div>
    </div>
  );
}