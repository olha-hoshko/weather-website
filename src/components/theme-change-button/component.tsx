import { FC } from 'react';
import { useThemeColor } from '../../features/theme-color/themeColorSlice';
import { DarkThemeIcon, LightThemeIcon } from '../theme-icons';

export const ThemeChangeButton: FC = () => {
  const { changeThemeColor, themeColor } = useThemeColor();

  return (
    <div className='theme-change-button-container'>
      <input type='checkbox' id='toggle-dark' onClick={changeThemeColor} />
      <label htmlFor='toggle-dark' id='toggle-label'>
        <LightThemeIcon currentTheme={themeColor} />
        <DarkThemeIcon currentTheme={themeColor} />
      </label>

      <div className='poweredBy'>
        <span>Powered by </span>
        <a href="https://www.weatherapi.com/" title="Weather API"> WeatherAPI.com</a>
      </div>
    </div>
  );
};