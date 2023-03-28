import { configureStore } from '@reduxjs/toolkit';
import { themeColorReducer } from '../features/theme-color/themeColorSlice';
import { weatherForecastReducer } from '../features/weather-forecast';

export const store = configureStore({
  reducer: {
    weatherForecast: weatherForecastReducer,
    themeColor: themeColorReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;