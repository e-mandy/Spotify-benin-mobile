import StyledText from "@/src/components/ui/common/StyledText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Redirect, usePathname } from "expo-router";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { View } from "react-native";

// Defining the layout of the custom tab navigator
export default function Layout() {
  const pathname = usePathname();

  const tabElements = [
    {
      name: "Accueil",
      icon: "home",
      path: "/",
    },
    {
      name: "Recherche",
      icon: "search",
      path: "/search",
    },
    {
      name: "Bibliothèque",
      icon: "library-music",
      path: "/library",
    },
    {
      name: "Premium",
      icon: "diamond",
      path: "/premium",
    },
  ] as const;

  // const isLogged = useAuth((state) => state.isLogged);
  // const isLoadingAppState = useAuth((state) => state.isLoadingAppState);
  const isLogged = true;
  const isLoadingAppState = false;
  if (!isLogged && !isLoadingAppState) return <Redirect href="/(auth)" />;

  return (
    <Tabs className="bg-background-dark backdrop-blur-3xl">
      <TabSlot />
      <TabList className="pointer-events-auto mx-auto  w-[90%] rounded-3xl backdrop-blur-3xl bg-black/90 border border-white/5 px-3 py-4  relative -top-10">
        {tabElements.map((tab) => {
          const isCurrentPath = tab.path == pathname;
          return (
            <TabTrigger key={tab.name} name={tab.name} href={tab.path}>
              <View className="flex items-center">
                <MaterialIcons
                  name={tab.icon}
                  color={pathname === tab.path ? "#ef4444" : "#EEE"}
                  size={25}
                />
                <StyledText
                  className={`text-[12px] font-bold ${isCurrentPath ? "text-red-500" : ""}`}
                >
                  {" "}
                  {tab.name}{" "}
                </StyledText>
              </View>
            </TabTrigger>
          );
        })}
      </TabList>
    </Tabs>
  );
}
