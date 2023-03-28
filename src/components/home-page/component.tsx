import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AsyncPaginate } from "react-select-async-paginate";
import { envVariables } from "../../configs";
import { ThemeColors } from "../../enums/enums";
import { useThemeColor } from "../../features/theme-color";
import { fetchAsyncWeatherForecast, useWeatherForecast } from "../../features/weather-forecast";
import { ThemeChangeButton } from "../theme-change-button";

export const HomePage: FC = () => {
  const { dispatch } = useWeatherForecast();
  const { themeColor } = useThemeColor();
  const [search, setSearch] = useState(null);
  const [className, setClassName] = useState<string>('');
  const navigate = useNavigate();
  const { apiKey, apiLink } = envVariables.weather;

  const handleChange = (searchData: any) => {
    setSearch(searchData);
    dispatch(fetchAsyncWeatherForecast(searchData));
    navigate('/weather-website/forecast');
  }

  const loadOptions = async (value: string, loadedOptions: any) => {
    if (!value) return { options: [] };
    try {
      const response = await fetch(`${apiLink}search.json?key=${apiKey}&q=${value}`);
      const responseJSON = await response.json();
      return { options: responseJSON };
    } catch (error) {
      console.error(error);
      return { options: [] };
    }
  }

  useEffect(() => {
    if(themeColor === ThemeColors.dark) {
      setClassName('dark-search');
    } else {
      setClassName('');
    }
  }, [themeColor]);

  return (
    <>
      <div className='home-page'>
        <ThemeChangeButton />
        <div className='home-page-main'>
          <div className={`main-title-container-${themeColor}`}>
            <h3>What city are you looking for?</h3>
          </div>
          <div className='search-city-container'>
            <AsyncPaginate id='search-input'
              placeholder='Search the city...'
              className={className}
              debounceTimeout={600}
              value={search}
              onChange={handleChange}
              loadOptions={loadOptions}
              getOptionLabel={(option: any) => `${option.name}, ${option.country}`}
              getOptionValue={(option: any) => `${option.lat} ${option.lon}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}