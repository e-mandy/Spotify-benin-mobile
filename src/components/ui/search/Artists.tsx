import { MOCK_TITRES } from "@/mocks/titres.mocks";
import React from "react";
import { View } from "react-native";
import Artist from "../common/Artist";
import SearchCollectionHeader from "../common/SearchCollectionHeader";

const Artists = () => {
  return (
    <View className="mb-10">
      <SearchCollectionHeader
        title="Artistes"
        path="/(tabs)/(search)/search"
        isAll={false}
      />
      <View className="w-full h-96 mt-5">
        {MOCK_TITRES.map((artiste, index) => (
          <Artist key={index} {...artiste} />
        ))}
      </View>
    </View>
  );
};

export default Artists;
