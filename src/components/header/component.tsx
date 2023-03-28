import { FC, useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { ThemeColors } from "../../enums/enums";
import { useThemeColor } from "../../features/theme-color";
import { fetchAsyncWeatherForecast, useWeatherForecast } from "../../features/weather-forecast";
import { envVariables } from '../../configs'

export const Header: FC = () => {
  const { dispatch } = useWeatherForecast();
  const [search, setSearch] = useState(null);
  const { themeColor } = useThemeColor();
  const [className, setClassName] = useState<string>('');
  const { apiKey, apiLink } = envVariables.weather;

  const handleChange = (searchData: any) => {
    setSearch(searchData);
    dispatch(fetchAsyncWeatherForecast(searchData));
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
    if (themeColor === ThemeColors.dark) {
      setClassName('dark-search');
    } else {
      setClassName('');
    }
  }, [themeColor]);

  return (
    <div className='header'>
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
  );
}