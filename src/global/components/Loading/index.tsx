import { ActivityIndicator, View } from "react-native";

import * as S from "./styles";
import theme from "@global/styles/theme";

export function Loading() {
  return (
    <S.Container>
      <ActivityIndicator color={theme.colors.BLUE_LIGHT} />
    </S.Container>
  );
}
