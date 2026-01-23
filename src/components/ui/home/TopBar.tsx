import { defaultProfileUri as defaultUri } from "@/src/constants/url";
import { IUser } from "@/src/interfaces/user.interface";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TopBar = ({ user }: { user: IUser }) => {
  const isMorning = new Date().getHours() <= 12;
  const greeting = {
    morning: {
      french: "BONJOUR",
      yoruba: "Kú àárọ̀",
    },
    afternoon: {
      french: "BONSOIR",
      yoruba: "Ẹ kú alẹ́",
    },
  };

  const greetingKey = isMorning ? "morning" : "afternoon";
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-5 py-2">
      <View className="flex-row items-center gap-3 mb-3">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push("/profile")}
        >
          <Image
            source={{
              uri: user?.photo || defaultUri,
            }}
            className="w-10 h-10 rounded-full"
          />
        </TouchableOpacity>
        <View>
          <Text className="text-xs text-gray-400 uppercase">
            {greeting[greetingKey].french}
          </Text>
          <Text className="text-lg font-bold text-white">
            {greeting[greetingKey].yoruba}
          </Text>
        </View>
      </View>

      <View className="flex-row gap-4">
        <MaterialIcons name="notifications" size={24} color="#ccc" />
        <MaterialIcons name="settings" size={24} color="#ccc" />
      </View>
    </View>
  );
};

export default TopBar;
