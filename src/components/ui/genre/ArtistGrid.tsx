import React from "react";
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";
import { StyledText } from "../common";

const { width } = Dimensions.get("screen");

const ArtistGrid = ({ name }) => {
  return (
    <TouchableOpacity className="flex-col items-center gap-2">
      <View
        style={{
          width: (width * 40) / 100,
          height: (width * 40) / 100,
        }}
        className="rounded-full overflow-hidden"
      >
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
