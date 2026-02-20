import { usePlaylistStore } from "@/src/store/playlist.store";
import { useAddToPlayslist } from "@/src/store/song-add-to-playlist.store";
import { IPlaylist } from "@/src/store/types/playlist.type";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, useWindowDimensions, View } from "react-native";
import { AppModal } from "./AppModal";
import Button from "./Button";
import OutlinedButton from "./OutlinedButton";
import StyledText from "./StyledText";
import Title from "./Title";

const AddToPlayslist = ({
  isModalOpen,
  setModalOpen,
  songId,
  onSuccess,
  onError,
  closeMenu,
}) => {
  const { height } = useWindowDimensions();
  const { playlists } = usePlaylistStore();
  const { addToPlaylist } = useAddToPlayslist();

  const router = useRouter();

  const playlistsItems = playlists.filter(
    (p) => p.id.toString() !== "favorites",
  );

  async function addSong(p: IPlaylist) {
    try {
      await addToPlaylist(p.id, songId);
      onSuccess(p);
    } catch (error) {
      onError();
      console.log(error);
    }
  }

  return (
    <AppModal onClose={() => setModalOpen(false)} showModal={isModalOpen}>
      <View
        style={{ height: 0.7 * height }}
        className="w-full mx-auto py-6 px-4 bg-background-dark rounded-2xl"
      >
        <Title className="text-md"> Choisir la playlist </Title>
        <View className="mb-4"></View>
        {/* Because favorite is also a playlist but we don't wanna considere it like that here */}
        {/* Since it is not an add to favorite action but we want real playlists*/}
        {playlists.length <= 1 ? (
          <View className="flex gap-y-8">
            <StyledText className="text-[18px] mt-8 text-muted text-center">
              Aucune playlist pour le moment
            </StyledText>
            <Button
              textStyle=" !text-black"
              className="bg-white w-full"
              onPress={() => {
                router.push("/library");
                closeMenu();
              }}
            >
              Créer une playlist
            </Button>
          </View>
        ) : (
          <FlatList
            data={playlistsItems}
            numColumns={1}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => {
              return (
                <View className="my-1 flex-row justify-between items-center">
                  <Text className="!text-white text-md"> {item.name} </Text>
                  <OutlinedButton
                    textClassName="!text-sm"
                    className="px-8 !text-sm"
                    onPress={() => addSong(item)}
                  >
                    Ajouter
                  </OutlinedButton>
                </View>
              );
            }}
          />
        )}
      </View>
    </AppModal>
  );
};

export default AddToPlayslist;
