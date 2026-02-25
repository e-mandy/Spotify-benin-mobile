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
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default _layout;
