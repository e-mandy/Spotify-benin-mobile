import { styles } from "@/src/constants/styles";
import useTrackPlay, { useTrackStore } from "@/src/store/track-play.store";
import { truncate } from "@/src/utils/truncate";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { useAudioPlayerStatus } from "expo-audio";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import TrackSeeker from "../track-play/seeker";

const AppBottomPlayer = () => {
  const { currentSong } = useTrackStore();
  const router = useRouter();
  if (!currentSong?.info) return null;

  return (
    <>
      <View className="flex justify-center w-[90%] h-20 px-2 relative -top-5 rounded-3xl mx-auto bg-[#3E1010]/95">
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => router.push("/(player)")}
          className="flex flex-row gap-x-2 justify-between items-center"
        >
          <View className="flex flex-row gap-x-3">
            <View className="w-14 h-14">
              <Image
                className="rounded-full mx-3"
                style={styles.image}
                source={currentSong?.info?.cover}
                contentFit="contain"
              />
            </View>
            <View className="flex">
              <Text
                className="font-spline-bold text-white text-xl"
                numberOfLines={1}
              >
                {" "}
                {currentSong?.info.title}{" "}
              </Text>
              <Text numberOfLines={1} className="text-gray-300 text-sm">
                {truncate(currentSong?.info.singer, 30)}
              </Text>
            </View>
          </View>
          <View>
            <MiniTrackPanel />
          </View>
        </TouchableOpacity>
        <TrackSeeker className="!my-0" height={0} showDuration={false} />
      </View>
    </>
  );
};

function MiniTrackPanel() {
  const { backToPrev, goToNext, isPlaying, resume, pause } = useTrackStore();

  async function togglePlayState() {
    if (isPlaying) pause();
    else resume();
  }

  const sound = useTrackPlay((state) => state.currentSong.sound);
  const { isBuffering } = useAudioPlayerStatus(sound);

  return (
    <View className="flex-row justify-between items-center">
      <TouchableOpacity onPress={backToPrev} activeOpacity={0.7}>
        <MaterialIcons size={30} color="#fff" name="skip-previous" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={togglePlayState}
        activeOpacity={0.7}
        disabled={isBuffering}
        className={`h-11 w-11 flex flex-col justify-center items-center rounded-full bg-primary`}
      >
        {isBuffering ? (
          <EvilIcons
            size={20}
            color="#fff"
            className="animate-spin"
            name="spinner-3"
          />
        ) : (
          <MaterialIcons
            size={20}
            color="#fff"
            name={!isPlaying ? "play-arrow" : "pause"}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={goToNext} activeOpacity={0.7}>
        <MaterialIcons size={30} color="#fff" name="skip-next" />
      </TouchableOpacity>
    </View>
  );
}

export default AppBottomPlayer;
