import { useTrackStore } from "@/src/store/track-play.store";
import {
  Entypo,
  FontAwesome6,
  MaterialIcons
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const TrackItem = ({
  id,
  label,
  artistName,
  photo,
  onFavorite = () => {},
  onOptions = () => {},
}) => {
  const router = useRouter();
  const { trackHandler, currentSong, resume, pause, isPlaying } =
    useTrackStore();

  const isTheSongOnTrack = +id === +currentSong?.info?.id;

  const onTrackPlay = async () => {
    try {
      await trackHandler(id);
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

  return (
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
        <Text className="text-base font-bold text-white" numberOfLines={1}>
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

      <TouchableOpacity
        onPress={onOptions}
        className="h-8 w-8 items-center justify-center"
      >
        <MaterialIcons name="more-vert" size={24} color="#9ca3af" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
