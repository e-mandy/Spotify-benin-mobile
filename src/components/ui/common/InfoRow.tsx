import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <View className="flex-row items-center py-3 border-b border-white/5">
      <View className="bg-[#1A0F0E] p-2 rounded-xl mr-4">
        <MaterialIcons name={icon} size={22} color="#9D2721" />
      </View>
      <View>
        <Text className="text-gray-500 text-xs">{label}</Text>
        <Text className="text-white text-base font-medium">{value}</Text>
      </View>
    </View>
  );
}

export default InfoRow;
