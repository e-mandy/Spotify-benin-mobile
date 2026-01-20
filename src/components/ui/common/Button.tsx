import { IButtonProps } from "@/src/interfaces/button.interface";
import { FontAwesome5 } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Pressable, View } from "react-native";
import StyledText from "./StyledText";

const Button = ({
  children,
  className,
  prefixIcon,
  onPress,
  isLoading,
}: IButtonProps) => {
  return (
    <View>
      <Pressable
        disabled={isLoading}
        onPress={onPress}
        className={`rounded-full bg-red-500/80 hover:bg-[#372a2a] border border-[#372a2a] flex flex-row items-center justify-center transition-colors py-4 ${className}`}
      >
        {isLoading ? (
          <View className="animate-spin">
            <FontAwesome5 size={25} color="#fff" name="spinner" />
          </View>
        ) : (
          <>
            <StyledText className="font-bold"> {children} </StyledText>
            {prefixIcon && (
              <MaterialCommunityIcons
                size={25}
                color="#fff"
                name={prefixIcon}
              />
            )}
          </>
        )}
      </Pressable>
    </View>
  );
};

export default Button;
