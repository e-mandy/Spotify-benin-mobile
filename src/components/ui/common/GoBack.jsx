import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";

const GoBack = () => {
  const router = useRouter();
  return (
    <View>
      <Pressable onPress={() => router.back()}>
        <MaterialCommunityIcons size={37} name="chevron-left" color="#B6A0A0" />
      </Pressable>
    </View>
  );
};

export default GoBack;
