import { FC } from "react";
import { Header } from "../header";
import { ThemeChangeButton } from "../theme-change-button";
import { WeatherData } from "../weather-data";
import { motion as m } from 'framer-motion';
import { useWeatherForecast } from "../../features/weather-forecast";

export const LoadingSpinner: FC = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}

export const ForecastPage: FC = () => {
  const { isFetching } = useWeatherForecast();

  return (
    <>
      {
        isFetching
          ? <LoadingSpinner />
          : <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }} >
            <div className="App">
              <ThemeChangeButton />
              <div className='main-container'>
                <Header />
                <WeatherData />
              </div>
            </div>
          </m.div>
      }
    </>
  );
}