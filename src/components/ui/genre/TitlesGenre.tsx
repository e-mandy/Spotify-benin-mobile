import { MOCK_TITRES } from "@/mocks/titres.mocks";
import React from "react";
import { View } from "react-native";
import MusicTitle from "../common/MusicTitle";
import SearchCollectionHeader from "../common/SearchCollectionHeader";

const TitlesGenre = () => {
  return (
    <View className="mb-28">
      <SearchCollectionHeader title="Titres Populaires" isAll={false} />
      <View className="w-full my-4">
        {MOCK_TITRES.map((title) => (
          <MusicTitle {...title} key={title.id} />
        ))}
      </View>
    </View>
  );
};

export default TitlesGenre;
