import { View } from "react-native";
import { SvgProps } from "react-native-svg";

import Rain from "assets/cloud-rain-light.svg";
import Drop from "assets/drop-light.svg";
import Sun from "assets/sun-dim-light.svg";
import Thermometer from "assets/thermometer-simple-light.svg";
import Wind from "assets/wind-light.svg";

import Text from "../Text";

import * as S from "./styles";

const SvgType = {
  DropSvg: { component: Drop, width: 24, height: 24 },
  RainSvg: { component: Rain, width: 24, height: 24 },
  SunSvg: { component: Sun, width: 24, height: 24 },
  ThermometerSvg: { component: Thermometer, width: 24, height: 24 },
  WindSvg: { component: Wind, width: 24, height: 24 },
};

interface IProps {
  icon?: "DropSvg" | "RainSvg" | "SunSvg" | "ThermometerSvg" | "WindSvg";
  title: string;
  value: string;
  isLast?: boolean;
}

export function WeatherItem({ icon, title, value, isLast = false }: IProps) {
  const { component: SvgComponent, width, height } = SvgType[icon || "DropSvg"];

  return (
    <S.Container isLast={isLast}>
      <S.View>
        <SvgComponent width={width} height={height} />

        <Text
          variant="Inter_700Bold"
          color="GRAY_200"
          fontSize={14}
          marginLeft="md"
        >
          {title}
        </Text>
      </S.View>

      <Text variant="Inter_700Bold" color="GRAY_100" fontSize={16}>
        {value}
      </Text>
    </S.Container>
  );
}
