import { SvgProps } from "react-native-svg";

import Text from "../Text";

import * as S from "./styles";
import { Spacer } from "../Spacer";

export interface DayProps {
  icon: React.FC<SvgProps>;
  day: string;
  weather: string;
  max: string;
  min: string;
}

interface IProps {
  data: DayProps;
}

export function Day({ data }: IProps) {
  const { icon: Icon } = data;

  return (
    <S.Container>
      <Text variant="Inter_700Bold" fontSize={14} color="GRAY_200">
        {data.day}
      </Text>

      <Spacer height={4} />

      <Icon width={56} height={56} />

      <Spacer height={4} />

      <Text variant="Inter_700Bold" fontSize={14} color="GRAY_100">
        {data.max}
      </Text>

      <Spacer height={4} />

      <Text variant="Inter_700Bold" fontSize={14} color="GRAY_400">
        {data.min}
      </Text>
    </S.Container>
  );
}
