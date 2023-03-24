import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ForecastPage } from './components/forecast-page';
import { HomePage } from './components/home-page';

function App() {
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
