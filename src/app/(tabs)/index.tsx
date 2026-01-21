import { AppWrapper } from "@/src/components/ui/common";
import MixDuJour from "@/src/components/ui/home/MixDuJour";
import Patrimoine from "@/src/components/ui/home/Patrimoine";
import TopBar from "@/src/components/ui/home/TopBar";
import useAuth from "@/src/store/auth.store";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const user = useAuth((state) => state.user);
  return (
    <AppWrapper className="!bg-background-dark">
      <TopBar user={user} />

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <Patrimoine />

        <MixDuJour />

        {/* LEGENDES */}
        <Text className="text-xl font-bold text-white mb-4">
          Légendes du Bénin
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-12"
        >
          {["Angélique", "G.G. Vickey", "Sagbohan", "Poly-Rythmo"].map(
            (name, index) => (
              <View key={index} className="items-center mr-6">
                <View className="w-24 h-24 rounded-full bg-[#251e1e] mb-2" />
                <Text className="text-xs text-gray-300">{name}</Text>
              </View>
            ),
          )}
        </ScrollView>
      </ScrollView>
    </AppWrapper>
  );
}

//  const isMorning = new Date().getHours() <= 12;
//   const greeting = {
//     morning: {
//       french: "BONJOUR",
//       yoruba: "Kú àárọ̀",
//     },
//     afternoon: {
//       french: "BONSOIR",
//       yoruba: "Ẹ kú alẹ́",
//     },
//   };
//   const greetingKey = isMorning ? "morning" : "afternoon";
