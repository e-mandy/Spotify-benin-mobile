import { useGenreStore } from "@/src/store/genre.store";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ResearchNotFound from "../common/ResearchNotFound";
import ArtistGrid from "./ArtistGrid";

const ArtistsGenreGrid = () => {
  const genre = useLocalSearchParams() as { genre: string };
  const artistsGenre = useGenreStore(
    (state) => state.currentGenreInfo?.singers,
  );

  if (!artistsGenre || artistsGenre.length === 0)
    return <ResearchNotFound section={`Artistes - ${genre.genre}`} />;
  return (
    <FlatList
      className="my-4 py-5 max-w-screen"
      data={artistsGenre}
      renderItem={({ item: artist }) => <ArtistGrid {...artist} />}
      scrollEnabled={false}
      contentContainerStyle={{
        gap: 20,
      }}
      columnWrapperStyle={{
        justifyContent: "space-between",
        paddingHorizontal: 8,
      }}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
    />
  );
};

export default ArtistsGenreGrid;
