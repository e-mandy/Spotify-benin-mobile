import React from "react";
import { FlatList, View } from "react-native";
import Album from "../common/Album";
import ResearchNotFound from "../common/ResearchNotFound";
import SearchCollectionHeader from "../common/SearchCollectionHeader";

type AlbumType = {
  albums: any;
  headerTitle: string;
  isHeaderAll?: boolean;
};

const Albums = ({ albums, headerTitle, isHeaderAll }: AlbumType) => {
  if (!albums || albums.length === 0)
    return <ResearchNotFound section="Albums" />;
  return (
    <View>
      <SearchCollectionHeader
        title={headerTitle}
        isAll={isHeaderAll}
        path={isHeaderAll && "/search"}
      />
      <View className="mb-4">
        <FlatList
          className="py-5"
          data={albums}
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
