import './App.css';
import { Header } from './components/header';
import { ThemeChangeButton } from './components/theme-change-button';
import { WeatherData } from './components/weather-data/component';

function App() {
  return (
    <div className='App'>
      <ThemeChangeButton />
      <div className='main-container'>
        <Header />
        <WeatherData />
      </div>
    </div>
  );
}

export default App;
