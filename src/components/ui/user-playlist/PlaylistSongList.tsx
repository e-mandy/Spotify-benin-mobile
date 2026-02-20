import {
  PlaylistCard,
  StyledText,
  Title,
  TrackShuffle,
} from "@/src/components/ui/common";
import { usePlaylistStore } from "@/src/store/playlist.store";
import { notifError, notifSuccess } from "@/src/utils/react-toast";
import { truncate } from "@/src/utils/truncate";
import { Feather } from "@expo/vector-icons";
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
        cardTitle={`${truncate(name, 20)} (${titlesCount ?? 0})`}
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
            {songs.length > 0 && (
              <TrackShuffle
                songIds={songs?.map((song) => song.id) ?? []}
                playlistName={name}
              />
            )}
          </View>
          <View className="mb-4"></View>

          <View style={{ height: 0.55 * height }}>
            {songs?.length === 0 ? (
              <View className="flex-col justify-center items-center mt-32">
                <Feather color="#fff" size={45} name="music" />
                <StyledText className="text-center mt-3 text-[18px]">
                  Aucune chanson trouvée
                </StyledText>
              </View>
            ) : (
              <ShowData isLoading={isLoadingSongs}>
                <View>
                  <FlatList
                    data={songs}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
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
                </View>
              </ShowData>
            )}
          </View>
        </View>
      </AppModal>
    </>
  );
};

export default React.memo(PlaylistListItem);
