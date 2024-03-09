import React from "react";
import * as S from "./styles";

import Text from "@global/components/Text";
import { Input } from "@global/components/Input";
import { Spacer } from "@global/components/Spacer";

export default function Search() {
  return (
    <S.Container>
      <Text variant="Inter_500Medium" color="GRAY_100" fontSize={20}>
        Boas vindas ao{" "}
        <Text variant="Inter_500Medium" color="BLUE_LIGHT" fontSize={20}>
          TypeWeather
        </Text>
      </Text>
      <Text variant="Inter_500Medium" color="GRAY_200" fontSize={13}>
        Escolha um local para ver a previsão do tempo
      </Text>

      <Spacer height={32} />

      <Input placeholder="Buscar Local" />
    </S.Container>
  );
}
