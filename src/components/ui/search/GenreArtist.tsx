import { useSearchStore } from "@/src/store/search.store";
import React from "react";
import { FlatList, Text, View } from "react-native";
import SearchCollectionHeader from "../common/SearchCollectionHeader";

const GenreArtist = () => {
  const { currentGenre, genreInfos } = useSearchStore();

  if (!genreInfos) return null;

  return (
    <View>
      <SearchCollectionHeader title={`Artistes ${currentGenre}`} />
      <View className="mb-4">
        <FlatList
          className="py-5"
          data={genreInfos}
          renderItem={({ item: genreArtist }) => <Text>Data there</Text>}
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

export default GenreArtist;
