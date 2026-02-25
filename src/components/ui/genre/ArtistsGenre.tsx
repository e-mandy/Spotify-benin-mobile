import { artistesGenre } from "@/mocks/genres.mock";
import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SearchCollectionHeader from "../common/SearchCollectionHeader";
import Artist from "./Artist";

const ArtistsGenre = () => {
  return (
    <View className="my-5">
      <SearchCollectionHeader title="Artistes Zinli" isAll={false} />
      <View className="mb-4">
        <FlatList
          className="py-5"
          data={artistesGenre}
          renderItem={({ item: artist }) => <Artist {...artist} />}
          horizontal
          contentContainerStyle={{
            flexDirection: "row",
            gap: 30,
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default ArtistsGenre;
