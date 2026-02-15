import { CreatePlaylist } from "@/src/components/ui/common";
import { usePlaylist } from "@/src/hooks/use-playlist";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, View } from "react-native";
import PlaylistListItem from "./PlaylistSongList";
import StyledText from "./StyledText";
import { PlaylistIcon } from "./playlists-icons";

const CollectionElementSection = () => {
  const { playlists, createPL, deletePL } = usePlaylist();

  const playlistSections = playlists.map((playlist) => ({
    id: playlist.id,
    component: <PlaylistListItem icon={PlaylistIcon} name={playlist.name} />,
  }));

  const playlistsData = [
    {
      id: "favorite",
      component: (
        <PlaylistListItem icon={PlaylistIcon} name="Mes favoris (100)" />
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
