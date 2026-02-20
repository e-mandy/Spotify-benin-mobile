import useTrackPlay, { useTrackStore } from "@/src/store/track-play.store";
import { countRecordDuration } from "@/src/utils/count-time";
import Slider from "@react-native-community/slider";
import { useAudioPlayerStatus } from "expo-audio";
import React from "react";
import { Text, View } from "react-native";

const TrackSeeker = ({ height = 20, className = "", showDuration = true }) => {
  const sound = useTrackPlay((state) => state.currentSong?.sound);
  const { seek } = useTrackStore();
  const { currentTime, duration } = useAudioPlayerStatus(sound);

  return (
    <View className={`my-2 ${className}`}>
      <View>
        <Slider
          style={{ height }}
          onValueChange={(value) => seek(value)}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          minimumTrackTintColor="#d84141"
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor="#d84141"
        />
        <View />

        {showDuration && (
          <View className="flex-row justify-between px-4">
            <Text className="text-xs font-bold text-white/70">
              {countRecordDuration(parseInt(currentTime + ""))}
            </Text>
            <Text className="text-xs font-bold text-white/70">
              {countRecordDuration(parseInt(duration + ""))}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default TrackSeeker;
