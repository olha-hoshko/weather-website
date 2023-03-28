import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ForecastPage } from './components/forecast-page';
import { HomePage } from './components/home-page';
import { useThemeColor } from './features/theme-color';
import { useEffect } from 'react';
import { ThemeColors } from './enums/enums';

function App() {
  const { themeColor } = useThemeColor();

  useEffect(() => {
    if (themeColor === ThemeColors.dark) {
      document.body.classList.remove('light-bg');
      document.body.classList.add('dark-bg');
    } else {
      document.body.classList.remove('dark-bg');
      document.body.classList.add('light-bg');
    }
  }, [themeColor]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weather-website/*">
          <Route index element={<HomePage />} />
          <Route path="forecast" element={<ForecastPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
