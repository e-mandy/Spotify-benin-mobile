import { MaterialIconName } from "./input-row.interface";
import { IProps } from "./props.interface";

export interface IButtonProps extends IProps{
  prefixIcon?:MaterialIconName;
  onPress?:() => void
}