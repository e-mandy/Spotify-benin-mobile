import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { StyledText } from "../common";

const ReconnaissanceVocale = () => {
  return (
    <TouchableOpacity className="w-full rounded-full bg-primary py-5 flex-row justify-center items-center gap-5">
      <View className="object-contain  rounded-full">
        <Ionicons name="musical-notes" size={24} />
      </View>
      <StyledText className="text-xl font-bold">Identifier ce son</StyledText>
    </TouchableOpacity>
  );
};

export default ReconnaissanceVocale;
