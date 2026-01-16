import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ComponentProps } from "react";

// This extracts the 'name' prop type specifically
export type MaterialIconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

export interface InputRowProps {
  className?: string;
  prefixIcon?: MaterialIconName;
  placeholder?: string;
  isPassword?: boolean;
  onChange?: (text: string) => void;
}
