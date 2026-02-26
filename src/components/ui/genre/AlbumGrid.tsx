import { getYear } from "@/src/utils/get-year-from-datetime";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { StyledText } from "../common";

const AlbumGrid = ({ name: title, photo, releaseDate: year }) => {
  return (
    <TouchableOpacity className="mb-4">
      <View className="w-48 h-48 overflow-hidden rounded-3xl mb-2">
        <ImageBackground
          className="w-full h-full"
          source={{
            uri: photo,
          }}
        />
      </View>
      <View>
        <StyledText className="text-base font-bold">{title}</StyledText>
        <View className="flex-row items-center gap-2">
          <StyledText className="text-xs text-white opacity-40 font-semibold">
            {getYear(year)}
          </StyledText>
          <FontAwesome name="circle" color="white" size={5} />
          <StyledText className="text-xs text-white opacity-40 font-semibold">
            Album
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AlbumGrid;
