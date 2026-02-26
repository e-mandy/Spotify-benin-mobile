import { useGenreStore } from "@/src/store/genre.store";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResearchNotFound from "../common/ResearchNotFound";
import SearchCollectionHeader from "../common/SearchCollectionHeader";
import Artist from "./Artist";

const ArtistsGenre = () => {
  const genre = useLocalSearchParams() as { genre: string };
  const artistsGenre = useGenreStore(
    (state) => state.currentGenreInfo?.singers,
  );

  if (!artistsGenre || artistsGenre.length === 0)
    return <ResearchNotFound section={`Artistes ${genre.genre}`} />;
  return (
    <View className="my-5">
      <SearchCollectionHeader title="Artistes Zinli" isAll={false} />
      <View className="mb-4">
        <FlatList
          className="py-5"
          data={artistsGenre}
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
