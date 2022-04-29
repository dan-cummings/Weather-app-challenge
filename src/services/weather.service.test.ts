import { getWeather } from "./weather.service";

describe("WeatherService", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));
  test("should return weather data", async () => {
    const city = "London";

    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, name: city }),
    });

    const weatherData = await getWeather(city);
    expect(weatherData.name).toBe(city);
  });

  test("should return error", async () => {
    const city = "London";

    window.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ success: false }),
    });

    const weatherData = await getWeather(city);
    expect(weatherData.name).toBeFalsy();
  });
});
