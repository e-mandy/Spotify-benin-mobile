import { MOCK_ALBUMS } from "@/mocks/albums.mock";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import AlbumGrid from "./AlbumGrid";

const AlbumsGenreGrid = () => {
  return (
    <FlatList
      className="py-5"
      data={MOCK_ALBUMS}
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
