import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="search"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[genre]"
        options={({ route }) => {
          const params = route.params as { genre: string };
          return {
            title: typeof params?.genre === "string" ? params?.genre : "Genre",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerShadowVisible: false,
          };
        }}
      />
    </Stack>
  );
};

export default _layout;
