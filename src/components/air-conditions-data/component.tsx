import { FC } from "react";
import { AirCondition } from "../../enums/enums";
import { useWeatherForecast } from "../../features/weather-forecast";
import { AirConditiomsDataProps } from "./types";

export const AirConditionsData: FC<AirConditiomsDataProps> = ({ name }) => {
  const { weatherForecastData } = useWeatherForecast();

  const title = name.split('-').join(' ');

  const getRealFeel = () => {
    if (Object.keys(weatherForecastData.current).length === 0) return `0°C`;
    return `${weatherForecastData.current.feelslike_c}°C`;
  };

  const getChanceOfRain = () => {
    if (Object.keys(weatherForecastData.current).length === 0) return `0%`;
    const currentChanceOfRain = weatherForecastData.forecast.forecastday[0].hour.filter((hourlyWeather: any) => {
      const lastUpdatedHour = weatherForecastData.current.last_updated.slice(0, -2) + '00';
      return hourlyWeather.time === lastUpdatedHour;
    })[0];
    return `${currentChanceOfRain.chance_of_rain}%`;
  };

  const getWind = () => {
    if (Object.keys(weatherForecastData.current).length === 0) return `0 km/h`;
    return `${weatherForecastData.current.wind_kph} km/h`;
  }

  const getUvIndex = () => {
    if (Object.keys(weatherForecastData.current).length === 0) return 0;
    return weatherForecastData.current.uv;
  }

  const getIcon = () => {
    switch (name) {
      case AirCondition.real_feel:
        return '/images/air-conditions-icons/temperature-icon.svg';
      case AirCondition.chance_of_rain:
        return '/images/air-conditions-icons/water-drop-icon.svg';
      case AirCondition.wind:
        return '/images/air-conditions-icons/wind-icon.svg';
      case AirCondition.uv_index:
        return '/images/air-conditions-icons/sun-icon.svg';
    }
  }

  const getIndicator = () => {
    switch (name) {
      case AirCondition.real_feel:
        return getRealFeel();
      case AirCondition.chance_of_rain:
        return getChanceOfRain();
      case AirCondition.wind:
        return getWind();
      case AirCondition.uv_index:
        return getUvIndex();
    }
  }

  return (
    <div className={name}>
      <div className={`air-conditions-icon ${name}-icon`}>
        <img src={getIcon()} alt='' />
      </div>
      <div className='air-conditions-data'>
        <p className='air-conditions-data-title'>{title}</p>
        <p className='air-conditions-data-indicator'>{getIndicator()}</p>
      </div>
    </div>
  );
}