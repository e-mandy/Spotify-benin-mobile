import React from "react";
import { ImageBackground, Text, View } from "react-native";

const Exploration = ({ image, title, subtitle }) => {
  return (
    <View className="w-[40%]">
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        className="relative w-full h-52"
      >
        <View className="absolute bottom-5 left-5">
          <Text>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Exploration;
