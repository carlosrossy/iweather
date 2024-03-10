import { Dashboard } from "@features/Home";
import Search from "@features/Search";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export type RootAppRoutesList = {
  Search: undefined;
  Dashboard: undefined;
};

export type AppScreenNavigationProp =
  NativeStackNavigationProp<RootAppRoutesList>;

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Search" component={Search} />

      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
