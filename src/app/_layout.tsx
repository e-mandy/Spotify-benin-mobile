import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import FlashMessage from "react-native-flash-message";
import "react-native-reanimated";
import useAuth from "../store/auth.store";
import "../styles/global.css";

SplashScreen.preventAutoHideAsync();

import { useColorScheme } from "@/src/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isLoadingAppState = useAuth((state) => state.isLoadingAppState);
  const fetchUser = useAuth((state) => state.fetchUser);

  //load app fonts
  const [loaded, error] = useFonts({
    "spline-sans-bold": require("@/assets/fonts/SplineSans_700Bold.ttf"),
    "spline-sans-light": require("@/assets/fonts/SplineSans_300Light.ttf"),
    "noto-sans": require("@/assets/fonts/noto-sans.ttf"),
    "spline-sans-regular": require("@/assets/fonts/SplineSans_400Regular.ttf"),
    "Material Icons": "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if ((loaded || error) && !isLoadingAppState) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error, isLoadingAppState]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
      <FlashMessage position="top" />
    </ThemeProvider>
  );
}
