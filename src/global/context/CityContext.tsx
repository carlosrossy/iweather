import { CityProps } from "@global/components/SelectCity";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type CityContextProviderProps = {
  children: ReactNode;
};

type CityContextDataProps = {
  cityIsLoading: boolean;
  city: CityProps | null;
  handleChangeCity: (selectedCity: CityProps) => void;
};

export const CityContext = createContext<CityContextDataProps>(
  {} as CityContextDataProps
);

export function CityProvider({ children }: CityContextProviderProps) {
  const [cityIsLoading, setCityIsLoading] = useState(true);
  const [city, setCity] = useState<CityProps | null>(null);

  async function handleChangeCity(selectedCity: CityProps) {
    setCityIsLoading(true);

    try {
      await AsyncStorage.setItem("selectedCity", JSON.stringify(selectedCity));

      setCity(selectedCity);
    } catch (error) {
      console.error("Error saving city to AsyncStorage:", error);
    } finally {
      setCityIsLoading(false);
    }
  }

  useEffect(() => {
    const loadCityFromStorage = async () => {
      setCityIsLoading(true);

      try {
        const data = await AsyncStorage.getItem("selectedCity");
        if (data) {
          setCity(JSON.parse(data));
        }
      } catch (error) {
        console.error("Error retrieving city from AsyncStorage:", error);
      } finally {
        setCityIsLoading(false);
      }
    };

    loadCityFromStorage();
  }, []);

  return (
    <CityContext.Provider
      value={{
        city,
        cityIsLoading,
        handleChangeCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useCity(): CityContextDataProps {
  const context = useContext(CityContext);
  return context;
}
