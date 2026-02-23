import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";
import { StyledText } from "../common";

const PinnedPlaylist = () => {
  return (
    <View className="w-full h-40 relative mb-3 bg-red-900 py-4 rounded-[42px] overflow-hidden">
      <View className="h-full flex-col justify-center pl-6">
        <View className="flex-row items-center gap-x-2 mb-3">
          <Entypo name="pin" size={20} color="white" />
          <StyledText className="text-[15px] uppercase">Epinglé</StyledText>
        </View>
        <StyledText className="text-4xl font-bold mb-4">
          Titres Likés
        </StyledText>
        <View className="flex-row gap-2 p-2 items-center">
          <StyledText className="text-[15px] text-muted font-semibold">
            342 titres
          </StyledText>
          <FontAwesome name="circle" color="white" size={5} />
          <StyledText className="text-[15px] text-muted font-semibold">
            Playlist auto
          </StyledText>
        </View>
      </View>
      <View className="absolute -right-8 -top-2 flex-col items-c justify-center rotate-[15deg]">
        <Ionicons
          name="heart"
          color="white"
          size={160}
          className="opacity-10 z-0"
        />
        <Pressable className="absolute w-15 left-[40%] flex-row items-center justify-center rounded-full bg-red-500 p-3">
          <Ionicons
            name="play"
            size={24}
            color="white"
            className="mx-auto -rotate-[15deg]"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PinnedPlaylist;
