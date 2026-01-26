import { IOutlinedButton } from "@/src/interfaces/outlined-button.interface";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const OutlinedButton = (props: IOutlinedButton) => {
  return (
    <TouchableOpacity
      disabled={props.disable}
      onPress={props.onPress}
      className={`border border-gray-600 h-14 rounded-2xl flex-row items-center mt-5 justify-center ${props.className}`}
    >
      <MaterialIcons name={props.icon} size={20} color={props.iconColor} />
      <Text className="text-white font-bold text-lg ml-2 flex-row gap-x-2">
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlinedButton;
