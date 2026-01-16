import { IButtonProps } from "@/src/interfaces/button.interface";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Pressable, View } from "react-native";
import StyledText from "./StyledText";

const Button = ({ children, className, prefixIcon }: IButtonProps) => {
  return (
    <View>
      <Pressable
        className={`rounded-full bg-red-500/80 hover:bg-[#372a2a] border border-[#372a2a] flex flex-row items-center justify-center transition-colors py-4 ${className}`}
      >
        <StyledText className="font-bold"> {children} </StyledText>
        {prefixIcon && (
          <MaterialCommunityIcons size={25} color="#fff" name={prefixIcon} />
        )}
      </Pressable>
    </View>
  );
};

export default Button;
