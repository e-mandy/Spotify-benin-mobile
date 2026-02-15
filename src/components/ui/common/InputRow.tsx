import { InputRowProps } from "@/src/interfaces/input-row.interface";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { DateInput } from "./DateInput";

const InputRow = (props: InputRowProps) => {
  const defaultInputClass =
    "bg-surface-dark/80  w-full text-muted rounded-full p-5  mx-auto placeholder:text-xl  placeholder:text-muted";
  const [isFocused, setFocused] = useState(false);

  return (
    <View className="relative">
      {props.prefixIcon && (
        <MaterialCommunityIcons
          name={props.prefixIcon}
          className="absolute right-7 z-20 top-5"
          size={20}
          color="#B6A0A0"
        />
      )}
      {props.isDateField ? (
        <DateInput className={defaultInputClass} {...props} />
      ) : (
        <TextInput
          {...props}
          onChangeText={(text) => props.onChangeText(props.name, text)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${defaultInputClass} ${props.className} ${isFocused ? " border border-red-500" : ""}`}
        ></TextInput>
      )}
    </View>
  );
};

export default InputRow;
