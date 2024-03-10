import { useCity } from "@global/context/CityContext";
import { AppRoutes } from "./app.routes";
import { Dashboard } from "@features/Home";

export function Routes() {
  const { city } = useCity();

  return city ? <Dashboard /> : <AppRoutes />;
}
