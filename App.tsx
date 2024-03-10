import React from "react";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { ActivityIndicator, View } from "react-native";
import { Loading } from "@global/components/Loading";
import { Routes } from "routes";
import { AppProvider } from "@global/context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator color={"#8FB2F5"} />
      </View>
    );
  }
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
