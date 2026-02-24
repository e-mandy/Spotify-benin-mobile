import { AppWrapper } from "@/src/components/ui/common";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const Genre = () => {
  console.log("J'arrive dessus.");
  const genre = useLocalSearchParams();
  console.log(genre);
  return (
    <AppWrapper>
      <Text>Bro</Text>
    </AppWrapper>
  );
};

export default Genre;
