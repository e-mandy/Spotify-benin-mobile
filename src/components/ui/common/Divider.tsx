import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const Divider = () => {
  return (
    <View className="mt-3">
      <View className="flex flex-row items-center">
        <View className="divide-solid h-[0.3] bg-muted divide-x-8 divide-muted w-1/3"></View>
        <StyledText className="w-1/3 text-muted text-sm mx-1 mb-2">
          OU CONTINUER AVEC
        </StyledText>
        <View className="divide-x-2 h-[0.3] bg-muted w-1/3"></View>
      </View>
      <View className="flex flex-row items-center justify-center gap-x-4">
        <View
          style={{ width: 50, height: 50 }}
          className="bg-surface-dark/80  border-muted border rounded-full flex items-center justify-center place-content-center"
        >
          <StyledText>
            <MaterialCommunityIcons size={24} name="google" />
          </StyledText>
        </View>
      </View>
    </View>
  );
};

export default Divider;
