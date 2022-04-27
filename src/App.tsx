import React from "react";
import "./App.css";
import { Header, SearchForm, Weather } from "./components";

function App() {
  return (
    <div>
      <Header></Header>
      <SearchForm></SearchForm>
      <Weather></Weather>
    </div>
  );
}

export default App;
