import { AppWrapper } from "@/src/components/ui/common";
import BenineseLegends from "@/src/components/ui/home/BenineseLegends";
import Discoveries from "@/src/components/ui/home/Discoveries";
import MixDuJour from "@/src/components/ui/home/MixDuJour";
import Patrimoine from "@/src/components/ui/home/Patrimoine";
import TopBar from "@/src/components/ui/home/TopBar";
import useAuth from "@/src/store/auth.store";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const user = useAuth((state) => state.user);
  return (
    <AppWrapper withScrollView={false}>
      <TopBar user={user} />
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <Patrimoine />
        <MixDuJour />
        <BenineseLegends />
        <Discoveries />
      </ScrollView>
    </AppWrapper>
  );
}
