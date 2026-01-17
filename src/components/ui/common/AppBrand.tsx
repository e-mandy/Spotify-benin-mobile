import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View } from "react-native";

const AppBrand = () => {
  return (
    <View
      style={{ height: 80, width: 80 }}
      className="mb-6 relative mx-auto rounded-full bg-gradient-to-br from-[#2A2020] to-[#171212] border border-[#372a2a] flex items-center justify-center shadow-lg overflow-hidden group"
    >
      <View
        className="absolute inset-0 opacity-30  bg-cover bg-center"
      ></View>
      <View className="material-symbols-outlined  text-primary text-4xl relative z-10">
        <MaterialIcons color="#ef4444" size={40} name="graphic-eq" />
      </View>
    </View>
  );
};

export default AppBrand;
