import { MOCK_TITRES } from "@/mocks/titres.mocks";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { StyledText } from "../common";
import MusicTitle from "../common/MusicTitle";

const Titles = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <StyledText className="font-bold">Titres</StyledText>
        <Link href="/(tabs)/search">
          <StyledText className="text-sm font-bold">VOIR TOUT</StyledText>
        </Link>
      </View>
      <View className="w-full my-4">
        {MOCK_TITRES.map((title, index) => (
          <MusicTitle key={index} {...title} />
        ))}
      </View>
    </View>
  );
};

export default Titles;
