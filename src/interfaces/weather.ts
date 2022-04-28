declare interface Coordinates {
  lat: number;
  lon: number;
}

declare interface WeatherDetails {
  id: number;
  main: string;
  description: string;
  icon: string;
}

declare interface Wind {
  speed: number;
  deg: number;
}

declare interface System {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

declare interface MainDetails {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export declare interface WeatherResponse {
  coord: Coordinates;
  weather: WeatherDetails[];
  base: string;
  main: MainDetails;
  visibility: number;
  wind: Wind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: System;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
