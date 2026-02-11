import HorizontalScroll from "@/src/components/ui/common/HorizontalScroll";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const genre = () => {
  const genreId = useLocalSearchParams();
  return (
    <View>
      <HorizontalScroll />
    </View>
  );
};

export default genre;
