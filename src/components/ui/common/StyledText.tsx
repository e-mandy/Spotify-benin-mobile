import { IProps } from "@/src/interfaces/props.interface";
import { Text } from "react-native";

const StyledText = ({children, className}:IProps) => {
  return (
    <Text className={`text-2xl text-light leading-10 font-spline-sans-regular ${className}`}>
      { children }
    </Text>
  );
};

export default StyledText;