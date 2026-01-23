import { Entypo, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const TrackItem = ({
  label,
  artistName,
  photo,
  onFavorite = () => {},
  onOptions = () => {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="flex-row items-center gap-4 rounded-[20px] bg-surface-dark px-5 py-4 mb-3"
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
        onPress={onFavorite}
        className="h-8 w-8 items-center justify-center rounded-full border border-gray-600"
      >
        <Entypo name="controller-play" size={18} color="#9ca3af" />
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
