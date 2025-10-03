import {
  Sun,
  Cloud,
  CloudFog,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
} from "lucide-react";
import { JSX } from "react";

export const weatherCodeDescriptions: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

// Icon mapping
const weatherIcons: Record<number, JSX.Element> = {
  0: <Sun color="white" />, // Clear sky
  1: <Sun color="white" />, // Mainly clear
  2: <Cloud color="white" />, // Partly cloudy
  3: <Cloud color="white" />, // Overcast
  45: <CloudFog color="white" />,
  48: <CloudFog color="white" />,
  51: <CloudDrizzle color="white" />,
  53: <CloudDrizzle color="white" />,
  55: <CloudDrizzle color="white" />,
  56: <CloudDrizzle color="white" />,
  57: <CloudDrizzle color="white" />,
  61: <CloudRain color="white" />,
  63: <CloudRain color="white" />,
  65: <CloudRain color="white" />,
  66: <CloudRain color="white" />,
  67: <CloudRain color="white" />,
  71: <CloudSnow color="white" />,
  73: <CloudSnow color="white" />,
  75: <CloudSnow color="white" />,
  77: <CloudSnow color="white" />,
  80: <CloudRain color="white" />,
  81: <CloudRain color="white" />,
  82: <CloudRain color="white" />,
  85: <CloudSnow color="white" />,
  86: <CloudSnow color="white" />,
  95: <CloudLightning color="white" />,
  96: <CloudLightning color="white" />,
  99: <CloudLightning color="white" />,
};

type WeatherProps = {
  weatherCode: number;
};

export function Weather({ weatherCode }: WeatherProps) {
  const weatherCondition =
    weatherCode !== undefined
      ? weatherCodeDescriptions[weatherCode] || "--"
      : "--";

  const icon =
    weatherCode !== undefined ? (
      weatherIcons[weatherCode]
    ) : (
      <Cloud color="white" />
    );

  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{weatherCondition}</span>
    </div>
  );
}
