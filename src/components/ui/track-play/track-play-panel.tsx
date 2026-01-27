import { useTrackStore } from "@/src/store/track-play.store";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TrackPlayPanel = ({ audioFile }: { audioFile: string }) => {
  const { isPlaying, startSong, pause } = useTrackStore();

  async function togglePlayState() {
    if (isPlaying) pause();
    else await startSong(audioFile);
  }

  return (
    <View className="flex-row justify-between items-center mt-5">
      <View>
        <Text>
          <MaterialIcons size={28} color="#9ca3af" name="shuffle" />
        </Text>
      </View>
      <View className="flex-row justify-between items-center w-[50%]">
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons size={40} color="#fff" name="skip-previous" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={togglePlayState}
          activeOpacity={0.7}
          className="h-20 w-20 flex flex-col justify-center items-center rounded-full bg-primary"
        >
          <MaterialIcons
            size={40}
            color="#fff"
            name={!isPlaying ? "play-arrow" : "pause"}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
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
