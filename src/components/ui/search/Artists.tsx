import { useSearchStore } from "@/src/store/search.store";
import React from "react";
import { View } from "react-native";
import Artist from "../common/Artist";
import SearchCollectionHeader from "../common/SearchCollectionHeader";

const Artists = () => {
  const searchArtists = useSearchStore((state) => state.searchResult.artists);

  if (!searchArtists || searchArtists.length === 0) return null;
  return (
    <View className="mb-10">
      <SearchCollectionHeader
        title="Artistes"
        path="/(tabs)/(search)/search"
        isAll={false}
      />
      <View className="w-full mb-32 mt-5">
        {searchArtists.map((artist) => (
          <Artist key={artist.id} {...artist} />
        ))}
      </View>
    </View>
  );
};

export default Artists;
