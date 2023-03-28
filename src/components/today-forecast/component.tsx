import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useWeatherForecast } from "../../features/weather-forecast";
import { v4 as uuidv4 } from 'uuid';
import { TodayForecastData } from "../today-forecast-data";
import { useThemeColor } from "../../features/theme-color/themeColorSlice";
import { ThemeColors } from "../../enums/enums";

const hoursDesktop = ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
const hoursMobile = ['09:00', '15:00', '21:00'];

const useWindowSize = () => {
  const [width, setWidth] = useState<number>(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return width;
}

export const TodayForecast: FC = () => {
  const { weatherForecastData } = useWeatherForecast();
  const [todayForecastData, setTodayForecastData] = useState<any>({ hour: [] });
  const windowWidth = useWindowSize();
  const { themeColor } = useThemeColor();
  const titleRef = useRef<HTMLDivElement>(null);

  const getHoursToShow = () => {
    if (windowWidth > 768) {
      return hoursDesktop;
    }
    return hoursMobile;
  }

  const hoursToShow = getHoursToShow();

  useEffect(() => {
    if (Object.keys(weatherForecastData.forecast).length === 0) {
      setTodayForecastData({ hour: [] });
    } else {
      setTodayForecastData(weatherForecastData.forecast.forecastday[0]);
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
    <div className={`today-forecast ${themeColor}-theme-data-bg`}>
      <div className='today-forecast-title'>
        <p ref={titleRef}>today's forecast</p>
      </div>
      <div className={`today-forecast-hourly today-forecast-hourly-${themeColor}`}>
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