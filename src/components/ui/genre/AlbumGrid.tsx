import { getYear } from "@/src/utils/get-year-from-datetime";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";
import { StyledText } from "../common";

const { width } = Dimensions.get("screen");

const AlbumGrid = ({ name: title, photo, releaseDate: year }) => {
  return (
    <TouchableOpacity className="mb-4">
      <View
        style={{
          width: (width * 40) / 100,
          height: (width * 40) / 100,
        }}
        className="overflow-hidden rounded-3xl mb-2"
      >
        <ImageBackground
          className="w-full h-full"
          source={{
            uri: photo,
          }}
        />
      </View>
      <View>
        <StyledText className="text-lg font-bold">{title}</StyledText>
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
