import React from "react";
import { ImageBackground, View } from "react-native";
import { StyledText } from "../common";

const Artist = () => {
  return (
    <View className="flex-col items-center">
      <View className="h-20 w-20 rounded-full overflow-hidden">
        <ImageBackground source={require("@/assets/images/mkay.jpeg")} />
      </View>
      <StyledText>Nom artiste</StyledText>
    </View>
  );
};

export default Artist;
