import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AppDispatch, RootState } from "../../app/store";
import { envVariables } from "../../configs";
import { WeatherForecastProps } from "./types";

const initialState: WeatherForecastProps = {
  isFetching: false,
  'value': {
    'location': {},
    'current': {},
    'forecast': {},
  },
  error: null,
}

export const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: {
    fetchStarted: (state: WeatherForecastProps) => {
      state.isFetching = true;
    },

    setWeatherForecast: (state: WeatherForecastProps, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.value = Object.assign(state.value, action.payload);
    },

    setError: (state: WeatherForecastProps, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.error = action.payload;
      state.value = {
        'location': {},
        'current': {},
        'forecast': {},
      };
    },
  }
});

export const useWeatherForecast = () => {
  const weatherForecastData = useAppSelector((state: RootState) => state.weatherForecast.value);
  const isFetching = useAppSelector((state: RootState) => state.weatherForecast.isFetching);
  const dispatch = useAppDispatch();

  return {
    weatherForecastData,
    isFetching,
    dispatch,
  };
}

export const weatherForecastReducer = weatherForecastSlice.reducer;

export const { setError, setWeatherForecast, fetchStarted } = weatherForecastSlice.actions;

export const fetchAsyncWeatherForecast = (searchData: any) => {
  return async (dispatch: AppDispatch) => {
    const { apiKey, apiLink, forecastDays } = envVariables.weather;
    const { lat, lon } = searchData;
    const location = `${lat},${lon}`;
    try {
      dispatch(fetchStarted());
      const fetchResult = await fetch(`${apiLink}forecast.json?key=${apiKey}&q=${location}&days=${forecastDays}&aqi=no&alerts=no`);
      const weatherData = await fetchResult.json();
      dispatch(setWeatherForecast(weatherData));
    } catch (error) {
      dispatch(setError(error));
    }
  }
}