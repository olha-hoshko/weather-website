import { FC } from "react";
import { useThemeColor } from "../../features/theme-color/themeColorSlice";
import { useWeatherForecast } from "../../features/weather-forecast";

export const CurrentWeather: FC = () => {
  const { weatherForecastData } = useWeatherForecast();
  const { themeColor } = useThemeColor();
  const getCity = () => {
    if (Object.keys(weatherForecastData.location).length === 0) return '___';
    return `${weatherForecastData.location.name}, ${weatherForecastData.location.country}`;
  }

  const getMainIcon = () => {
    const defaultIcon = './images/Sunny.svg';
    if (Object.keys(weatherForecastData.current).length === 0) return defaultIcon;
    const currentCondition = weatherForecastData.current.condition.text;
    const iconLink = `./images/${currentCondition}.svg`;
    return iconLink;
  }

  const getChanceOfRain = () => {
    if (Object.keys(weatherForecastData.current).length === 0) return `___`;
    return weatherForecastData.current.condition.text;
  };

  const getTemperature = () => {
    if (Object.keys(weatherForecastData.current).length === 0) return '0°C';
    return `${weatherForecastData.current.temp_c}°C`;
  }

  return (
    <div className='current-weather'>
      <div className='current-weather-data'>
        <div className='current-weather-city'>
          <h2 className={`${themeColor}-theme-text`}>{getCity()}</h2>
          <p className={`${themeColor}-theme-text-small`}>{getChanceOfRain()}</p>
        </div>

        <div className='current-weather-temperature'>
          <p className={`${themeColor}-theme-text`}>{getTemperature()}</p>
        </div>
      </div>

      <div className='current-weather-pic'>
        <img src={getMainIcon()} alt="Current weather" />
      </div>
    </div>
  );
}