import { useState } from "react";
import { Header, SearchForm, Weather } from "./components";

function App() {
  const [city, setCity] = useState("");
  return (
    <div>
      <Header></Header>
      <SearchForm onSubmit={setCity}></SearchForm>
      <Weather city={city}></Weather>
    </div>
  );
}

export default App;
