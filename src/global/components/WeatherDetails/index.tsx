import drop from "assets/drop.svg";
import rain from "assets/rain.svg";
import sun from "assets/sun.svg";
import thermometer from "assets/thermometer.svg";
import wind from "assets/wind.svg";
import { View } from "react-native";

import * as S from "./styles";
import { WeatherItem } from "../WeatherItem";

export interface WeatherDetailsProps {
  temp_kf: string;
  humidity: string;
  feels_like: string;
  wind_speed: string;
  probability: string;
}

interface IProps {
  data: WeatherDetailsProps;
}

export function WeatherDetails({ data }: IProps) {
  return (
    <S.Container>
      <WeatherItem
        icon={"ThermometerSvg"}
        title="Sensação térmica"
        value={data.feels_like}
      />

      <WeatherItem
        icon={"RainSvg"}
        title="Probabilidade de chuva"
        value={data.probability}
      />

      <WeatherItem
        icon={"WindSvg"}
        title="Velocidade do vento"
        value={data.wind_speed}
      />

      <WeatherItem
        icon={"DropSvg"}
        title="Umidade do ar"
        value={data.humidity}
      />

      <WeatherItem
        icon={"SunSvg"}
        title="Índice UV"
        value={data.temp_kf}
        isLast
      />
    </S.Container>
  );
}
