import { CreatePlaylist } from "@/src/components/ui/common";
import { useFavoriteList } from "@/src/hooks/use-favorite";
import { usePlaylist } from "@/src/hooks/use-playlist";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { PlaylistIcon } from "../user-playlist/playlists-icons";
import PlaylistListItem from "../user-playlist/PlaylistSongList";
import StyledText from "./StyledText";

const CollectionElementSection = () => {
  const { playlists, createPL, deletePL } = usePlaylist();

  const { favorites } = useFavoriteList();
  console.log(favorites);

  const playlistSections = playlists.map((playlist) => ({
    id: playlist.id,
    component: (
      <PlaylistListItem
        playlistId={playlist.id}
        deletePL={deletePL}
        icon={PlaylistIcon}
        name={playlist.name}
      />
    ),
  }));

  const playlistsData = [
    {
      id: "favorite",
      component: (
        <PlaylistListItem
          playlistId={null}
          deletePL={null}
          icon={PlaylistIcon}
          playlists={favorites}
          name={`Mes favoris (${favorites.length.toString().padStart(2, "0")})`}
        />
      ),
    },
    ...playlistSections,
    {
      id: "create",
      component: <CreatePlaylist createPL={createPL} />,
    },
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
          data={playlistsData}
          className="gap-x-2"
          columnWrapperStyle={{
            justifyContent: "space-between",
            columnGap: "15px",
          }}
          numColumns={2}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => <> {item.component} </>}
        />
      </View>
    </View>
  );
};

export default CollectionElementSection;
