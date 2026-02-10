import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import StyledText from "./StyledText";

type MusicTitle = {
  title: string;
  author: string;
};

const MusicTitle = ({ title, author }: MusicTitle) => {
  return (
    <Pressable className="w-full flex-row justify-between items-center p-2 my-2">
      <View className="flex-row items-center">
        <View className="h-12 w-12 rounded-lg overflow-hidden mr-3">
          <ImageBackground
            className="w-full h-full"
            resizeMode="cover"
            source={require("@/assets/images/mkay.jpeg")}
          />
        </View>
        <View className="flex-col justify-start">
          <StyledText className="font-semibold text-lg text-white">
            {title}
          </StyledText>
          <StyledText className="text-sm text-white opacity-40">
            {author}
          </StyledText>
        </View>
      </View>
      <TouchableOpacity className="p-1 rounded-lg">
        <Ionicons name="ellipsis-vertical" color="white" size={20} />
      </TouchableOpacity>
    </Pressable>
  );
};

export default MusicTitle;
