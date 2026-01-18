import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ComponentProps } from "react";

// This extracts the 'name' prop type specifically
export type MaterialIconName = ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export interface InputRowProps {
  name: string;
  className?: string;
  prefixIcon?: MaterialIconName;
  placeholder?: string;
  secureTextEntry?: boolean;
  isDateField?: boolean;
  onChangeText?: (fieldName: string, text: string) => void;
}
