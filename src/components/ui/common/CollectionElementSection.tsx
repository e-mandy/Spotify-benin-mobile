import { CreatePlaylist } from "@/src/components/ui/common";
import { usePlaylistStore } from "@/src/store/playlist.store";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import React, { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import PlaylistListItem from "../user-playlist/PlaylistSongList";
import StyledText from "./StyledText";

const CollectionElementSection = () => {
  const { fetchPlaylists, deletePL, playlists, deletePLSongs } =
    usePlaylistStore();

  const playlistsItems = playlists.map((playlist) => ({
    id: playlist.id,
    component: (
      <PlaylistListItem
        key={playlist.id}
        deletePL={deletePL}
        playlistId={playlist.id}
        name={playlist.name}
        titlesCount={playlist.titles}
        removeItem={deletePLSongs}
      />
    ),
  }));

  const createPlaylistElement = {
    id: "create",
    component: <CreatePlaylist />,
  };

  const playlistsViewElement = [createPlaylistElement, ...playlistsItems];

  useFocusEffect(
    useCallback(() => {
      fetchPlaylists();
    }, [fetchPlaylists]),
  );

  return (
    <View>
      <View className="flex flex-row justify-between">
        <View className="flex-row gap-x-2 px-4">
          <Text>
            <MaterialIcons name="sort" size={24} color="white" />
          </Text>
          <StyledText className="font-bold">Récents</StyledText>
        </View>
        <View>
          <Text>
            <MaterialIcons name="grid-view" size={24} color="white" />
          </Text>
        </View>
      </View>
      <View className="p-4">
        <FlatList
          data={playlistsViewElement}
          scrollEnabled={false}
          className="gap-x-4"
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            flexWrap: "nowrap",
            columnGap: "15px",
          }}
          numColumns={2}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => item.component}
        />
      </View>
    </View>
  );
};

export default CollectionElementSection;
