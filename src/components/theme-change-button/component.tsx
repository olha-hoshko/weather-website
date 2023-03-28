import { FC, useEffect, useRef } from 'react';
import { ThemeColors } from '../../enums/enums';
import { useThemeColor } from '../../features/theme-color';
import { DarkThemeIcon, LightThemeIcon } from '../theme-icons';

export const ThemeChangeButton: FC = () => {
  const { changeThemeColor, themeColor } = useThemeColor();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(!inputRef.current) return;
    if(themeColor === ThemeColors.dark) {
      inputRef.current.checked = true;
    }
  }, [themeColor]);

  return (
    <div className='theme-change-button-container'>
      <input ref={inputRef} type='checkbox' id='toggle-dark' onClick={changeThemeColor} />
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