import { getYear } from "@/src/utils/get-year-from-datetime";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";

const Album = ({ name: title, releaseDate: year, photo }) => {
  return (
    <TouchableOpacity className="mb-4">
      <View className="w-32 h-32 overflow-hidden rounded-3xl mb-2">
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

export default Album;
