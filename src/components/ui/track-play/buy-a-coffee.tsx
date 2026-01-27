import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BuyACoffee = () => {
  return (
    <View className="mt-8  max-w-[80%] mx-auto bg-surface-dark rounded-full py-4 px-8 flex items-center justify-center">
      <TouchableOpacity
        className="flex flex-row items-center gap-x-3"
        activeOpacity={0.7}
      >
        <View className="bg-red-500/40 p-1 rounded-2xl">
          <MaterialIcons size={26} name="coffee" color="#d84141" />
        </View>
        <View>
          <Text className="font-spline-bold text-white items-center text-xl">
            Offrir une tasse de café
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BuyACoffee;
