import { PlaylistCard, Title, TrackShuffle } from "@/src/components/ui/common";
import { SongDetails } from "@/src/store/types/play.types";
import React, { useState } from "react";
import { Alert, FlatList, useWindowDimensions, View } from "react-native";
import { AppModal } from "../common/AppModal";
import ShowData from "../common/ShowData";
import { TrackItem } from "../common/TrackItem";

const PlaylistListItem = ({
  icon,
  name,
  playlistId,
  deletePL,
  useSongFetcher,
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const handlePress = () => setModalOpen(true);
  const { data, isLoading } = useSongFetcher(playlistId);
  const { height } = useWindowDimensions();

  const handlePlaylistDelete = () => {
    if (!playlistId) return;
    Alert.alert(
      "Playlist",
      "Êtes-vous sûr de vouloir supprimer cette playlist ?",
      [
        {
          text: "Oui",
          onPress: () => {
            deletePL(playlistId);
          },
        },
        {
          text: "Annuler",
          style: "cancel",
        },
      ],
    );
  };

  return (
    <>
      <PlaylistCard
        onPlaylistDelete={handlePlaylistDelete}
        onPress={handlePress}
        iconChild={icon}
        cardTitle={name}
      />
      <AppModal onClose={() => setModalOpen(false)} showModal={isModalOpen}>
        <View
          style={{ height: 0.7 * height }}
          className="w-full mx-auto py-6 px-4 bg-background-dark rounded-2xl"
        >
          <Title className="!text-gray-800"> {name} </Title>
          <TrackShuffle songIds={[]} playlistName={""} />
          <View className="mb-4"></View>

          <ShowData isLoading={isLoading}>
            <FlatList
              data={data as SongDetails[]}
              numColumns={1}
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item }) => {
                return (
                  <View className="my-1">
                    <TrackItem
                      id={item.id}
                      photo={item.cover}
                      label={item.title}
                      artistName={item.singer}
                      playlistItems={[]}
                      playlistName=""
                    />
                  </View>
                );
              }}
            />
          </ShowData>
        </View>
      </AppModal>
    </>
  );
};

export default PlaylistListItem;
