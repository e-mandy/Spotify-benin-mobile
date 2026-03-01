import React from "react";
import { ImageBackground, View } from "react-native";
import { StyledText } from "../common";

const Artist = ({ singerName: name, photo }) => {
  return (
    <View className="flex-col items-center gap-2">
      <View className="h-24 w-24 rounded-full overflow-hidden">
        <ImageBackground
          className="h-full w-full"
          source={{
            uri: photo,
          }}
        />
      </View>
      <StyledText className="text-xl">{name}</StyledText>
    </View>
  );
};

export default Artist;
