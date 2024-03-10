import { useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import * as S from "./styles";
import { CityProps, SelectList } from "@global/components/SelectCity";
import { useCity } from "@global/context/CityContext";
import { getCityByNameService } from "@global/config/getCityByNameService";
import { WeatherToday } from "@global/components/WeatherToday";
import { Loading } from "@global/components/Loading";
import {
  WeatherResponseProps,
  getWeatherByCityService,
} from "@global/config/getWeatherByCityService";
import { WeatherDetails } from "@global/components/WeatherDetails";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [cities, setCities] = useState<CityProps[]>([]);
  const [isWeatherLoading, setWeatherIsLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherResponseProps>(
    {} as WeatherResponseProps
  );

  const { city, handleChangeCity, cityIsLoading } = useCity();

  function handleSelect(value: CityProps) {
    handleChangeCity(value);
    setSearch("");
    setCities([]);
  }

  const getWeatherDetails = useCallback(async () => {
    if (!city) {
      return;
    }

    setWeatherIsLoading(true);

    const { latitude, longitude } = city;
    const response = await getWeatherByCityService({ latitude, longitude });

    setWeather(response);
    setWeatherIsLoading(false);
  }, [city]);

  async function getCities(city: string) {
    setIsSearching(true);

    const response = await getCityByNameService(city);

    setCities(response);
    setIsSearching(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    getCities(search);
    const debounce = setTimeout(() => getCities(search), 500);

    return () => clearInterval(debounce);
  }, [search]);

  useEffect(() => {
    getWeatherDetails();
  }, [getWeatherDetails]);

  if (isWeatherLoading || cityIsLoading || !city) {
    return <Loading />;
  }

  return (
    <View>
      <SelectList
        data={cities}
        value={search}
        onChange={setSearch}
        onPress={handleSelect}
        isLoading={isSearching}
        placeholder="Buscar local"
      />

      <WeatherToday city={city.name} weather={weather.today.weather} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <WeatherDetails data={weather.today.details} />
        {/* <NextDays data={weather.nextDays} /> */}
      </ScrollView>
    </View>
  );
}
