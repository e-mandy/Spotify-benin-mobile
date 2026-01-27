import Slider from "@react-native-community/slider";
import React from "react";
import { Text, View } from "react-native";

const TrackSeeker = () => {
  return (
    <View className="my-2">
      <View>
        <Slider
          style={{ height: 20 }}
          minimumValue={0}
          maximumValue={10}
          value={8}
          minimumTrackTintColor="#d84141" // Ton rouge identité
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor="#d84141"
        />
        <View />

        <View className="flex-row justify-between px-4">
          <Text className="text-xs font-bold text-white/70">00:00</Text>
          <Text className="text-xs font-bold text-white/70">05:25</Text>
        </View>
      </View>
    </View>
  );
};

export default TrackSeeker;
