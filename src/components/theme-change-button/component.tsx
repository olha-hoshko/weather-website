import { FC, useState } from 'react';
import { ThemeChangeButtonIcons } from '../../enums/enums';
import { DarkThemeIcon, LightThemeIcon } from '../theme-icons';

export const ThemeChangeButton: FC = () => {
  //const {currentTheme} = useThemeContext();
  const [theme, setTheme] = useState<ThemeChangeButtonIcons>(ThemeChangeButtonIcons.light);

  const handleClick = () => {
    setTheme(theme === ThemeChangeButtonIcons.dark ? ThemeChangeButtonIcons.light : ThemeChangeButtonIcons.dark);
  }

  return (
    <div className='theme-change-button-container'>
      <input type='checkbox' id='toggle-dark' onClick={handleClick} />
      <label htmlFor='toggle-dark' id='toggle-label'>
        <LightThemeIcon currentTheme={theme} />
        <DarkThemeIcon currentTheme={theme} />
      </label>

      <div className='poweredBy'>
        <span>Powered by </span>
        <a href="https://www.weatherapi.com/" title="Weather API"> WeatherAPI.com</a>
      </div>
    </div>
  );
};