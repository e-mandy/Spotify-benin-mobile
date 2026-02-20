import {
  PlaylistCard,
  StyledText,
  Title,
  TrackShuffle,
} from "@/src/components/ui/common";
import { useAddToPlayslist } from "@/src/store/song-add-to-playlist.store";
import { SongDetails } from "@/src/store/types/play.types";
import { notifSuccess } from "@/src/utils/react-toast";
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
  const { data, isLoading, removeItem } = useSongFetcher(playlistId);
  const { height } = useWindowDimensions();
  const { removeFromPlaylist } = useAddToPlayslist();

  interface IAlert {
    onConfirm: () => void;
  }

  function showAlert({ onConfirm }: IAlert) {
    Alert.alert(
      "Playlist",
      "Êtes-vous sûr de vouloir supprimer cette playlist ?",
      [
        {
          text: "Oui",
          onPress: () => {
            onConfirm();
          },
        },
        {
          text: "Annuler",
          style: "cancel",
        },
      ],
    );
  }
  const handlePlaylistDelete = () => {
    if (!playlistId) return;
    showAlert({
      onConfirm: () => deletePL(playlistId),
    });
  };

  const handleSwipe = async (titleId) => {
    const onConfirm = async () => {
      if (name === "Mes favoris") {
        await removeItem(titleId);
      } else {
        await removeItem(playlistId, titleId);
      }
      notifSuccess("Une chanson a été retirée de cette liste");
    };

    showAlert({ onConfirm });
  };

  return (
    <>
      <PlaylistCard
        onPlaylistDelete={handlePlaylistDelete}
        onPress={handlePress}
        iconChild={icon}
        cardTitle={`${name} (${data?.length})`}
      />
      <AppModal onClose={() => setModalOpen(false)} showModal={isModalOpen}>
        <View
          style={{ height: 0.7 * height }}
          className="w-full mx-auto py-6 px-4 bg-background-dark rounded-2xl"
        >
          <View className="flex-row items-center justify-between">
            <View>
              <Title className=""> {name} </Title>
            </View>
            <TrackShuffle
              songIds={data?.map((song) => song.id) ?? []}
              playlistName={name}
            />
          </View>
          <View className="mb-4"></View>

          <ShowData isLoading={isLoading}>
            <View>
              {data?.length === 0 ? (
                <View>
                  <StyledText className="text-center text-muted text-md">
                    Aucune chanson trouvée
                  </StyledText>
                </View>
              ) : (
                <FlatList
                  data={data as SongDetails[]}
                  numColumns={1}
                  keyExtractor={({ id }) => id.toString()}
                  renderItem={({ item }) => {
                    return (
                      <View className="my-1">
                        <TrackItem
                          onTrackSwipe={() => handleSwipe(item.id)}
                          swipeActive={true}
                          id={item.id}
                          photo={item.cover}
                          label={item.title}
                          artistName={item.singer}
                          playlistItems={data?.map((song) => song.id) ?? []}
                          playlistName={name}
                        />
                      </View>
                    );
                  }}
                />
              )}
            </View>
          </ShowData>
        </View>
      </AppModal>
    </>
  );
};

export default PlaylistListItem;
