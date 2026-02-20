import {
  PlaylistCard,
  StyledText,
  Title,
  TrackShuffle,
} from "@/src/components/ui/common";
import { usePlaylistStore } from "@/src/store/playlist.store";
import { notifError, notifSuccess } from "@/src/utils/react-toast";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { Alert, FlatList, useWindowDimensions, View } from "react-native";
import { AppModal } from "../common/AppModal";
import ShowData from "../common/ShowData";
import { TrackItem } from "../common/TrackItem";
import { FavoriteIcon, PlaylistIcon } from "./playlists-icons";

const PlaylistListItem = ({
  name,
  titlesCount,
  playlistId,
  deletePL,
  removeItem,
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const handlePress = () => setModalOpen(true);
  const { height } = useWindowDimensions();
  const { getPlaylistItems, isLoadingSongs, playlistsSongs } =
    usePlaylistStore();
  const songs = playlistsSongs[playlistId] ?? [];
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
    /**
     * if type of playlists is string then it means user is clicking int the favorites bloc
     * so nothing to delete
     */
    if (typeof playlistId === "string") return;
    showAlert({
      onConfirm: () => deletePL(playlistId),
    });
  };

  const handleSwipe = async (titleId) => {
    const onConfirm = async () => {
      const success = await removeItem(playlistId, titleId);
      if (success) notifSuccess("Une chanson a été retirée de cette liste");
      else notifError("Une erreur est survenue lors de la suppression");
    };

    showAlert({ onConfirm });
  };

  useFocusEffect(
    useCallback(() => {
      getPlaylistItems(playlistId);
    }, [playlistId, getPlaylistItems]),
  );

  return (
    <>
      <PlaylistCard
        onPlaylistDelete={handlePlaylistDelete}
        onPress={handlePress}
        iconChild={playlistId === "favorites" ? FavoriteIcon : PlaylistIcon}
        cardTitle={`${name} (${titlesCount})`}
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
              songIds={songs?.map((song) => song.id) ?? []}
              playlistName={name}
            />
          </View>
          <View className="mb-4"></View>

          <View>
            {songs?.length === 0 ? (
              <View>
                <StyledText className="text-center text-muted text-md">
                  Aucune chanson trouvée
                </StyledText>
              </View>
            ) : (
              <ShowData isLoading={isLoadingSongs}>
                <FlatList
                  data={songs}
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
                          playlistItems={songs?.map((song) => song.id) ?? []}
                          playlistName={name}
                        />
                      </View>
                    );
                  }}
                />
              </ShowData>
            )}
          </View>
        </View>
      </AppModal>
    </>
  );
};

export default React.memo(PlaylistListItem);
