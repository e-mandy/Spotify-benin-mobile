import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const DataLoader = () => {
  return (
    <View className="flex-1 w-16 mx-auto  bg-transparent my-8">
      <View className="h-16 w-16 items-center justify-center rounded-full bg-slate-100 shadow-sm">
        <StyledText className="text-primary animate-spin">
          <EvilIcons name="spinner-3" size={40} />
        </StyledText>
      </View>
    </View>
  );
};

export default DataLoader;
