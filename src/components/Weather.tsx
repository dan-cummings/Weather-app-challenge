import { WeatherResponse } from "../interfaces/weather";
import "./Weather.css";

export declare interface WeatherProps {
  details: WeatherResponse;
}

export const Weather = (props: WeatherProps) => {
  const { details } = props;

  return (
    <div className="weather">
      <h2>{details.name}</h2>
      <div className="weather__description">
        Description: {details.weather[0].description}
      </div>
      <div className="weather__temperature">
        Current temp: {details.main.temp}
      </div>
      <div className="weather__feels-like">
        Feels like: {details.main.feels_like}
      </div>
      <div className="weather__wind-speed">
        Wind speed: {details.wind.speed}
      </div>
    </div>
  );
};
