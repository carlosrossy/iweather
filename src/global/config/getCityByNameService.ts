import api from "./api";

export const API_KEY = '79e211e2e7d139e10bb00b0889408878';

export interface CityProps {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
}

export interface CityAPIResponse {
  id: string;
  name: string;
  sys: {
    country?: string;
  };
  coord: {
    lon: number;
    lat: number;
  };
}

export async function getCityByNameService(name: string): Promise<CityProps[]> {
  try {
    const { data } = await api.get<CityAPIResponse>(`/weather?q=${name}&appid=${API_KEY}`);

    const city: CityProps = {
      id: data.id,
      name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    };

    return [city];
  } catch (error) {
    console.error("Error fetching city:", error);
    return [];
  }
}
