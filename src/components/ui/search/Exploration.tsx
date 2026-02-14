import React from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const { width } = Dimensions.get("screen");

const Exploration = ({ image, title, subtitle }) => {
  return (
    <TouchableOpacity
      style={{ width: width * 0.45 }}
      className="h-60 rounded-2xl overflow-hidden"
    >
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        className="relative w-full h-full"
      >
        <View className="absolute bottom-5 left-2">
          <Text className="font-bold text-white mb-2 text-lg" numberOfLines={2}>
            {title}
          </Text>
          <Text className="text-xs text-white pr-5">{subtitle}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Exploration;
