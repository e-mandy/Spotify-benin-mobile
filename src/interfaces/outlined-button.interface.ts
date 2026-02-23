import { MaterialIconName } from "./input-row.interface";
import { IProps } from "./props.interface";

export interface IOutlinedButton extends IProps {
  onPress?: () => void;
  icon?: MaterialIconName;
  iconColor?: string;
  disable?: boolean;
  className?: string;
  activeOpacity?: number;
  textClassName?: string;
}
