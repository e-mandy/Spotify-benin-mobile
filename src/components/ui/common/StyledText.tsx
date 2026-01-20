import { IProps } from "@/src/interfaces/props.interface";
import { Text } from "react-native";

const StyledText = ({ children, className }: IProps) => {
  return (
    <Text className={`text-2xl text-light  ${className}`}>{children}</Text>
  );
};

export default StyledText;
