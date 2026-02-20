import { CreatePlaylist } from "@/src/components/ui/common";
import { useFavoriteList } from "@/src/hooks/use-favorite";
import { usePlaylistSong } from "@/src/hooks/use-playlists-songs";
import { usePlaylistStore } from "@/src/store/playlist.store";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { FavoriteIcon, PlaylistIcon } from "../user-playlist/playlists-icons";
import PlaylistListItem from "../user-playlist/PlaylistSongList";
import StyledText from "./StyledText";

const CollectionElementSection = () => {
  const { playlists, createPL, deletePL } = usePlaylistStore();

  const userPlaylistElement = playlists.map((playlist) => ({
    id: playlist.id,
    component: (
      <PlaylistListItem
        useSongFetcher={usePlaylistSong}
        playlistId={playlist.id}
        deletePL={deletePL}
        icon={PlaylistIcon}
        name={playlist.name}
      />
    ),
  }));

  const favorisElement = {
    id: "favorites",
    component: (
      <PlaylistListItem
        useSongFetcher={useFavoriteList}
        playlistId={null}
        deletePL={null}
        icon={FavoriteIcon}
        name={`Mes favoris`}
      />
    ),
  };

  const createPlaylistElement = {
    id: "create",
    component: <CreatePlaylist createPL={createPL} />,
  };

  const playlistsViewElement = [
    createPlaylistElement,
    favorisElement,
    ...userPlaylistElement,
  ];

  return (
    <View>
      <View className="flex flex-row justify-between">
        <View className="flex-row gap-x-2">
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
          className="gap-x-2"
          columnWrapperStyle={{
            justifyContent: "space-between",
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
