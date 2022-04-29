import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders weather", () => {
    render(<App />);
    const weather = screen.getByText(/weather/i);
    expect(weather).toBeInTheDocument();
  });
});
