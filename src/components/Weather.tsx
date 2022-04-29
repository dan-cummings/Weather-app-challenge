import { WeatherResponse } from "../interfaces/weather";
import "./Weather.css";

export declare interface WeatherProps {
  details: WeatherResponse;
}

const toImperialTemp = (value: number): string => {
  return `${((value - 273.15) * 1.8 + 32).toFixed(1)}°F`;
};

const toImperialSpeed = (value: number): string => {
  return `${(value * 2.237).toFixed(1)} mph`;
};

export const Weather = (props: WeatherProps) => {
  const { details } = props;

  return (
    <div className="weather">
      <div className="weather-card">
        <div className="weather-card-header">
          <h2>{details.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
            alt="current weather icon"
          ></img>
        </div>
        <div className="weather-description">
          Description: {details.weather[0].description}
        </div>
        <div className="weather-temperature">
          Current temp: {toImperialTemp(details.main.temp)}
        </div>
        <div className="weather-feels-like">
          Feels like: {toImperialTemp(details.main.feels_like)}
        </div>
        <div className="weather-wind-speed">
          Wind speed: {toImperialSpeed(details.wind.speed)}
        </div>
      </div>
    </div>
  );
};
