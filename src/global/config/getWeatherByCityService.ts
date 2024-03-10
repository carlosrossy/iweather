import { WeatherTodayProps } from "@global/components/WeatherToday";
import {
  WeatherIconsKeysProps,
  weatherIcons,
} from "@global/utils/weatherIcons";
import api from "./api";
import { API_KEY } from "./getCityByNameService";
import { DayProps } from "@global/components/Day";
import { WeatherDetailsProps } from "@global/components/WeatherDetails";
import { getNextDays } from "@global/utils/getNextDay";
import { DateTime } from "luxon";

export interface WeatherAPIResponseProps {
  list: {
    pop: number;
    dt_txt: string;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
      humidity: number;
      temp_kf: number;
    };
    wind: {
      speed: number;
    };
    weather: {
      description: string;
      main: WeatherIconsKeysProps;
    }[];
  }[];
}

export type WeatherResponseProps = {
  today: {
    weather: WeatherTodayProps;
    details: WeatherDetailsProps;
  };
  nextDays: DayProps[];
};

export async function getWeatherByCityService(
  latitude: number,
  longitude: number
): Promise<WeatherResponseProps> {
  const { data } = await api.get<WeatherAPIResponseProps>(
    `/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  );
  const { main, weather, wind, pop } = data.list[0];

  const today = {
    weather: {
      temp: `${Math.ceil(main.temp)}ºc`,
      temp_min: `${Math.floor(main.temp_min)}ºc`,
      temp_max: `${Math.ceil(main.temp_max)}ºc`,
      description: weather[0].description,
      details: weatherIcons[weather[0].main],
    },
    details: {
      feels_like: `${Math.floor(main.feels_like)}ºc`,
      probability: `${Math.ceil(pop * 100)}%`,
      wind_speed: `${wind.speed}km/h`,
      humidity: `${main.humidity}%`,
      temp_kf: `${Math.floor(main.temp_kf)}`,
    },
  };

  const days = getNextDays();
  const daysAdded: string[] = [];
  const nextDays: DayProps[] = [];

  data.list.forEach((item) => {
    const dateTime = DateTime.fromFormat(item.dt_txt, "yyyy-MM-dd HH:mm:ss");
    const day = dateTime.toFormat("dd/MM");
    const formattedDayOfWeek = dateTime.toFormat("EEE");

    if (days.includes(day) && !daysAdded.includes(day)) {
      daysAdded.push(day);

      const status: WeatherIconsKeysProps = item.weather[0].main;

      const details = weatherIcons[status];

      nextDays.push({
        day: formattedDayOfWeek,
        min: `${Math.floor(item.main.temp_min)}ºc`,
        max: `${Math.ceil(item.main.temp_max)}ºc`,
        weather: item.weather[0].description,
        icon: details.icon_day,
      });
    }
  });

  return { today, nextDays };
}
