import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SearchCollectionHeader from "../common/SearchCollectionHeader";
import Artist from "./Artist";

const GenreArtists = () => {
  return (
    <View>
      <SearchCollectionHeader title="Artistes Zinli" />
      <View className="mb-4">
        <FlatList
          className="py-5"
          data={}
          renderItem={({ item: artist }) => <Artist {...artist} />}
          horizontal
          contentContainerStyle={{
            flexDirection: "row",
            gap: 20,
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default GenreArtists;
