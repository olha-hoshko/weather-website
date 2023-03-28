import { FC } from "react";
import { AirCondition } from "../../enums/enums";
import { useThemeColor } from "../../features/theme-color";
import { useWeatherForecast } from "../../features/weather-forecast";
import { AirConditiomsDataProps, IconProps } from "./types";

const TemperatureIcon: FC<IconProps> = ({ themeColor }) => {
  return (
    <svg className={`${themeColor}-air-condition-icon`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 511.973 511.973" xmlSpace="preserve">
      <g>
        <g>
          <g>
            <path d="M341.318,288.572V85.333C341.318,38.202,303.116,0,255.985,0c-47.116,0-85.333,38.208-85.333,85.333v203.26
				c-26.828,23.98-42.667,58.4-42.667,95.407c0,81.033,74.209,142.058,155.311,125.14c49.838-10.379,89.466-51.228,98.555-101.412
				C390.081,362.227,374.111,317.865,341.318,288.572z M339.867,400.128c-5.996,33.108-32.486,60.414-65.277,67.242
				c-54.496,11.368-103.939-29.29-103.939-83.371c0-27.206,12.799-52.257,34.138-68.27l8.529-6.4V85.333
				c0-23.559,19.112-42.667,42.667-42.667c23.567,0,42.667,19.099,42.667,42.667v226.518l10.046,5.023
				C333.427,336.311,345.752,367.591,339.867,400.128z"/>
            <path d="M277.327,347.045V191.994c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333v155.051
				c-12.752,7.376-21.333,21.151-21.333,36.949c0,23.573,19.093,42.667,42.667,42.667c23.573,0,42.667-19.093,42.667-42.667
				C298.66,368.196,290.078,354.42,277.327,347.045z"/>
          </g>
        </g>
      </g>
    </svg>
  );
}

const WaterDropIcon: FC<IconProps> = ({ themeColor }) => {
  return (
    <svg className={`${themeColor}-air-condition-icon`} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 25.906 25.906" xmlSpace="preserve">
      <g>
        <path d="M12.953,0c0,0-9,10.906-9,16.906c0,4.971,4.029,9,9,9s9-4.029,9-9C21.953,10.906,12.953,0,12.953,0z
		 M9.026,17.496c0,1.426,0.668,4.25,1.134,5.426c-3.042-1.494-3.846-4.425-3.846-6.463c0-3.173,3.684-7.824,5.777-12.149
		C11.861,6.581,9.026,13.177,9.026,17.496z"/>
      </g>
    </svg>
  );
}

const WindIcon: FC<IconProps> = ({ themeColor }) => {
  return (
    <svg className={`${themeColor}-air-condition-icon`} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>wind</title>
      <path d="M13 11.261c0.038 0 0.070-0.018 0.107-0.021 2.849-0.061 5.136-2.386 5.136-5.244 0-2.897-2.348-5.245-5.245-5.245-2.404 0-4.43 1.617-5.050 3.823l-0.009 0.037-0.012 0.025c-0.115 0.411-0.181 0.883-0.182 1.371v0c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0c0-0.254 0.035-0.499 0.099-0.732l-0.005 0.019 0.006-0.012c0.327-1.18 1.391-2.032 2.655-2.032 1.519 0 2.75 1.231 2.75 2.75s-1.231 2.75-2.75 2.75h-0c-0.019 0-0.034 0.010-0.053 0.011l-10.932-0.011c-0 0-0 0-0 0-0.69 0-1.25 0.56-1.25 1.25s0.559 1.25 1.249 1.25l10.985 0.011zM24.469 4.869c-3.106 0.004-5.723 2.093-6.527 4.942l-0.012 0.048-0.013 0.026c-0.149 0.53-0.235 1.139-0.235 1.768 0 0.002 0 0.003 0 0.005v-0c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0c0-0.002 0-0.005 0-0.007 0-0.393 0.054-0.774 0.155-1.135l-0.007 0.030 0.007-0.013c0.509-1.837 2.166-3.163 4.133-3.163 2.364 0 4.281 1.917 4.281 4.281s-1.917 4.281-4.281 4.281v0c-0.026 0-0.047 0.013-0.072 0.015l-20.34-0.020c-0.689 0.003-1.246 0.561-1.246 1.25s0.557 1.247 1.245 1.25l20.413 0.020c0.053-0.008 0.099-0.017 0.144-0.029l-0.008 0.002c3.685-0.073 6.644-3.078 6.644-6.774 0-3.742-3.033-6.775-6.775-6.775-0.002 0-0.004 0-0.006 0h0zM22.718 19.309c-0.031-0.008-0.070-0.017-0.11-0.023l-0.006-0.001-18.546 0.018c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25c0 0 0 0 0.001 0l18.487-0.018c0.020 0.001 0.037 0.012 0.058 0.012 1.902 0 3.443 1.542 3.443 3.443s-1.542 3.443-3.443 3.443c-1.582 0-2.915-1.067-3.318-2.521l-0.006-0.024-0.007-0.015c-0.074-0.267-0.117-0.573-0.118-0.89v-0c0-0.002 0-0.003 0-0.005 0-0.69-0.559-1.25-1.25-1.25s-1.25 0.559-1.25 1.25c0 0.002 0 0.003 0 0.005v-0c0 0.002 0 0.005 0 0.007 0 0.55 0.075 1.082 0.214 1.587l-0.010-0.042c0.005 0.017 0.016 0.029 0.021 0.045 0.717 2.533 3.009 4.357 5.726 4.357 3.281 0 5.941-2.66 5.941-5.941 0-3.241-2.595-5.876-5.821-5.94l-0.006-0z"></path>
    </svg>
  );
}

const SunIcon: FC<IconProps> = ({ themeColor }) => {
  return (
    <svg className={`${themeColor}-air-condition-icon`} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512" xmlSpace="preserve">
      <g>
        <path className="st0" d="M255.996,127.577c-70.925,0-128.42,57.495-128.42,128.42c0,70.933,57.496,128.428,128.42,128.428
		s128.428-57.495,128.428-128.428C384.424,185.072,326.921,127.577,255.996,127.577z"/>
        <path className="st0" d="M512,255.996c-78.109-49.042-98.052-93.51-75.065-180.932c-87.414,22.995-131.89,3.036-180.939-75.057
		c-49.042,78.093-93.51,98.052-180.932,75.057C98.06,162.487,78.109,206.954,0,255.996c78.109,49.049,98.06,93.525,75.065,180.939
		c87.422-22.987,131.89-3.036,180.932,75.057c49.049-78.093,93.525-98.044,180.939-75.057
		C413.948,349.522,433.891,305.046,512,255.996z M255.996,423.766c-92.666,0-167.762-75.112-167.762-167.77
		c0-92.65,75.096-167.762,167.762-167.762c92.65,0,167.769,75.112,167.769,167.762C423.766,348.654,348.646,423.766,255.996,423.766
		z"/>
      </g>
    </svg>
  );
}

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