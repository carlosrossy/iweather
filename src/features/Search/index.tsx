import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native"; // Importe o StatusBar
import * as S from "./styles";

import Text from "@global/components/Text";
import { Spacer } from "@global/components/Spacer";
import { CityProps, SelectList } from "@global/components/SelectCity";
import { getCityByNameService } from "@global/config/getCityByNameService";
import { useCity } from "@global/context/CityContext";
import theme from "@global/styles/theme";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);

  const { handleChangeCity } = useCity();

  async function getCities(city: string) {
    setIsLoading(true);

    const response = await getCityByNameService(city);

    setCities(response);

    console.log(response);
    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.GRAY_900}
      />
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

      <SelectList
        data={cities}
        onChange={setSearch}
        isLoading={isLoading}
        onPress={handleChangeCity}
        placeholder="Buscar local"
      />
    </S.Container>
  );
}
