import { DateTime } from "luxon";
import { isDayTime } from "@global/utils/isDayTime";

import { ImageBackground, View } from "react-native";
import Text from "../Text";

import * as S from "./styles";
import { weatherIcons } from "@global/utils/weatherIcons";
import { Spacer } from "../Spacer";

export type WeatherTodayProps = {
  temp: string;
  temp_min: string;
  temp_max: string;
  description: string;
  details: typeof weatherIcons.Clouds;
};

type Props = {
  city: string;
  weather: WeatherTodayProps;
};

export function WeatherToday({ weather, city }: Props) {
  const today = DateTime.local()
    .setLocale("pt-BR")
    .toFormat("cccc, dd 'de' MMMM 'de' yyyy");
  const isDay = isDayTime();

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night;
  const IconComponent = isDay
    ? weather.details?.icon_day
    : weather.details?.icon_night;

  return (
    <S.Container>
      <S.Image source={bgImg} />
      <View
        style={{
          position: "absolute",
          justifyContent: "center",
          width: "100%",
          top: 40,
          left: 40,
        }}
      >
        <View>
          <Text variant="Inter_700Bold" color="GRAY_100" fontSize={16}>
            {city}
          </Text>
          <Text variant="Inter_400Regular" color="GRAY_100" fontSize={12}>
            {today}
          </Text>
        </View>

        <Spacer height={80} />

        <S.Footer>
          <S.Details>
            <Text variant="Inter_700Bold" fontSize={48} color="WHITE">
              {weather.temp}
            </Text>
            <Text variant="Inter_700Bold" fontSize={16} color="WHITE">
              {weather.temp_min} / {weather.temp_max}
            </Text>
            <Text
              variant="Inter_400Regular"
              fontSize={14}
              color="WHITE"
              textTransform="capitalize"
            >
              {weather.description}
            </Text>
          </S.Details>
          <IconComponent width={160} height={160} />
        </S.Footer>
      </View>
    </S.Container>
  );
}
