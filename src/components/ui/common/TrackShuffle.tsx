import { useTrackStore } from "@/src/store/track-play.store";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TrackShuffle = ({ playlistName, songIds, songId = null }) => {
  const router = useRouter();

  const { playFromPlaylist } = useTrackStore();

  const handlePlay = async () => {
    await playFromPlaylist(playlistName, songIds, songId);
    router.push("/(player)");
  };

  return (
    <View className="flex flex-row items-center gap-x-4 mt-4">
      <TouchableOpacity
        onPress={handlePlay}
        activeOpacity={0.7}
        className="flex items-center justify-center border border-muted/40 w-14 h-14 rounded-full"
      >
        <Text>
          <MaterialIcons color="#fff" size={20} name="shuffle" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePlay}
        activeOpacity={0.7}
        className="bg-primary border-[0.5px] border-white/20 items-center justify-center w-14 h-14 rounded-full"
      >
        <Text>
          <Entypo color="#fff" size={25} name="controller-play" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrackShuffle;
