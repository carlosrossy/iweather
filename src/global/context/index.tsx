import { NavigationContainer } from "@react-navigation/native";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { CityProvider } from "./CityContext";
import theme from "@global/styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <CityProvider>{children}</CityProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
