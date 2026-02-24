import { useSearchStore } from "@/src/store/search.store";
import React from "react";
import { View } from "react-native";
import MusicTitle from "../common/MusicTitle";
import ResearchNotFound from "../common/ResearchNotFound";
import SearchCollectionHeader from "../common/SearchCollectionHeader";

const Titles = () => {
  const searchTitles = useSearchStore((state) => state.searchResult?.titles);
  if (!searchTitles || searchTitles.length === 0)
    return <ResearchNotFound section="Titres" />;
  return (
    <View className="my-4">
      <SearchCollectionHeader title="Titres" path="/search" />
      <View className="w-full my-4">
        {searchTitles.map((title) => {
          const author = title?.album?.Singers[0].Singer.singerName;
          return <MusicTitle author={author} key={title.id} {...title} />;
        })}
      </View>
    </View>
  );
};

export default Titles;
