import useTrackPlay, { useTrackStore } from "@/src/store/track-play.store";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { useAudioPlayerStatus } from "expo-audio";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TrackPlayPanel = () => {
  const { isPlaying, pause, resume, backToPrev, goToNext } = useTrackStore();
  const sound = useTrackPlay((state) => state.currentSong.sound);
  const { isBuffering } = useAudioPlayerStatus(sound);

  async function togglePlayState() {
    if (isPlaying) pause();
    else resume();
  }

  return (
    <View className="flex-row justify-between items-center mt-5">
      <View>
        <Text>
          <MaterialIcons size={28} color="#9ca3af" name="shuffle" />
        </Text>
      </View>
      <View className="flex-row justify-between items-center w-[50%]">
        <TouchableOpacity onPress={backToPrev} activeOpacity={0.7}>
          <MaterialIcons size={40} color="#fff" name="skip-previous" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={togglePlayState}
          activeOpacity={0.7}
          disabled={isBuffering}
          className={`h-20 w-20 flex flex-col justify-center items-center rounded-full bg-primary`}
        >
          {isBuffering ? (
            <EvilIcons
              size={40}
              color="#fff"
              className="animate-spin"
              name="spinner-3"
            />
          ) : (
            <MaterialIcons
              size={40}
              color="#fff"
              name={!isPlaying ? "play-arrow" : "pause"}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={goToNext} activeOpacity={0.7}>
          <MaterialIcons size={40} color="#fff" name="skip-next" />
        </TouchableOpacity>
      </View>
      <View>
        <Text>
          <MaterialIcons size={28} color="#9ca3af" name="repeat" />
        </Text>
      </View>
    </View>
  );
};

export default TrackPlayPanel;
