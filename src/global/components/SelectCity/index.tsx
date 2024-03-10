import { TouchableOpacity } from "react-native";

import * as S from "./styles";
import { Input } from "../Input";
import Text from "../Text";
import theme from "@global/styles/theme";

export type CityProps = {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
};

interface IProps {
  isLoading?: boolean;
  placeholder?: string;
  value?: string;
  data: CityProps[];
  onChange?: (value: string) => void;
  onPress?: (value: CityProps) => void;
}

export function SelectList({
  data,
  isLoading,
  onChange,
  onPress,
  placeholder,
  value,
}: IProps) {
  return (
    <S.Container>
      <Input
        placeholder={placeholder}
        onChangeText={onChange}
        isLoading={isLoading}
        value={value}
      />

      <S.Options>
        {data.map((item) => (
          <S.Button
            key={item.latitude}
            activeOpacity={0.7}
            onPress={() => onPress && onPress(item)}
          >
            <Text variant="Inter_400Regular" color="GRAY_100" fontSize={16}>
              {item.name}
            </Text>
          </S.Button>
        ))}
      </S.Options>
    </S.Container>
  );
}
