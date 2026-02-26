import { MOCK_ALBUMS } from "@/mocks/albums.mock";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Album from "../common/Album";

const AlbumsGenreGrid = () => {
  return (
    <FlatList
      className="py-5"
      data={MOCK_ALBUMS}
      renderItem={({ item: album }) => <Album {...album} />}
      horizontal
      contentContainerStyle={{
        flexDirection: "row",
        gap: 20,
      }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default AlbumsGenreGrid;
