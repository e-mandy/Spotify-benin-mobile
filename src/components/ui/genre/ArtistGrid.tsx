import { truncate } from "@/src/utils/truncate";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View
} from "react-native";
import { StyledText } from "../common";

const { width } = Dimensions.get("screen");

const ArtistGrid = ({ singerName: name, photo }) => {
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
          source={{
            uri: photo,
          }}
        />
      </View>
      <StyledText className="text-xl font-semibold">
        {truncate(name, 20)}
      </StyledText>
      <StyledText className="text-sm opacity-50">Artiste</StyledText>
    </TouchableOpacity>
  );
};

export default ArtistGrid;
