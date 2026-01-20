import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ComponentProps } from "react";

// This extracts the 'name' prop type specifically
export type MaterialCommunityIcons = ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];

export interface InputRowProps {
  name: string;
  className?: string;
  prefixIcon?: MaterialCommunityIcons;
  placeholder?: string;
  secureTextEntry?: boolean;
  isDateField?: boolean;
  onChangeText?: (fieldName: string, text: string) => void;
}
