import { FC, useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { ThemeColors } from "../../enums/enums";
import { useThemeColor } from "../../features/theme-color/themeColorSlice";
import { fetchAsyncWeatherForecast, useWeatherForecast } from "../../features/weather-forecast";

export const Header: FC = () => {
  const { dispatch } = useWeatherForecast();
  const [search, setSearch] = useState(null);
  const { themeColor } = useThemeColor();
  const [className, setClassName] = useState<string>('');

  const handleChange = (searchData: any) => {
    setSearch(searchData);
    dispatch(fetchAsyncWeatherForecast(searchData));
  }

  const loadOptions = async (value: string, loadedOptions: any) => {
    if (!value) return { options: [] };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_LINK}search.json?key=${process.env.REACT_APP_API_KEY}&q=${value}`);
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