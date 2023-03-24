import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AppDispatch, RootState } from "../../app/store";
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

export const { setError, setWeatherForecast, fetchStarted } = weatherForecastSlice.actions;

export const weatherForecastReducer = weatherForecastSlice.reducer;

export const fetchAsyncWeatherForecast = (searchData: any) => {
  return async (dispatch: AppDispatch) => {
    const { lat, lon } = searchData;
    const location = `${lat},${lon}`;
    const days = process.env.REACT_APP_FORECAST_DAYS;
    try {
      dispatch(fetchStarted());
      const fetchResult = await fetch(`${process.env.REACT_APP_API_LINK}forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`);
      const weatherData = await fetchResult.json();
      dispatch(setWeatherForecast(weatherData));
    } catch (error) {
      dispatch(setError(error));
    }
  }
}