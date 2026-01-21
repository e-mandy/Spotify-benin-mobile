import { MaterialCommunityIcons } from "./input-row.interface";
import { IProps } from "./props.interface";

export interface IButtonProps extends IProps {
  prefixIcon?: MaterialCommunityIcons;
  onPress?: () => void;
  isLoading?: boolean;
  textStyle?: string;
  colorIcon?: string;
}
