import { useGenreStore } from "@/src/store/genre.store";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ResearchNotFound from "../common/ResearchNotFound";
import AlbumGrid from "./AlbumGrid";

const AlbumsGenreGrid = () => {
  const genre = useLocalSearchParams() as { genre: string };
  const albumsGenre = useGenreStore((state) => state.currentGenreInfo?.albums);

  if (!albumsGenre || albumsGenre.length === 0)
    return <ResearchNotFound section={`Albums - ${genre.genre}`} />;
  return (
    <FlatList
      className="py-5"
      data={albumsGenre}
      scrollEnabled={false}
      renderItem={({ item: album }) => <AlbumGrid {...album} />}
      contentContainerStyle={{
        gap: 20,
      }}
      columnWrapperStyle={{
        justifyContent: "space-between",
        paddingHorizontal: 8,
      }}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default AlbumsGenreGrid;
