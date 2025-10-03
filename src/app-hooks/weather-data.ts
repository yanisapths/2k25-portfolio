"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherApi } from "openmeteo";

const params = {
  latitude: 18.2923,
  longitude: 99.4928,
  hourly: "temperature_2m",
  current: ["temperature_2m", "rain", "weather_code"],
  timezone: "Asia/Bangkok",
  forecast_days: 1,
  timeformat: "unixtime",
};

const url = "https://api.open-meteo.com/v1/forecast";

export const useCurrentWeatherData = () => {
  const weather = useQuery({
    queryKey: ["weather-data"],
    queryFn: async () => {
      const responses = await fetchWeatherApi(url, params);
      const response = responses[0];

      const timezone = response.timezone();
      const timezoneAbbreviation = response.timezoneAbbreviation();

      // Extract current weather data
      const current = response.current();
      let currentWeather = null;
      if (current) {
        currentWeather = {
          time: new Date(Number(current.time()) * 1000),
          temperature2m: current.variables(0)?.value(),
          rain: current.variables(1)?.value(),
          weatherCode: current.variables(2)?.value(),
        };
      }

      return { current: currentWeather, timezone, timezoneAbbreviation };
    },
  });

  return { weather };
};
