import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View } from "react-native";
import { MaterialIconName } from "../../../interfaces/input-row.interface";

const CircleBrand = ({
  icon,
  className = "",
  color = "#ef4444",
  height = 80,
  width = 80,
}: {
  icon: MaterialIconName;
  className?: string;
  color?: string;
  height?: number;
  width?: number;
}) => {
  return (
    <View
      style={{ height, width }}
      className={`mb-6 relative mx-auto rounded-full bg-gradient-to-br from-[#2A2020] to-[#171212] border border-[#372a2a] flex items-center justify-center shadow-lg overflow-hidden group ${className}`}
    >
      <View className="absolute inset-0 opacity-30  bg-cover bg-center"></View>
      <View className="material-symbols-outlined  text-primary text-4xl relative z-10">
        <MaterialIcons color={color} size={40} name={icon} />
      </View>
    </View>
  );
};

export default CircleBrand;
