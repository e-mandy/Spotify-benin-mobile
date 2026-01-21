import { IUser } from "@/src/interfaces/user.interface";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

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

  const defaultUri =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDiF3M1z_rK187Rxl9Ru8Sgdx1awDmihIJVo91LpJ-CfJbvgX_y3D1wGhqipJkerYvW7yUNVKSXkmZ_i2XKDaYb-aAV3ifSIjB_bPkk6CvusbqQ24FgxI_b-NNCESeWPK2ZkHg2PCw_vvql1_2pxAGIkVEo1qLDU9qcGa_5vvjPFl_dkVUbdJootL7cVJv0q851I6AU_8VFeZRLsLEkcpRGL1BmCiKiYKBTf726WBJRNH95umIqSLWc3QXDdAsjbqcxGzKQUGKzk2RO";

  const greetingKey = isMorning ? "morning" : "afternoon";

  return (
    <View className="flex-row items-center justify-between px-5 py-2">
      <View className="flex-row items-center gap-3 mb-3">
        <Image
          source={{
            uri: user?.photo || defaultUri,
          }}
          className="w-10 h-10 rounded-full"
        />
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
