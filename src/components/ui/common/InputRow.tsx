import { InputRowProps } from "@/src/interfaces/input-row.interface";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { TextInput, View } from "react-native";

const InputRow = ({
  className,
  prefixIcon,
  placeholder,
  isPassword,
  onChange,
}: InputRowProps) => {
  return (
    <View className="relative">
      {prefixIcon && (
        <MaterialCommunityIcons
          name={prefixIcon}
          className="absolute right-7 z-20 top-5"
          size={20}
          color="#B6A0A0"
        />
      )}
      <TextInput
        onChangeText={onChange}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        className={`bg-surface-dark/80 w-full text-muted rounded-full p-5  mx-auto placeholder:text-xl font-spline-bold placeholder:text-muted ${className}`}
      ></TextInput>
    </View>
  );
};

export default InputRow;
