import { WeatherResponse } from "../interfaces/weather";

export const getWeather = async (city: string): Promise<WeatherResponse> => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => data);
};
