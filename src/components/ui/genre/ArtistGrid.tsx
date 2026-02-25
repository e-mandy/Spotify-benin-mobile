import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { StyledText } from "../common";

const ArtistGrid = ({ name }) => {
  return (
    <TouchableOpacity className="flex-col items-center gap-2">
      <View className="h-48 w-48 rounded-full overflow-hidden">
        <ImageBackground
          className="h-full w-full"
          source={require("@/assets/images/mkay.jpeg")}
        />
      </View>
      <StyledText className="text-xl font-semibold">Nom artiste</StyledText>
      <StyledText className="text-sm opacity-50">Artiste</StyledText>
    </TouchableOpacity>
  );
};

export default ArtistGrid;
