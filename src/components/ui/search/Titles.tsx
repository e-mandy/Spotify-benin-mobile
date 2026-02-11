import { MOCK_TITRES } from "@/mocks/titres.mocks";
import React from "react";
import { View } from "react-native";
import MusicTitle from "../common/MusicTitle";
import SearchCollectionHeader from "../common/SearchCollectionHeader";

const Titles = () => {
  return (
    <View>
      <SearchCollectionHeader title="Titres" path="/(tabs)/(search)/search" />
      <View className="w-full my-4">
        {MOCK_TITRES.map((title, index) => (
          <MusicTitle key={index} {...title} />
        ))}
      </View>
    </View>
  );
};

export default Titles;
