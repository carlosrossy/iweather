import {
  ActivityIndicator,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import * as S from "./styles";
import { colors } from "@global/styles/colors";
import theme from "@global/styles/theme";

type Props = TextInputProps & {
  isLoading?: boolean;
  placeholderTextColor?: string | undefined;
  width?: string;
  height?: string;
  disabled?: boolean;
};

export function Input({
  isLoading = false,
  placeholderTextColor,
  width,
  height,
  disabled,
  ...props
}: Props) {
  return (
    <S.Container>
      <S.ContentInput width={width} height={height}>
        <S.TextInputNative
          placeholderTextColor={placeholderTextColor || theme.colors.GRAY_400}
          selectTextOnFocus={disabled}
          placeholder="Digite"
          {...props}
        />
      </S.ContentInput>

      {isLoading && <ActivityIndicator color={colors.BLUE_LIGHT} />}
    </S.Container>
  );
}
