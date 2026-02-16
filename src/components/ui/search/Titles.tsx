import { useSearchStore } from "@/src/store/search.store";
import React from "react";
import { View } from "react-native";
import MusicTitle from "../common/MusicTitle";
import SearchCollectionHeader from "../common/SearchCollectionHeader";

const Titles = () => {
  const searchTitles = useSearchStore((state) => state.searchResult?.titles);

  if (!searchTitles) return null;
  return (
    <View>
      <SearchCollectionHeader title="Titres" path="/search" />
      <View className="w-full my-4">
        {searchTitles.map((title) => (
          <MusicTitle key={title.id} {...title} />
        ))}
      </View>
    </View>
  );
};

export default Titles;
