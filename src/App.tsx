import { useEffect, useState } from "react";
import { Header, SearchForm, Weather } from "./components";
import { WeatherResponse } from "./interfaces/weather";

import { getWeather } from "./services/weather.service";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | undefined>();

  useEffect(() => {
    if (city) {
      getWeather(city).then((data) => setWeather(data));
    }
  }, [city]);

  return (
    <div>
      <Header></Header>
      <SearchForm onSubmit={setCity}></SearchForm>
      {weather && <Weather details={weather}></Weather>}
    </div>
  );
}

export default App;
