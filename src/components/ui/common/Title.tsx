import { IProps } from "@/src/interfaces/props.interface";
import StyledText from "./StyledText";

const Title = ({ children, className}:IProps) => {
  return (
    <StyledText className={`font-spline-bold ${className}`}>
      { children }
    </StyledText>
  );
};

export default Title;