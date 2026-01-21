import useAuth from "@/src/store/auth.store";
import { Redirect, Stack } from "expo-router";

export default function StackLayout() {
  const isLogged = useAuth((state) => state.isLogged);

  return false ? (
    <Stack screenOptions={{ headerShown: false }} />
  ) : (
    <Redirect href="/(tabs)" />
  );
}
