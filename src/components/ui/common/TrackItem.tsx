import { useAddToPlayslist } from "@/src/store/song-add-to-playlist.store";
import { useTrackStore } from "@/src/store/track-play.store";
import { IPlaylist } from "@/src/store/types/playlist.type";
import { notifError, notifSuccess } from "@/src/utils/react-toast";
import { Entypo, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Divider, Menu } from "react-native-paper";
import AddToPlayslist from "./AddToPlayslist";

export const TrackItem = ({
  id,
  label,
  artistName,
  photo,
  playlistName = "",
  playlistItems = [],
}) => {
  const router = useRouter();
  const {
    trackHandler,
    playFromPlaylist,
    currentSong,
    resume,
    pause,
    isPlaying,
  } = useTrackStore();

  const isTheSongOnTrack = +id === +currentSong?.info?.id;

  const onTrackPlay = async () => {
    try {
      if (playlistName) {
        await playFromPlaylist(playlistName, playlistItems, id);
      } else {
        await trackHandler(id);
      }
      router.push("/(player)");
    } catch (error) {
      console.log("Error on track item 1:: ", error);
    }
  };

  const onPlayIconTouch = async () => {
    if (isTheSongOnTrack) {
      if (currentSong.sound.paused) {
        resume();
      } else {
        pause();
      }
    } else {
      await trackHandler(id);
    }
  };

  const { addToPlaylist } = useAddToPlayslist();

  const [visible, setVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const onSuccess = (playlist: IPlaylist) => {
    notifSuccess(`Une chanson ajoutée à la playlist ${playlist.name}`);
    closeMenu();
    setModalOpen(false);
  };

  const onError = () => {
    notifError(`Une erreur est survenue durant l'ajout à la playlist`);
    closeMenu();
    setModalOpen(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={onTrackPlay}
        activeOpacity={0.5}
        className={`flex-row items-center gap-4 rounded-[25px] bg-surface-dark px-5 py-4 mb-3`}
      >
        <Image
          source={{ uri: photo }}
          className="h-14 w-14 rounded-md bg-black"
          resizeMode="cover"
        />

        <View className="flex-1 flex-col">
          <Text
            className={`text-base font-bold text-white ${isTheSongOnTrack ? "!text-primary" : ""} `}
            numberOfLines={1}
          >
            {label}
          </Text>
          <Text className="text-sm text-gray-400" numberOfLines={1}>
            {artistName}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onPlayIconTouch}
          className={`h-8 w-8 items-center justify-center rounded-full  border-gray-600 border ${isTheSongOnTrack ? "border-primary" : ""}`}
        >
          {isTheSongOnTrack ? (
            isPlaying ? (
              <>
                {/* {!currentSong.sound?.isBuffering ? ( */}
                <FontAwesome6 name="pause" size={18} color="#d84141" />
                {/* ) : ( */}
                {/* <View className="animate-spin">
                  <EvilIcons name="spinner-3" size={18} color="#d84141" />
                </View> */}
                {/* )} */}
              </>
            ) : (
              <Entypo name="controller-play" size={18} color="#d84141" />
            )
          ) : (
            <Entypo name="controller-play" size={18} color="#9ca3af" />
          )}
        </TouchableOpacity>

        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchorPosition="top"
          anchor={
            <TouchableOpacity
              onPress={openMenu}
              className="h-8 w-8 items-center justify-center"
            >
              <MaterialIcons name="more-vert" size={24} color="#9ca3af" />
            </TouchableOpacity>
          }
        >
          <Menu.Item
            onPress={() => setModalOpen(true)}
            title="Ajouter à la playlist"
          />
          <Menu.Item onPress={() => {}} title="Ajouter aux favoris" />
          <Divider />
          <Menu.Item onPress={() => setVisible(false)} title="Fermer" />
        </Menu>
      </TouchableOpacity>
      <AddToPlayslist
        onSuccess={onSuccess}
        onError={onError}
        songId={id}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};
