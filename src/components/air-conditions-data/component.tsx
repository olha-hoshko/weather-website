import { FC } from "react";
import { AirCondition } from "../../enums/enums";
import { useThemeColor } from "../../features/theme-color";
import { useWeatherForecast } from "../../features/weather-forecast";
import { SunIcon, TemperatureIcon, WaterDropIcon, WindIcon } from "../air-conditions-icons";
import { AirConditiomsDataProps } from "./types";

export const AirConditionsData: FC<AirConditiomsDataProps> = ({ name }) => {
  const { weatherForecastData } = useWeatherForecast();
  const { themeColor } = useThemeColor();

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
        return <TemperatureIcon themeColor={themeColor} />;
      case AirCondition.chance_of_rain:
        return <WaterDropIcon themeColor={themeColor} />;
      case AirCondition.wind:
        return <WindIcon themeColor={themeColor} />;
      case AirCondition.uv_index:
        return <SunIcon themeColor={themeColor} />;
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
        {getIcon()}
      </div>
      <div className='air-conditions-data'>
        <p className={`air-conditions-data-title ${themeColor}-theme-hour`}>{title}</p>
        <p className={`air-conditions-data-indicator ${themeColor}-theme-hour`}>{getIndicator()}</p>
      </div>
    </div>
  );
}