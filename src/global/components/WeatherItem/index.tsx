import { View } from "react-native";
import { SvgProps } from "react-native-svg";

import Text from "../Text";

import * as S from "./styles";

interface IProps {
  icon: React.FC<SvgProps>;
  title: string;
  value: string;
  isLast?: boolean;
}

export function WeatherItem({
  icon: Icon,
  title,
  value,
  isLast = false,
}: IProps) {
  return (
    <S.Container isLast={isLast}>
      <Icon width={24} height={24} />

      <Text
        variant="Inter_700Bold"
        color="GRAY_200"
        fontSize={14}
        marginLeft="md"
      >
        {title}
      </Text>

      <Text variant="Inter_700Bold" color="GRAY_100" fontSize={16}>
        {value}
      </Text>
    </S.Container>
  );
}
