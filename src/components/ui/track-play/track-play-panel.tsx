import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TrackPlayPanel = () => {
  return (
    <View className="flex-row justify-between items-center mt-5">
      <View>
        <Text>
          <MaterialIcons size={28} color="#9ca3af" name="shuffle" />
        </Text>
      </View>
      <View className="flex-row justify-between items-center w-[50%]">
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons size={40} color="#fff" name="skip-previous" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="h-20 w-20 flex flex-col justify-center items-center rounded-full bg-primary"
        >
          <MaterialIcons size={40} color="#fff" name="play-arrow" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons size={40} color="#fff" name="skip-next" />
        </TouchableOpacity>
      </View>
      <View>
        <Text>
          <MaterialIcons size={28} color="#9ca3af" name="repeat" />
        </Text>
      </View>
    </View>
  );
};

export default TrackPlayPanel;
