import { artistesGenre } from "@/mocks/genres.mock";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ArtistGrid from "./ArtistGrid";

const ArtistsGenreGrid = () => {
  return (
    <FlatList
      className="my-4 py-5 max-w-screen"
      data={artistesGenre}
      renderItem={({ item: artist }) => <ArtistGrid {...artist} />}
      scrollEnabled={false}
      contentContainerStyle={{
        gap: 20,
      }}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
    />
  );
};

export default ArtistsGenreGrid;
