import { DateTime } from "luxon";
import { isDayTime } from "@global/utils/isDayTime";

import { View } from "react-native";
import Text from "../Text";

import * as S from "./styles";
import { SvgProps } from "react-native-svg";

export type WeatherTodayProps = {
  temp: string;
  temp_min: string;
  temp_max: string;
  description: string;
  details: {
    name: string;
    bg_day: string;
    bg_night: string;
    icon_day: React.FC<SvgProps>;
    icon_night: React.FC<SvgProps>;
  };
};

type Props = {
  city: string;
  weather: WeatherTodayProps;
};

export function WeatherToday({ weather, city }: Props) {
 const today = DateTime.local().setLocale('pt-BR').toFormat("cccc, dd 'de' MMMM 'de' yyyy");
  const isDay = isDayTime();

  // const { bg_day, bg_night, icon_day, icon_night } = weather.details;

  // const backgroundImage = isDay ? bg_day : bg_night;
  // const IconComponent = isDay ? icon_day : icon_night;


  // console.log(backgroundImage);
  // console.log(IconComponent);

  return (
    <S.Container>
      {/* <S.Photo
        source={{
          uri: backgroundImage,
        }}
      /> */}
      <View>
        <Text variant="Inter_700Bold" color="GRAY_100" fontSize={16}>
          {city}
        </Text>
        <Text variant="Inter_400Regular" color="GRAY_100" fontSize={12}>
          {today}
        </Text>
      </View>

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
        {/* <IconComponent width={160} height={160} /> */}
      </S.Footer>
    </S.Container>
  );
}
