import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const GoBack = ({ pageTitle = "" }) => {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between px-5 py-4">
      <TouchableOpacity
        onPress={() => router.back()}
        className="p-2 bg-white/10 rounded-full"
      >
        <Text>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </Text>
      </TouchableOpacity>
      <Text className="text-white text-2xl font-bold"> {pageTitle} </Text>
      <View className="w-10" />
    </View>
  );
};

export default GoBack;
