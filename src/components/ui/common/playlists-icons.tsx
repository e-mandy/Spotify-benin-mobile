import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export const FavoriteIcon = (
  <View className="rotate-[15deg]">
    <Ionicons name="heart" color="#f87171" size={160} className="opacity-10" />
  </View>
);

export const PlaylistIcon = (
  <Ionicons name="musical-note" size={45} color="#d84141" />
);
