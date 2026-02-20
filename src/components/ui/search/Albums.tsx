import { useSearchStore } from "@/src/store/search.store";
import React from "react";
import { FlatList, View } from "react-native";
import Album from "../common/Album";
import SearchCollectionHeader from "../common/SearchCollectionHeader";

const Albums = () => {
  const searchAllbums = useSearchStore((state) => state.searchResult?.albums);

  if (!searchAllbums || searchAllbums.length === 0) return null;
  return (
    <View>
      <SearchCollectionHeader title="Albums" path="/(tabs)/(search)/search" />
      <View className="mb-4">
        <FlatList
          className="py-5"
          data={searchAllbums}
          renderItem={({ item: album }) => <Album {...album} />}
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

export default Albums;
